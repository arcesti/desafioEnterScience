"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import geraToken from "../lib/services/apiToken";
import CardArtista from "./components/cardArtista";
import { searchAlbums } from "../lib/services/apiServices";

export default function Artista() {
    const [artista, setArtista] = useState(null);
    const [albums, setAlbums] = useState(null);
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
            const response = await searchAlbums(data.id);
            setAlbums(response);
        }
        fetchArtist();
    }, [id, accessToken]);
    console.log(`MEUS ALBUMS: ${albums}`)
    return (
        <>
            <CardArtista artista={artista} albums={albums}>

            </CardArtista>
        </>
    );
}