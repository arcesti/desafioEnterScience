"use client"
import Image from "next/image";
import { recomendados } from "./lib/services/apiServices.js";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    recomendados();
  }, []);
  return (
    <div style={{display: "flex", width:"100vw", flex: "0 1 20rem"}}>
        
    </div>
  );
}
