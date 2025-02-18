import axios from "axios";
import geraToken from "./apiToken";

const urlBase = "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,0blbVefuxOGltDBa00dspv,1elUiq4X7pxej6FRlrEzjM,3w2HqkKa6upwuXEULtGvnY,4dpARuHxo51G3z768sgnrY"

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
        data.artists.map((artist) => {
            console.log("MEUS DADOS: "+ artist.name);
        })
    }
    catch(error) {
        console.error(`Erro ao buscar recomendações: ${error}`);
    }
}