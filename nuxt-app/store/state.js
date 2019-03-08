const createState = () => ({
  currentPage: 'index',
  mqttClient: null,
  isLoggedIn: false,
  lastStoryPage: null,
  // roomEffects: {},
  selectedPlayerMode: null,
  selectedPlayerOne: null,
  selectedPlayerTwo: null,
  selectedNetwork: null,
});

export default createState;