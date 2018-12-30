import ExtractTextPlugin from 'extract-text-webpack-plugin';

// Enviroment
const isDevelopment = process.env.NODE_ENV !== 'production';

export default type => {
  const rules = [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }
  ];

  if (!isDevelopment || type === 'server') {
    rules.push(
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?minimize=true&modules=true&localIdentName=[name]__[local]',
            'sass-loader'
          ]
        })
      }
    );
  } else {
    rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?minimize=true&modules=true&localIdentName=[name]__[local]',
        'sass-loader'
      ]
    });
  }

  return rules;
};
