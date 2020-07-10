import React, { useState } from 'react';

import { Container, Role, User, Avatar } from './styles';

import UserJson from '../../users.json';

interface UserProps {
    nickname: string;
    isBot?: boolean;
    photo?: string;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, photo }) => (
    <User>
        <Avatar photo={photo} className={isBot ? 'bot' : ''} />
        <strong>{nickname}</strong>
        {isBot && <span>Bot</span>}
    </User>
);

const UserList: React.FC = () => {

    const [users] = useState(UserJson);

    return (
        <Container>
            <Role>Disponível - {users.length}</Role>
            {
                users.map(({online, photo, nickname, isBot}, key) => {
                    return (online) ? <UserRow key={key} nickname={nickname} isBot={isBot} photo={photo} /> : null
                })            
            }

            <Role>Offline - {users.length}</Role>
            {
                users.map(({online, photo, nickname, isBot}, key) => {
                   return (!online) ? <UserRow key={key} nickname={nickname} isBot={isBot} photo={photo} /> : null
                })
            }
        </Container>
    );
};

export default UserList;