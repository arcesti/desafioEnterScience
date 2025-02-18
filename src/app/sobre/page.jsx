"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import geraToken from "../lib/services/apiToken";

export default function artista() {
    const [artista, setArtista] = useState(null);
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        async function fetchToken() {
            const token = await geraToken();
            setAccessToken(token); // Atualiza o estado com o token válido
        }
        fetchToken();
    }, []);
    console.log("Token: " + accessToken);

    useEffect(() => {
        async function fetchArtist() {
            let artista = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = await artista.json();
            setArtista(data);
        }
        fetchArtist();
    }, [id, accessToken]);
    console.log(artista)
    console.log(geraToken().then(() => console.log()))
    return (
        <>
            <h1>Sobre o artista</h1>
            <p>
                Nome:{artista?.name};
            </p>
            <br />
            <p>
                ID:{artista?.id}
            </p>
        </>
    );
}