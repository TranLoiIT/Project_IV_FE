export const state = () => ({
     token: {
          role: null,
          token: null,
     },
     user: {},
});
  
export const mutations = {
     ADD_TOKEN(state, data) {
         state.token = data;
     },
     ADD_USER(state, data) {
          state.user = data;
     }
};