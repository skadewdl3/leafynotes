import React from 'react';
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';

import App from './js/App';
import './main.styl';

const root = document.querySelector('#root');
render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  root
);
