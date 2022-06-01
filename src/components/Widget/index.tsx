import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';

import './styles.scss';

export const Widget = () => {
  return (
    <Popover className="container">
      <Popover.Panel>Hello world</Popover.Panel>   
      <Popover.Button className="button">
        <ChatTeardropDots />
        <span>
          <span></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};
