import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export const entry = 'entries/main.es6';
export const dest = 'bundles/main-rollup.js';
export const format = 'iife';
export const moduleName = 'classyClass';
export const plugins = [ buble(), uglify() ];
