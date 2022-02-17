import React from 'react';
import { Channel} from 'stream-chat-react';

import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from './';

const ChannelContainer = ({ isCreating, setIsCreating, isEditing, setIsEditing, createType }) => {
    if (isCreating) {
        return (
            <div className='channel__container'>
                <CreateChannel createType={createType} setIsCreating={setIsCreating} />
            </div>
        )
    }

    if (isEditing) {
        return (
            <div className='channel__container'>
                <EditChannel setIsEditing = {setIsEditing} />
            </div>
        )
    }

    const EmptyState = () => {
        return (
            <div className='Channel-empty__container'>
                <p className='channel-empty__first'>this is the begining of your chat history</p>
                <p className='channel-empty__second'>send Messages, attachments, links, emojis, and more!</p>
            </div>
        )
    }

    return (
        <div className='channel__container'>
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, i) => <TeamMessage key={i} {...messageProps} />}
            >
                <ChannelInner setIsEditing={setIsEditing} />
            </Channel>
        </div>
    );
}

export default ChannelContainer;