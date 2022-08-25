import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InfoMessage } from "./InfoMessage";

export default {
  title: "Info/InfoMessage",
  component: InfoMessage,
} as ComponentMeta<typeof InfoMessage>;

const Template: ComponentStory<typeof InfoMessage> = (args) => (
  <InfoMessage {...args} />
);

export const CustomInfoMessage = Template.bind({});
CustomInfoMessage.args = {
  children: "InfoMessage",
};
