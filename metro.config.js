const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
// Suporte a arquivos .cjs
config.resolver.sourceExts.push("cjs");
// Desativa o modo experimental de package exports
config.resolver.unstable_enablePackageExports = false;

module.exports = withNativeWind(config, {
  input: "./src/styles/global.css",
});
