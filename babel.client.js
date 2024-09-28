module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    // Conditionally add react-refresh/babel plugin only for development mode
    // process.env.NODE_ENV === 'development' && 'react-refresh/babel',
  ].filter(Boolean), // This filters out false values (like in production)
};
