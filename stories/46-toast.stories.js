import React from 'react';
import toast from '../Components/toast';
import App from '../App';

export default {
    title: 'Toast'
};

export const toasts = () => { return App(toast) }