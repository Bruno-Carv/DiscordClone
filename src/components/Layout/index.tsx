import React from 'react';

import { Grid } from './styles';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import Channelinfo from '../Channelinfo';
import Channellist from '../Channellist';
import UserInfo from '../UserInfo';

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <Channelinfo />
            <Channellist />
            <UserInfo />
        </Grid>
    );
};

export default Layout;