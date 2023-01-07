export const state = () => ({
     token: {
          role: null,
          token: null,
     },
});
  
export const mutations = {
     ADD_TOKEN(state, data) {
         state.token = data;
     },
};