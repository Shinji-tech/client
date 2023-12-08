import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer } from './components';
import './App.css';
const apiKey = 'zhrtx47x8xzd'; 

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app__warpper'>
        <Chat client={client} theme='team light'>
          <ChannelListContainer 
          
          />

          <ChannelContainer 
          />
        </Chat>
    </div>
  );
}

export default App;