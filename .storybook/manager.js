// .storybook/manager.js
import './titleAddon';
import { addons } from '@storybook/addons';
import yourTheme from './YourTheme';
import { themes } from '@storybook/theming';


addons.setConfig({
  theme: yourTheme,
});
