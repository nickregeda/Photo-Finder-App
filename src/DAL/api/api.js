import {createApi} from "unsplash-js";

const unsplash = createApi({
    accessKey: 'WVqpLErzWg0eYTnWvmBG2_IdpT7UclajGFlY4sLscZc',
})

export const searchPhotosApi = {
    getPhotos(query, page, perPage) {
        return unsplash.search.getPhotos({query, page, perPage}).then(
            response => {
                if (response.type === 'success') {
                    return response.response;
                }
            }
        )
    },
}




