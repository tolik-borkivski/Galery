const token = "896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043";
const location = "https://api.unsplash.com";
const headers = {
    "Accept-Version": "v1",
    "Authorization": "Client-ID cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"
}

export const galeryApi = {
    getPhotos(page=1) {                
        return fetch(`https://api.unsplash.com/photos?page=${page}`, {
            headers: headers
        }).then(res => res.json());
    }
}