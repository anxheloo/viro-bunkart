<p align="center" style="background-color: #CCCCCC;">
  <a href="https://www.reactvision.xyz/">
    <img src="https://jjhxsdfjbcyrgmbjocnp.supabase.co/storage/v1/object/public/Downloads/ReactVision/rv-logo-icon.png" alt="react vision logo" width="120px" height="120px">
  </a>
</p>

[![npm version](https://img.shields.io/npm/v/@reactvision/react-viro)](https://www.npmjs.com/package/@reactvision/react-viro)
[![downloads](https://img.shields.io/npm/dm/@reactvision/react-viro?color=purple)](https://www.npmjs.com/package/@reactvision/react-viro)
[![Discord](https://img.shields.io/discord/774471080713781259?label=Discord)](https://discord.gg/H3ksm5NhzT)

# ViroReact

ViroReact is a library for developers to rapidly build augmented reality (AR) and virtual reality (VR) experiences. Developers write in React Native and Viro runs their code natively across all mobile VR (including Google Daydream, Samsung Gear VR, and Google Cardboard for iOS and Android) and AR (iOS ARKit and Android ARCore) platforms.

<table>
  <tr>
    <td align="center">
      <img height="200" src="https://raw.githubusercontent.com/viromedia/viro/master/code-samples/js/ARCarDemo/viro_car_marker_demo.gif">
    </td>
    <td align="center">
      <img height="200" src="https://github.com/ViroCommunity/viro/assets/430272/b153b8e4-7b40-4197-b05b-dd1eb1566102">
    </td>
  </tr>
</table>

# Documentation

[Documentation can be found here](https://viro-community.readme.io/docs/overview). While we do our best to keep all documentation up to date you may come across issues with broken links or outdated code samples If you do come across any issues please do let us know by either submitting an edit or [get in touch on Discord.](https://discord.gg/H3ksm5NhzT)

## Getting Started

If you are starting a fresh project with ViroReact, consider cloning one of our starter kits:

- [Expo + TypeScript](https://github.com/ReactVision/expo-starter-kit-typescript)
- [React Native](https://github.com/ReactVision/starter-kit)
- [Expo + JavaScript](https://github.com/ReactVision/expo-starter-kit)

## React Native New Architecture Support

ViroReact now supports React Native's New Architecture (Fabric) with automatic detection. The library will automatically detect whether your app is using the New Architecture and use the appropriate implementation:

```javascript
// Import ViroReact components - they will automatically use the right implementation
import { ViroARScene, Viro3DObject } from "@reactvision/react-viro";
```

If you prefer to explicitly use a specific implementation, you can still do so:

```javascript
// Explicitly use the Legacy Architecture implementation
import { ViroARScene, Viro3DObject } from "@reactvision/react-viro/index";

// Explicitly use the New Architecture (Fabric) implementation
import { ViroARScene, Viro3DObject } from "@reactvision/react-viro/fabric";
```

The API remains the same across all implementations, but the New Architecture version provides better performance and compatibility with future React Native versions.

> **Note:** The Legacy Architecture support is deprecated and will be removed in version 3.0.0. We recommend enabling the New Architecture in your app for better performance and future compatibility.

For more detailed information about the New Architecture support, including API compatibility and known limitations, see the [NEW_ARCHITECTURE.md](./NEW_ARCHITECTURE.md) document.

# Examples

Check out the [examples](./examples) directory for sample code demonstrating how to use ViroReact with automatic architecture detection and other features.

You can also see our [Example projects](https://viro-community.readme.io/docs/examples) page. These are a little old (~2019) but are a great reference point for how to use bits of the library.

# Need help? Or want to contribute?

Whether you're looking for support with building your AR or VR application or you want to contribute to ViroReact, the best way to contact our team is via Discord. If you need more hands-on support with a project, you can visit our documentation site, where we have a [list of trusted partners whom you can hire to help with your project](https://viro-community.readme.io/docs/hire-a-viro-react-expert).

<a href="https://discord.gg/H3ksm5NhzT">
   <img src="https://discordapp.com/api/guilds/774471080713781259/widget.png?style=banner2" alt="Discord Banner 2"/>
</a>

# A little history...

ViroReact was originally developed by the [Viro Media](http://www.viromedia.com/), but was open-sourced in 2019. In late 2020, the Viro Community was formed to help maintain and move the project onwards, updating it so it could run with modern versions of React Native, and start to add in new features.

Following years of support, in 2025, [Morrow acquired ReactVision](https://www.themorrow.digital/blog/morrow-acquires-reactvision-and-viroreact-library) to help accelerate its development and give it the resources needed to enable ReactVision to capture the rapidly growing demand for ViroReact. ReactVision now has a team working full-time to help ensure the codebase is updated and ready for the future of XR / Spatial Computing. Our vision is to enable React Native developers to build AR and VR applications that can run across all XR devices (smartphones, smart glasses, and headsets) off of a single React Native codebase.

We, as a community, owe a great debt to Viro Media and the people who developed this library originally. We hope to make them proud as it continues to develop and grow within ReactVision.

# Supporters

<p align="center">
  <a href="https://themorrow.digital/">
    <img src="readmes/morrow-supporter.png" alt="Morrow">
  </a>
</p>
