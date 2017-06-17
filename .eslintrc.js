module.exports = {
  'extends': 'airbnb',
  'plugins': [
    'react',
    'jsx-a11y',
    'import'
  ],
  'rules': {
    // Allows writing components as classes
    'react/prefer-stateless-function': 'off',

    // Allows importing of unresolved modules (primary purpose here is to not lint cases
    // where webpack is helping resolve packages from the root directory, for example)
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
  }
};
