const defaultState = {
    customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMUVE_CUSTOMER = "REMUVE_CUSTOMER";

export const customerReduser = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload],
            };
        case REMUVE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(
                    (customer) => customer.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
