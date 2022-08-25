import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppButton } from './AppButton';

export default {
  title: 'Controls/Button',
  component: AppButton,
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const CustomButton = Template.bind({});
CustomButton.args = {
  children: 'Button',
};
