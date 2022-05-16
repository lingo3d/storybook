import React from 'react';

import { MyComponent } from './MyComponent';

export default {
  title: 'Example/MyComponent',
  component: MyComponent
};

const Template = (args) => <MyComponent name={args.name} booleanTest={args.booleanTest} />;

export const name = Template.bind({});
name.args = {
  name: "Peter"
};

export const booleanTest = Template.bind({});
booleanTest.args = {
  booleanTest: false
};