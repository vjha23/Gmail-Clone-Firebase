import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        sendMessageOpen: false,
    },
    reducers: {
        openSendMessage: state => {
            state.sendMessageOpen = true
        },
        closeSendMessage: state => {
            state.sendMessageOpen = false
        }
    }
})

export const { openSendMessage, closeSendMessage } = mailSlice.actions

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageOpen

export default mailSlice.reducer

