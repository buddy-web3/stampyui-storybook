import type { Meta, StoryObj } from '@storybook/react';
import {ContentBox} from "../components/ContentBox/Box";
import {MaskGroup} from "../components/ContentBox/MaskGroup";

const meta = {
    title: 'Components/ContentBox',
    component: ContentBox,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof ContentBox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        MaskGroup: (<MaskGroup ></MaskGroup>)
    },
};