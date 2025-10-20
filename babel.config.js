module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './', // هذا يجعل "@/assets" يشير إلى جذر المشروع
          },
        },
      ],
    ],
  };
};
