const path = require('path');

module.exports = {
    module: {
        rules: [{
                test: /\.css?$/,
                use: ['style-loader', 'raw-loader'],
                include: path.resolve(__dirname, '../')
            },
            {
                test: /\.stories\.jsx?$/,
                loaders: [{
                    loader: require.resolve('@storybook/addon-storysource/loader'),
                    options: {
                        prettierConfig: {
                            printWidth: 120,
                            tabWidth: 2,
                            bracketSpacing: true,
                            trailingComma: 'es5',
                            singleQuote: true
                        }
                    }
                }],
                enforce: 'pre',
            }
        ]
    }
};