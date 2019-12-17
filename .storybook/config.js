import { configure } from '@storybook/react';

const contexts = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  contexts.keys().forEach(filename => contexts(filename));
}
configure(loadStories, module);
