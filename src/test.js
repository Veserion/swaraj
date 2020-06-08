var firebase = require("firebase/app");
require("firebase/storage");
require("firebase/database");
// Initialize Firebase
const config = {
  apiKey: "AIzaSyAI6bT_dResjGRVcEVxyZ_pfnEDkkP4-xA",
  authDomain: "swaraj-a82d4.firebaseapp.com",
  databaseURL: "https://swaraj-a82d4.firebaseio.com/",
  projectId: "swaraj-a82d4",
  storageBucket: "swaraj-a82d4.appspot.com",
  messagingSenderId: "swaraj-a82d4",
};
firebase.initializeApp(config);

const database = firebase.database();

const DROPS_COUNT = 2,
  WEARS_COUNT = 3;

const data = Array.from({ length: DROPS_COUNT }, (_, dropId) => ({
  [`drop-${dropId}`]: Array.from({ length: WEARS_COUNT }, (_, wearId) => ({
    id: `wear-${dropId}-${wearId}`,
    article: "string",
    quantityIssued: 1,
    materials: "",
    designer: "",
    price: 1,
    description: "",
    picture: "",
  })).reduce((acc, val) => ({ ...acc, [val.id]:val }), {})
}));
database.ref("/").set(data.reduce((acc, val) => ({ ...acc, ...val }), {}));
