const UPDATEMESSAGETEXT = 'updateMessageText';
const SENDMESSAGE = 'sendMessage';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATEMESSAGETEXT:
            state.newMessageText = action.body;
            return state;

        case SENDMESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.msgData.push({
                id: 6,
                message: body
            });
            return state;

        default:
            return state;
    }
}

export const updateMessageBodyCreator = (body) => {
    return {
        type: 'updateMessageText',
        body: body
    }
}
export const sendMessageCreator = () => {
    return {
        type: 'sendMessage'
    }
}
export default dialogsReducer;