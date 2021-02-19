import React from 'react'
import '../css/sendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (fornData) => {

    }
    const dispatch = useDispatch()
    return (
        <div className='sendMail'>
            <div className='sendMail__header'>
                <h3>New message</h3>
                <CloseIcon className='sendMail__close' onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name='to'
                    type='email'
                    placeholder='To'
                    ref={register({ required: true })} />
                {errors.to && <p className='sendMail__error'>To is Required</p>}

                <input
                    name='subject'
                    type='text'
                    placeholder='Subject'
                    ref={register({ required: true })} />
                {errors.subject && <p className='sendMail__error'>Subject is Required</p>}

                <input
                    name='message'
                    type='text'
                    placeholder='Message'
                    className='sendMailMessage'
                    ref={register({ required: true })} />
                {errors.message && <p className='sendMail__error'>Message is Required</p>}

                <div className='sendMail__options'>
                    <Button type='submit' className='sendMail__send' variant='contained'>
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
