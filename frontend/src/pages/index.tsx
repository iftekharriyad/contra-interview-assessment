/* eslint-disable canonical/filename-match-exported */
import React from 'react';
import { type NextPage } from 'next';
import { Modal } from '../components/Modal';
import { useModal } from '../hooks/useModal';
import { ConfirmationModal } from '../components/confirmation-modal'
import { Text } from '@/components/Text';

const Index: NextPage = () => {
  const {isShown, toggle} = useModal()
  const onConfirm = () => toggle();
  const onCancel = () => toggle();

  return (
    <>
      <button onClick={toggle}>Open Modal</button>
      <Modal isShown={isShown} hide={toggle} 
      modalContent={<ConfirmationModal
                      onConfirm={onConfirm}
                      onCancel={onCancel}
                      message="Are you sure you want to delete element?"
                      />
      }
      headerText="Important!"/>
      <Text/>
    </>
  )
};

export default Index;
