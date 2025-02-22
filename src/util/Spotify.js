const USERID = "miajj02";

const Spotify = {
    async fetchToken() {
        try {
            const response = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    "client_id": "6bd9d7134bda4d3b84de89cc39b2478a",
                    "client_secret": "795d371a19c34e98aeb7cbbeb10a8948",
                    "grant_type": "client_credentials",
                })
            });
            const responseJson = await response.json();
            return responseJson["access_token"];
        } catch (error) {
            console.log(error);
        }
    },

    async getSongs(songName) {
        try {
            const token = await Spotify.fetchToken();
            const url = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(songName)}'`;
            const body = {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            };
            const response = await fetch(url, body);
            const json = await response.json();
            const tracks = json.tracks.items.map(track=>({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                duration: (track.duration_ms/1000/60).toFixed(2),
                uri: track.uri,
            }))
            return tracks;
        }
        catch (error) {
            console.log(error);
        }
    },

    // TODO: use OAuth to request user authorization to call this API. 
    // https://developer.spotify.com/documentation/web-api/tutorials/code-flow
    async createPlaylist(listName){
        try{
            const token = await Spotify.fetchToken();
            const url = `https://api.spotify.com/v1/users/${USERID}/playlists`;
            const body = {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: new URLSearchParams({
                    "name": listName,
                    "public": false
                })
            }
            const response = await fetch(url, body);
            const json = await response.json();

            if(json.error) throw new Error(json.error.message);

        }catch(error){
            console.log(`${error.name}:${error.message}`);
        }
    },
}

export default Spotify;