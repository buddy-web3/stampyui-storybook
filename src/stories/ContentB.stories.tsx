import type { Meta, StoryObj } from '@storybook/react';
import {ContentB} from "../components/ContentBox/Box2";
import {MaskGroup} from "../components/ContentBox/MaskGroup";

const meta = {
    title: 'Components/ContentB',
    component: ContentB,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof ContentB>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
    },
};