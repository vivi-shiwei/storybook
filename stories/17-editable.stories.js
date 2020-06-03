import React from 'react';
import edittable from '../Components/edittable';
import App from '../App';

export default {
    title: 'Edittable'
};

export const edittables = () => { return App(edittable) }