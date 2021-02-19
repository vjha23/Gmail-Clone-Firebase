import React from 'react'
import '../css/mail.css'
import { IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../features/mailSlice';



function Mail() {
    const history = useHistory();

    const selectedMail = useSelector(selectOpenMail)
    return (
        <div className='mail'>
            <div className='mail__tools'>
                <div className='mail__toolLeft'>
                    <IconButton onClick={() => history.push('/')}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className='mail__toolRight'>

                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>

                    <IconButton>
                        <PrintIcon />
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>

            <div className='mail__body'>
                <div className='mail__bodyHeader'>
                    <h2>{selectedMail ? selectedMail.subject : 'Loading...'}</h2>
                    <LabelImportantIcon className='mail__important' />
                    <p>{selectedMail ? selectedMail.title : 'Loading..'}</p>
                    <p className='mail__time'>{selectedMail ? selectedMail.time : 'Loading...'}</p>
                </div>

                <div className='mail__message'>
                    <p>{selectedMail ? selectedMail.description : 'Loading...'}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
