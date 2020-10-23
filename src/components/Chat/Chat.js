import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Chat.css';

const Chat = () => {
    const [seed , setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    } , [])

    return (
        <div className = 'chat'>
            <div className="chat-header">
                <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>

                <div className="chat-headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen ...</p>
                </div>
                
                <div className="chat-headerRight">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat-body"></div>
            <div className="chat-footer"></div>
        </div>
    );
};

export default Chat;