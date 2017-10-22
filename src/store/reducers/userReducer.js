import * as types from '../../utils/constants';

export const userReducer = (state = {}, action) => {
    const { type } = action;

    switch (type) {
        case types.FETCH_USER_SUCCES:
            return Object.assign({},action.user);
        default :
            return state;
    }
}

export default userReducer;
