export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user.profile;

export const selectSentRequests = (state) => state.user.profile.sender;
export const selectReceivedRequests = (state) => state.user.reqReceived;
