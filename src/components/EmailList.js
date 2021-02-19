import React, { useState, useEffect } from 'react'
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
import { db } from '../firebase'
function EmailList() {
    const [emails, setEmails] = useState([])

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => setEmails(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))))
    }, [])
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

                {emails.map(({ id, data: { to, message, subject, timestamp } }) => (
                    <EmailRow
                        key={id}
                        id={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={timestamp ? new Date(timestamp.seconds * 1000).toUTCString() : 'Loading..'}
                    />

                ))}





            </div>
        </div>
    )
}

export default EmailList
