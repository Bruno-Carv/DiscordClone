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

export interface Props {
    photo?: string;
}

const UserInfo: React.FC<Props> = ({
    photo
}) => {
    return (
        <Container>
            <Profile>
                <Avatar photo='https://avatars2.githubusercontent.com/u/1965106?s=280&v=4' />
                <UserData>
                    <strong>User</strong>
                    <span>#{Math.floor(Math.random() * 40)}{Math.floor(Math.random() * 400)}</span>
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