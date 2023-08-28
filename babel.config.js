module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
      "plugins": [
        ["module-resolver", {
          "root": ["./src"],
          "alias": {
            "@pages": "./src/pages",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@storage": "./src/storage",
            "@utils": "./src/ultils",
            "@theme": "./src/theme",
          }
        }]
      ]
  };
};
