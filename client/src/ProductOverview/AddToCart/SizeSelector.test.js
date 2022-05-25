import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import {act} from 'react-dom/test-utils';

import SizeSelector from './SizeSelector.jsx';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it("renders without size selected", () => {
  act(() => {
    render(<SizeSelector />, container);
  });
  expect(container.getElementsByTagName('select').value).toBe(null);
})