import { configure } from '@kadira/storybook';

const req = require.context('../src', true, /.storybook.js$/);

const loadStories = () => req.keys().forEach(req);

configure(loadStories, module);
