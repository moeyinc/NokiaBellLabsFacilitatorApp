const mutations = {
  updateCurrentPage(state, page) {
    state.currentPage = page;
  },
  login(state) {
    state.isLoggedIn = true;
  },
  logout(state) {
    state.isLoggedIn = false;
  },
  updateStories(state, stories) {
    state.stories = stories;
  },
  updateSleeves(state, sleeves) {
    state.sleeves = sleeves;
  },
  updateSelectedSleeveId(state, selectedSleeveId) {
    state.selectedSleeveId = selectedSleeveId;
  },
  updateLastStoryPage(state, page) {
    state.lastStoryPage = page;
  },
  updateMqttMessageLogs(state, log) {
    state.mqttMessageLogs.push(log);
  },
  resetStoryTempStates(state) {
    state.inStoryAREnabled = false;
    state.inStorySelectedNetwork = '5G';
  },
  updateInStoryAREnabled(state, value) {
    state.inStoryAREnabled = value;
  },
  updateInStorySelectedNetwork(state, networkName) {
    state.inStorySelectedNetwork = networkName;
  },
};

export default mutations;
