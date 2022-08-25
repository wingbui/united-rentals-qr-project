import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageHeading } from "./PageHeading";

export default {
  title: "Headings/Heading",
  component: PageHeading,
} as ComponentMeta<typeof PageHeading>;

const Template: ComponentStory<typeof PageHeading> = (args) => (
  <PageHeading {...args} />
);

export const CustomPageHeading = Template.bind({});
CustomPageHeading.args = {
  children: "Page Heading",
};
