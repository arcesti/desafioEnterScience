import style from "../styles/card.module.css"

export default function CardArtista(props) {
    console.log(props.albums)
    return (
        <div className={style.container}>
            {
                props.albums?.items.map((alb) => {
                    <img src={alb.images[1].url} alt="" />
                })
            }
        </div>
    )
}