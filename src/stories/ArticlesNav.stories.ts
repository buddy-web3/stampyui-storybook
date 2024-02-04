import type { Meta, StoryObj } from "@storybook/react";
import { ArticlesNav } from "../components/ArticlesNav/Menu.tsx";

const meta = {
  title: "Components/ArticlesNav",
  component: ArticlesNav,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticlesNav>;
export default meta;
type Story = StoryObj<typeof ArticlesNav>;
export const Default: Story = {
  args: {},
};
