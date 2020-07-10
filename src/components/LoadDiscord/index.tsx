import React from 'react';
import { Container, Modal, ModalContent, ModalBody, Title, Discribe } from './styles';
import Load from '../../assets/load.gif';

const ModalDiscord: React.FC = () => {
    return (
        <Container>
            <Modal>
                <ModalContent>
                    <ModalBody>
                        <img src={Load} alt='' />
                        <Title>HOLD TIGHT - LOADING DISCORD</Title>
                        <Discribe>STARTING</Discribe>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Container>
    );
};

export default ModalDiscord;