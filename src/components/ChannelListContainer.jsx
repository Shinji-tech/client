import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import{ ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import ITChaticon from '../assets/it.png'
import LogoutIcon from '../assets/logout.png'

const SideBar = () => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon__inner'>
                <img src= {ITChaticon} alt="IT" width ="30" />
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon__inner'>
                <img src={LogoutIcon} alt='Logout' width={30}></img>
            </div>
        </div>
    </div>
);

const ChannelListContainer = () => {
  return (
    <div>
        <SideBar />
    </div>
  )
}

export default ChannelListContainer