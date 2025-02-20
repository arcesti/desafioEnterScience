import styles from '../styles/card.module.css'
import Image from 'next/image'

export default function CardArtista(props) {
    const artista = props.artista;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Image
                    width={500}
                    height={500}
                    src={artista?.image || '/default-image.jpg'} // Imagem padrão se não houver
                    alt={artista?.name || 'Imagem do Artista'}
                />
                <div>
                    <p>{artista?.name}</p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                        <span>Principal genero: {artista?.genre}</span>
                        <span>Popularidade: {artista?.popularity}%</span>
                    </div>
                    <p className={styles.description}>{artista?.description}</p>
                </div>
            </div>
            {/* Formulário */}
            <div className={styles.formContainer}>
                <h3>Informações do Evento</h3>
                <form>
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Artista Selecionado" value={artista?.name} disabled />
                    <input type="text" placeholder="Cache" />
                    <input type="date" placeholder="Data do Evento" />
                    <input type="text" placeholder="Endereço" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}
