import type {Meta,StoryObj} from "@storybook/react";
import {NavBar} from "../components/Nav/Nav";

const meta = {
    title: 'Components/Nav',
    component: NavBar,
} satisfies Meta<typeof NavBar>
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};