module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === "production" ? "/searchFoxaa_app/" : "/",
  pages: {
    index: {
      entry: "src/main.js", // 必須パラメータ
      title: "キツネ探し当てゲーム",
    },
  },
};
