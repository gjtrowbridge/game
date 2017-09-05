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

    // No annoying import errors if missing extensions
    'import/extensions': 'off',

    // Turns off check for arrow function braces
    'arrow-body-style': 'off',

    // Don't fail if named exports are used in lieu of default exports
    'import/prefer-default-export': 'off',

    // Allows importing of unresolved modules (primary purpose here is to not lint cases
    // where webpack is helping resolve packages from the root directory, for example)
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',

    // Turn off a bunch of other lint rules that annoy me
    'no-undef': 'off',
    'no-plusplus': 'off',
    'react/forbid-prop-types': 'off',
    'no-mixed-operators': 'off',
    'spaced-comment': 'warn',
    'react/no-string-refs': 'off',
  }
};
