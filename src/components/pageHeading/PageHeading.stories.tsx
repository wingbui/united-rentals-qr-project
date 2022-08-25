import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageHeading } from './PageHeading';

export default {
  title: 'Heading/PageHeading',
  component: PageHeading,
} as ComponentMeta<typeof PageHeading>;

const Template: ComponentStory<typeof PageHeading> = (args) => <PageHeading {...args} />;

export const CustomHeading= Template.bind({});
CustomHeading.args = {
  children: 'PageHeading',
};
