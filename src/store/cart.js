export const state = () => ({
    cart: [],
});
 
export const mutations = {
    ADD_TO_CART(state, data) {
        state.cart = data;
    },
};