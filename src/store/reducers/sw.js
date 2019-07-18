// Axios lib a http kérésekhez van
import Axios from "axios";

const initialState = {
  sw_peoples: []
};
/**
 * A reducerben már csak Szinkron kód fog lefutni ami a kapott adatokkal frissíti a state-et
 *
 */
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_ALL_PEOPLE":
      return {
        ...state,
        sw_peoples: actions.peoples
      };
    default:
      return state;
  }
};
export default reducer;

/**
 * Ez egy Action-creator, hiszen a visszatérési értéke pont egy action
 * Sima függvény semmi varázslat
 * @param swData a thunk actionben lefutott async hívás eredménye
 *
 */
export const saveResult = swData => {
  return {
    type: "GET_ALL_PEOPLE",
    peoples: swData
  };
};
/**
 * Itt történik majd az Async hívásunk (Aminek a helyes végbemeneteléről a thunk middleware gondoskodik)
 * FONTOS!! mindenképp egy function-t kell visszaadni, aminek az első paraméterének a dispatchnak kell lennie
 * // Második paramétere lehet a getState ahol el tudjuk kérni az előző állapotot, de ha egy mód van rá kerüljük.
 */
export const storeResult = () => {
  return dispatch => {
    return Axios.get("https://swapi.co/api/people/").then(response => {
      console.log(response.data.results);
      // Meghívjuk az action-creatorunkat a kapott adatokkal
      dispatch(saveResult(response.data.results));
    });
  };
};
