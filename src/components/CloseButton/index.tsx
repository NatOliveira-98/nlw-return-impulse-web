import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

import { Container } from './styles';
 
export const CloseButton = () => {
  return (
    <Container>
      <Popover.Button className="button" title="Fechar o formulário de feedback">
        <X weight="bold" className="x-icon"/>
      </Popover.Button>
    </Container>
  );
};
