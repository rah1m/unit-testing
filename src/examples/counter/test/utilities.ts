import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

const render = (ui: React.ReactElement, options?: RenderOptions) => {
  const result = rtlRender(ui, options);
  const user = userEvent.setup();
  return { ...result, user };
};

export { render };
