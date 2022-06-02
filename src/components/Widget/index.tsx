import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';

import { Container } from './styles';

export const Widget = () => {
  return (
    <Container>
      <Popover className="popover">
        <Popover.Panel>Hello world</Popover.Panel>   
        <Popover.Button className="button">
          <ChatTeardropDots />
          <span>
            <span></span>
            Feedback
          </span>
        </Popover.Button>
      </Popover>
    </Container>
  );
};
