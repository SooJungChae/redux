import webpack from 'webpack';

webpack.exports = {
    mode: 'development',
    entry: 'index.js',
    output: 'bundle.js',
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    }
}