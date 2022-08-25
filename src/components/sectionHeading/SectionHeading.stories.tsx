import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SectionHeading } from "./SectionHeading";

export default {
  title: "Headings/Heading",
  component: SectionHeading,
} as ComponentMeta<typeof SectionHeading>;

const Template: ComponentStory<typeof SectionHeading> = (args) => (
  <SectionHeading {...args} />
);

export const CustomSectionHeading = Template.bind({});
CustomSectionHeading.args = {
  children: "Section Heading",
};
