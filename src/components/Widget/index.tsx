import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';

import { WidgetForm } from "../WidgetForm";

import { Container } from './styles';

export const Widget = () => {
  return (
    <Container>
      <Popover className="popover">
        <Popover.Panel className="panel">
          <WidgetForm />
        </Popover.Panel>   
        
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
