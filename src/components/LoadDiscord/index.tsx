import React, { useEffect, useState } from 'react';
import { Container, Modal, ModalContent, ModalBody, Title, Discribe } from './styles';
import Load from '../../assets/load.gif';

const ModalDiscord: React.FC = () => {

    const [discribe, setDiscribe] = useState('CONECTION');

    useEffect(() => {
        setTimeout(() => {
            setDiscribe('STARTING');
        },5000);
    },[]);

    return (
        <Container>
            <Modal>
                <ModalContent>
                    <ModalBody>
                        <img src={Load} alt='load discord clone' />
                        <Title>HOLD TIGHT - LOADING DISCORD</Title>
                        <Discribe>{discribe}</Discribe>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Container>
    );
};

export default ModalDiscord;