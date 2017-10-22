import * as types from '../../utils/constants';

export const eventsReducer = (state = [], action) => {
    const { type } = action;

    switch (type) {
        case types.CREATE_EVENT:
            return [...state,
                    Object.assign({},action.event)];
        default :
            return state;
    }
}

export default eventsReducer;
