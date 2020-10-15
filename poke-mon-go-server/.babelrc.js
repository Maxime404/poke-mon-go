module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      "@babel/env", {
        "targets": {
          "node": "current"
        }
      }
    ],
    '@babel/typescript'
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
