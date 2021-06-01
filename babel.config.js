module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@data': './src/data',
          '@hooks': './src/hooks',
          '@lib': './src/lib',
          '@router': './src/router',
          '@screens': './src/screens',
          '@services': './src/services',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
