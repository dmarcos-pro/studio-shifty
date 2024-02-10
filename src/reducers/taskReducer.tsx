import { MODIFY, CHANGE_PRICE } from "../actionTypes/actionTypes";

const initialState = {
  tasks: [
    {
      "name": "Wireframe / Maquette",
      "id": "wireframe_maquette",
      "category": "Digital",
      "image": "https://zupimages.net/up/23/15/2mpy.png",
      "price": "1000",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "1000" },
        { "number": "3", "value": "1200" },
        { "number": "4", "value": "1300" }
      ]
    },
    {
      "name": "Site vitrine",
      "id": "site_vitrine",
      "category": "Digital",
      "image": "https://zupimages.net/up/23/15/pvzk.png",
      "price": "2000",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "2000" },
        { "number": "3", "value": "2300" },
        { "number": "4", "value": "2400" }
      ]
    },
    {
      "name": "Site e-commerce",
      "id": "site_e_commerce",
      "category": "Digital",
      "image": "https://zupimages.net/up/23/15/flw9.png",
      "price": "3000",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "3000" },
        { "number": "3", "value": "3500" },
        { "number": "4", "value": "3600" }
      ]
    },
    {
      "name": "Charte graphique",
      "id": "charte_graphique",
      "category": "Branding",
      "image": "https://zupimages.net/up/23/15/kkz7.png",
      "price": "300",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "300" },
        { "number": "3", "value": "380" },
        { "number": "4", "value": "400" }
      ]
    },
    {
      "name": "Flyer",
      "id": "flyer",
      "category": "Print",
      "image": "https://zupimages.net/up/23/15/r11c.png",
      "price": "200",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "200" },
        { "number": "3", "value": "300" },
        { "number": "4", "value": "350" }
      ]
    },
    {
      "name": "Carte de visite",
      "id": "carte_de_visite",
      "category": "Print",
      "image": "https://zupimages.net/up/23/15/jop7.png",
      "price": "200",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "200" },
        { "number": "3", "value": "300" },
        { "number": "4", "value": "350" }
      ]
    },
    {
      "name": "Nom de marque",
      "id": "nom_de_marque",
      "category": "Branding",
      "image": "https://zupimages.net/up/23/15/fy77.png",
      "price": "1000",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "1000" },
        { "number": "3", "value": "1200" },
        { "number": "4", "value": "1300" }
      ]
    },
    {
      "name": "Logo",
      "id": "logo",
      "category": "Branding",
      "image": "https://zupimages.net/up/23/15/dtoe.png",
      "price": "400",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "400" },
        { "number": "3", "value": "480" },
        { "number": "4", "value": "500" }
      ]
    },
    {
      "name": "Vidéos",
      "id": "video",
      "category": "Digital",
      "image": "https://zupimages.net/up/23/15/x76e.png",
      "price": "1000",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "1000" },
        { "number": "3", "value": "1300" },
        { "number": "4", "value": "1400" }
      ]
    },
    {
      "name": "Affiche publicitaire",
      "id": "affiche_publicitaire",
      "category": "Print",
      "image": "https://zupimages.net/up/23/15/q9t8.png",
      "price": "1500",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "1500" },
        { "number": "3", "value": "1800" },
        { "number": "4", "value": "1900" }
      ]
    },
    {
      "name": "Kakémono",
      "id": "kakemono",
      "category": "Print",
      "image": "https://zupimages.net/up/23/15/q9t8.png",
      "price": "500",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "500" },
        { "number": "3", "value": "600" },
        { "number": "4", "value": "650" }
      ]
    },
    {
      "name": "Plaquette commerciale",
      "id": "plaquette_commerciale",
      "category": "Print",
      "image": "https://zupimages.net/up/23/15/epqp.png",
      "price": "800",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "800" },
        { "number": "3", "value": "900" },
        { "number": "4", "value": "950" }
      ]
    },
    {
      "name": "Catalogue commercial",
      "id": "catalogue_commercial",
      "category": "Print",
      "image": "https://zupimages.net/up/23/15/qjvh.png",
      "price": "1500",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "1500" },
        { "number": "3", "value": "1800" },
        { "number": "4", "value": "1900" }
      ]
    },
    {
      "name": "Copywriting",
      "id": "copywriting",
      "category": "Digital",
      "image": "https://zupimages.net/up/23/15/qymd.png",
      "price": "200",
      "selected": false,
      "feedback": [
        { "number": "2", "value": "200" },
        { "number": "3", "value": "280" },
        { "number": "4", "value": "300" }
      ]
    },
  ]
};


const taskReducer = (state = initialState, action) => {
  switch (action.type) {

    case MODIFY:
      const indexToModify = state.tasks.findIndex(todo => todo.id === action.payload.id);
      const newValueModifed = [...state.tasks];
      newValueModifed[indexToModify].selected = !action.payload.selected
      return {
        ...state,
        tasks: newValueModifed,
      }

    case CHANGE_PRICE:
      const indexToChangePrice = state.tasks.findIndex(todo => todo.id === action.payload.id);
      const newPrice = [...state.tasks];
      newPrice[indexToChangePrice].price = action.payload.price
      return {
        ...state,
        tasks: newPrice,
      }

    default:
      return state;
  }
};

export { taskReducer };