import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import alert from '../Components/alert';
import App from '../App';

export default {
    title: 'Alert'
};

export const alerts = () => { return App(alert) }