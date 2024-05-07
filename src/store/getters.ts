const getters = {
    token: (state: { user: { token: any } }) => state.user.token
}

export default getters