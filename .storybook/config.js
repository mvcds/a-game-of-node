import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/cell.storybook');
}

configure(loadStories, module);
