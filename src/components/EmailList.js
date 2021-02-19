import React from 'react'
import '../css/emailList.css'
import { IconButton, Checkbox } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
function EmailList() {
    return (
        <div className='emailList'>
            <div className='emailList__settings'>
                <div className='emailList__setting__left'>
                    <Checkbox />
                    <IconButton>
                        <ArrowDownwardIcon />
                    </IconButton>

                    <IconButton>
                        <RedoIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className='emailList__setting__rigt'>

                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>

                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className='emailList__sections'>
                <Section Icon={InboxIcon} title='Primary' color='red' selected />
                <Section Icon={PeopleIcon} title='Social' color='#1A73EB' />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>

            <div className='emailList__list'>
                <EmailRow
                    title='Twitch'
                    subject='Hey Fellow Streamer'
                    description='This is a test'
                    time='10pm'
                />

                <EmailRow
                    title='Twitch'
                    subject='Hey Fellow Streamer'
                    description='This is a test This is a test This is a test'
                    time='10pm'
                />
            </div>
        </div>
    )
}

export default EmailList
