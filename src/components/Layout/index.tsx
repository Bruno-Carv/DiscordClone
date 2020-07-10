import React from 'react';

import { Grid } from './styles';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import Channelinfo from '../Channelinfo';
import Channellist from '../Channellist';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <Channelinfo />
            <Channellist />
            <UserInfo />
            <ChannelData />
            <UserList />
        </Grid>
    );
};

export default Layout;