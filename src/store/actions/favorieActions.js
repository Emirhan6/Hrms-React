export const ADD_TO_FAVORIE = "ADD_TO_FAVORIE"
export const REMOVE_FROM_FAVORIE = "REMOVE_FROM_FAVORIE"

export function addToFavorie(jobAdvertisement){
    return {
        type : ADD_TO_FAVORIE,
        payload : jobAdvertisement
    }
}

export function removeFromFavorie(jobAdvertisement){
    return {
        type : REMOVE_FROM_FAVORIE,
        payload : jobAdvertisement
    }
}