import { render } from '@testing-library/react';

import {Button} from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button variant="primary" size="medium">Button</Button>);
    expect(baseElement).toBeTruthy();
  });
});
