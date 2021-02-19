import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        sendMessageOpen: false,
        selectedMail: null,
    },
    reducers: {
        openSendMessage: state => {
            state.sendMessageOpen = true
        },
        closeSendMessage: state => {
            state.sendMessageOpen = false
        },
        selectMail: (state, action) => {
            state.selectedMail = action.payload
        }
    }
})

export const { openSendMessage, closeSendMessage, selectMail } = mailSlice.actions

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageOpen
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer

