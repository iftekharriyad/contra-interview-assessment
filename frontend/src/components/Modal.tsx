import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from './modal.style';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide();
    }
  };
  useEffect(() => {
    if(isShown){
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onKeyDown, false);
      return () => {
        document.removeEventListener('keydown', onKeyDown, false);
      }
    }else document.body.style.overflow = 'visible'
  }, [isShown]);

  const modal = (
    <React.Fragment>
      <Backdrop onClick={hide}/>
      <FocusLock>
      <Wrapper aria-modal aria-labelledby={headerText}  tabIndex={-1} role="dialog">
        <StyledModal>
        <CloseButton  data-dismiss="modal" aria-label="Close"  onClick={hide}>Close</CloseButton>
          <Header>
            <HeaderText>{headerText}</HeaderText>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
      </FocusLock>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
