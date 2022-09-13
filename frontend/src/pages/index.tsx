/* eslint-disable canonical/filename-match-exported */
import React from 'react';
import { type NextPage } from 'next';
import { Modal } from '../components/Modal';
import { useModal } from '../hooks/useModal';
import { ConfirmationModal } from '../components/confirmation-modal'
import { Text } from '@/components/Text';
import { createGlobalStyle } from 'styled-components';

import { StyledButton, ButtonContainer } from '@/styles/index.style';

const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
}

html {
  font-size: 18px;
  line-height: 1.4;
}

body {
  font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  background-image: linear-gradient(to right, #7f53ac 0, #657ced 100%);
  color: black;
}

a {
  color: inherit;
  text-decoration: none;
}
`
const Index: NextPage = () => {
  const {isShown, toggle} = useModal()
  const onConfirm = () => toggle();
  const onCancel = () => toggle();

  return (
    <>
      <GlobalStyle/>
      <ButtonContainer>
      <StyledButton onClick={toggle}>Open Modal</StyledButton>
      </ButtonContainer>
      <Modal isShown={isShown} hide={toggle} 
      modalContent={<ConfirmationModal
                      onConfirm={onConfirm}
                      onCancel={onCancel}
                      message="A CSS-only modal based on the :target pseudo-class. Hope you find it helpful."
                      />
      }
      headerText="This is the modal header"/>
      <Text/>
    </>
  )
};

export default Index;
