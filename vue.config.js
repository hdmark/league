module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    public: 'lvmgmtllc.com',
  }
}