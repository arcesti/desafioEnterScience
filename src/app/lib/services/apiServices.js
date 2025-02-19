import axios from "axios";
import geraToken from "./apiToken";

const urlBase = "https://api.spotify.com/v1/artists?ids=5nP8x4uEFjAAmDzwOEc9b8,5e4Dhzv426EvQe3aDb64jL,0blbVefuxOGltDBa00dspv,0du5cEVh5yTK9QJze8zA0C,3w2HqkKa6upwuXEULtGvnY,4dpARuHxo51G3z768sgnrY"

export async function recomendados() {
    try {
        let token = await geraToken();
        const response = await axios.get(urlBase, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "Application/json"
            },
        })
        const data = response.data;
        console.log(data.artists)
        data.artists.map((artist) => {
            console.log("MEUS DADOS: "+ artist.name);
        })
        return data.artists;
    }
    catch(error) {
        console.error(`Erro ao buscar recomendações: ${error}`);
    }
}