import { jsdom } from 'jsdom';
import fetch from 'node-fetch';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.fetch = fetch;

Object.keys(window).forEach(key => {
  if (!(key in global)) global[key] = window[key];
});
