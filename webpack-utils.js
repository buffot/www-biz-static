const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  prepareProjectPages: projects => projects.map(project => new HtmlWebpackPlugin({
    template: `./src/templates/projects/${project}.hbs`,
    inject: true,
    chunks: ['index'],
    filename: `${project}.html`,
  })),
};
