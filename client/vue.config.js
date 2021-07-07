module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  filenameHashing: false,
  chainWebpack: (config) => {
    config.optimization.splitChunks(false);
  },
  publicPath: "/",
  devServer: {
    proxy: {
      "/*": {
        target: "http://localhost:5000/",
        changeOrigin: true,
      },
    },
    disableHostCheck: true,
    port: 9000,
  },
};
