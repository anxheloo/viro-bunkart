"use strict";
/**
 * ViroARPlaneSelector
 *
 * This component wraps the logic required to enable user selection
 * of an AR plane. This currently only allows for 1 plane to be selected,
 * but could easily be modified to allow for more planes.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViroARPlaneSelector = void 0;
const React = __importStar(require("react"));
const ViroNode_1 = require("../ViroNode");
const ViroQuad_1 = require("../ViroQuad");
const ViroMaterials_1 = __importDefault(require("../Material/ViroMaterials"));
const ViroARPlane_1 = require("../AR/ViroARPlane");
const _maxPlanes = 15;
const _planePrefix = "ViroARPlaneSelector_Plane_";
/**
 * This component wraps the logic required to enable user selection
 * of an AR plane. This currently only allows for 1 plane to be selected,
 * but could easily be modified to allow for more planes.
 */
class ViroARPlaneSelector extends React.Component {
    constructor() {
        super(...arguments);
        this._component = null;
        this.state = {
            selectedSurface: -1,
            foundARPlanes: [],
            arPlaneSizes: [],
        };
        this._getOnClickSurface = (index, event) => {
            if (event.clickState < 3) {
                return;
            }
            // Get the plane data before updating state to avoid race conditions
            const selectedPlane = this.state.foundARPlanes[index];
            if (!selectedPlane) {
                console.warn("ViroARPlaneSelector: Cannot select plane - plane data not found");
                return;
            }
            // Update state and call callback with the captured data
            this.setState({ selectedSurface: index }, () => {
                this._onPlaneSelected(selectedPlane);
            });
        };
        this._onARPlaneUpdated = (index) => {
            return (updateMap) => {
                let newPlanes = [...this.state.foundARPlanes];
                newPlanes[index] = updateMap;
                this.setState({
                    foundARPlanes: newPlanes,
                    arPlaneSizes: this.state.arPlaneSizes,
                });
            };
        };
        this._onPlaneSelected = (updateMap) => {
            this.props.onPlaneSelected && this.props.onPlaneSelected(updateMap);
        };
        /*
        This function allows the user to reset the surface and select a new plane.
        */
        this.reset = () => {
            this.setState({
                selectedSurface: -1,
            });
        };
    }
    render() {
        return <ViroNode_1.ViroNode>{this._getARPlanes()}</ViroNode_1.ViroNode>;
    }
    _getARPlanes() {
        // Always render a fixed number of planes, controlling visibility instead of conditional rendering
        let arPlanes = [];
        let numPlanes = this.props.maxPlanes || _maxPlanes;
        // Create all plane slots (both detected and placeholder)
        for (let i = 0; i < numPlanes; i++) {
            // Determine if this is the selected plane
            const isSelected = this.state.selectedSurface === i;
            // Get real plane data if available, or use defaults
            const foundARPlane = this.state.foundARPlanes[i];
            const hasPlaneData = !!foundARPlane;
            // Extract plane data or use defaults
            const surfaceWidth = hasPlaneData ? foundARPlane.width || 0.5 : 0.5;
            const surfaceHeight = hasPlaneData ? foundARPlane.height || 0.5 : 0.5;
            const surfacePosition = hasPlaneData
                ? foundARPlane.center || [0, 0, 0]
                : [0, 0, 0];
            const anchorId = hasPlaneData
                ? foundARPlane.anchorId
                : undefined;
            // Determine visibility based on selection state
            // - In selection mode (selectedSurface === -1): show all planes
            // - In selected mode: only show the selected plane
            const isVisible = this.state.selectedSurface === -1 || isSelected;
            arPlanes.push(<ViroARPlane_1.ViroARPlane key={_planePrefix + i} minWidth={this.props.minWidth || 0.5} minHeight={this.props.minHeight || 0.5} alignment={this.props.alignment} anchorId={anchorId} onAnchorFound={(anchor) => {
                    // If we find an anchor, update our plane data
                    this._onARPlaneUpdated(i)(anchor);
                }} onAnchorUpdated={this._onARPlaneUpdated(i)}>
          {/* Always render both the quad and children, controlling only visibility */}
          <ViroQuad_1.ViroQuad materials={"ViroARPlaneSelector_Translucent"} onClickState={(event) => this._getOnClickSurface(i, event)} position={surfacePosition} width={surfaceWidth} height={surfaceHeight} rotation={[-90, 0, 0]} opacity={isSelected ? 0 : isVisible ? 1 : 0}/>

          {/* Wrap children in a ViroNode to control visibility if children exist */}
          {this.props.children && (<ViroNode_1.ViroNode opacity={isSelected ? 1 : 0}>
              {this.props.children}
            </ViroNode_1.ViroNode>)}
        </ViroARPlane_1.ViroARPlane>);
        }
        return arPlanes;
    }
}
exports.ViroARPlaneSelector = ViroARPlaneSelector;
// Register the translucent material for the plane selector
ViroMaterials_1.default.registerMaterials({
    ViroARPlaneSelector_Translucent: {
        lightingModel: "Constant",
        diffuseColor: "#88888888",
    },
});
//# sourceMappingURL=ViroARPlaneSelector.js.map