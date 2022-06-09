export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user.profile;

export const selectSentRequests = (state) => state.user.profile.sender;
export const selectReceivedRequests = (state) => state.user.reqReceived;
export const selectConversations = (state) => state.user.conversations;
export const selectHost = (state) => state.user.isHost;
