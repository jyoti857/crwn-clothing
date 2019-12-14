import { UPDATE_COLLECTION } from "./constants";


export const updateCollections = updateCollection =>({
    type: UPDATE_COLLECTION,
    payload: updateCollection
})