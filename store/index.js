export const state = () => ({
  welcomeMessage: "",
});

export const mutations = {
  setWelcomeMessage(state, message) {
    state.welcomeMessage = message;
  },
};
