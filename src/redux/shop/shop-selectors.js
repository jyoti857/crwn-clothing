import {createSelector} from 'reselect';


// const collection_id_map = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     women: 4, 
//     mens: 5
// }

const selectShop = state => {
    console.log("******************************", state);
    return state.shop;
}

const selectCollection = createSelector(
    selectShop,
    outputOfSelectShop => outputOfSelectShop.shopData
);

const selectCollectionById = collectionParam => createSelector(
    selectCollection, 
    // collection => collection.find(collec => collec.id === collection_id_map[collectionParam]) 
    collection => collection? collection[collectionParam] : null
)


const selectCollectionforPrerview = createSelector(
    selectCollection,
    collections => collections?Object.keys(collections).map(key => collections[key]): []// in short get the value of each key 
)

export const selectIsCollectionFetching = createSelector(
    selectCollection,
    isFetching => isFetching  ?  isFetching.isFetching : {},
)


export {selectCollection, selectCollectionById, selectCollectionforPrerview};