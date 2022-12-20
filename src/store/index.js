export const actions = {
    // Comment nuxtClientInit if using SSR or comment nuxtServerInit if using CSR
    async nuxtClientInit({ commit }) {
        try {
            const listCart = this.$cookies.get('CART_USER');
            if (listCart?.length > 0) {
                commit('cart/ADD_TO_CART', listCart);
            } else {
                commit('cart/ADD_TO_CART', []);
            }
        } catch (error) {
            commit('cart/ADD_TO_CART', [])
        }
    },
};