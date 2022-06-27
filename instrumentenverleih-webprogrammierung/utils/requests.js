const API_BASE = `http://localhost:3000/api/`;

export default {
  fetchBellowInstruments: {
    title: "Balginstrumente",
    url: `${API_BASE}instrument/playingtechnique/balginstrument`,
  },
  fetchBrassInstruments: {
    title: "Blasinstrumente",
    url: `${API_BASE}instrument/playingtechnique/blasinstrument`,
  },
  fetchPercussionInstruments: {
    title: "Schlaginstrumente",
    url: `${API_BASE}instrument/playingtechnique/schlaginstrument`,
  },
  fetchStringInstruments: {
    title: "Streichinstrumente",
    url: `${API_BASE}instrument/playingtechnique/streichinstrument`,
  },
  fetchKeyboardInstruments: {
    title: "Tasteninstrumente",
    url: `${API_BASE}instrument/playingtechnique/tasteninstrument`,
  },
  fetchPluckedInstruments: {
    title: "ZupfInstrumente",
    url: `${API_BASE}instrument/playingtechnique/zupfinstrument`,
  },
};
