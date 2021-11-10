import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import Button, {PerfectProps} from '../components/BeautifulButton';

export default {
    title: 'BeautifulButton',
    component: Button
} as Meta;

const Template: Story<PerfectProps> = (args) => (
    <Button {...args} />
);

export const NormalButton = Template.bind({});
NormalButton.args = {
    lovelyLabel: 'Press me',
};

export const Cyan = Template.bind({});
Cyan.args = {
    lovelyLabel: 'Press me',
    bewitchingBackgroundColor: 'cyan'
};

export const Pink = Template.bind({});
Pink.args = {
    lovelyLabel: 'Press me',
    bewitchingBackgroundColor: 'pink'
};

export const Violet = Template.bind({});
Violet.args = {
    lovelyLabel: 'Press me',
    bewitchingBackgroundColor: 'violet'
};

export const ExtremelyLarge = Template.bind({});
ExtremelyLarge.args = {
    lovelyLabel: 'Press me',
    splendidSize: 'XXL'
};

export const VeryLarge = Template.bind({});
VeryLarge.args = {
    lovelyLabel: 'Press me',
    splendidSize: 'XL'
};

export const Large = Template.bind({});
Large.args = {
    lovelyLabel: 'Press me',
    splendidSize: 'L'
};

export const Medium = Template.bind({});
Medium.args = {
    lovelyLabel: 'Press me',
    splendidSize: 'M'
};

export const Small = Template.bind({});
Small.args = {
    lovelyLabel: 'Press me',
    splendidSize: 'S'
};

export const VerySmall = Template.bind({});
VerySmall.args = {
    lovelyLabel: 'Press me',
    splendidSize: 'XS'
};

export const Round = Template.bind({});
Round.args = {
    lovelyLabel: 'Press me',
    stunningShape: 'round'
};

export const LongLabel = Template.bind({});
LongLabel.args = {
    lovelyLabel: 'Press me please because I\'m a very beautiful button'
};