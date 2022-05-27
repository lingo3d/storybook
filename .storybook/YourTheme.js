import { create,} from '@storybook/theming';
import logo from '../stories/public/logo.png'
import logo3 from '../public/logo.png'

export default create({
  base: 'light',
  brandImage: logo,
  brandTarget: '_self',
});

console.log(create())