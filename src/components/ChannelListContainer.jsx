import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import{ ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import ITChaticon from '../assets/it.png'

const SideBar = () => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon__inner'>
                <img src= {ITChaticon} alt="IT" width ="30" />
            </div>
        </div>
    </div>
)

const ChannelListContainer = () => {
  return (
    <div>
        ChannelListContainer
    </div>
  )
}

export default ChannelListContainer