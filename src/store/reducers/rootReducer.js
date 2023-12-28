const initState = {
    users: [
        { id: 1, name: 'Thac' },
        { id: 2, name: 'Phan Dinh' }
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users //copy state hiện tại và ghi đè users mới nhất vào state.users (users)
            };

        case "ADD_NEW":
            let id = Math.floor(Math.random() * 1001)
            let user = { id: id, name: `random - ${id}` };
            return {
                ...state, users: [...state.users, user]
            };

        default:
            return state
    }
}

export default rootReducer;