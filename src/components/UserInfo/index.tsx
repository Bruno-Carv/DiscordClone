import React from 'react';

import { 
    Container, 
    Profile, 
    Avatar, 
    UserData, 
    Icons, 
    MicIcon, 
    HeadphoneIcon, 
    SettingIcon 
} from './styles';

export interface Props{
    photo?: string;
}

const UserInfo: React.FC<Props> = ({
    photo
}) => {
    return (
        <Container>
            <Profile>
                <Avatar photo='https://avatars3.githubusercontent.com/u/47616928?s=460&u=f9db1b9ae6a819cee19edb8b4231fb64bab2d102&v=4'/>
                <UserData>
                    <strong>Bruno Carvalho</strong>
                    <span>#2689</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingIcon />
            </Icons>
        </Container>
    );
};

export default UserInfo;