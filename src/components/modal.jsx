"use client"
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import {  useState } from 'react';

function ModalSearch(props) {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    return (
        <>
            {
                show && (
                    <div
                        className="modal show"
                        style={{ display: 'block', position: 'fixed' }}
                    >
                        <Modal.Dialog >
                            <Modal.Header closeButton onClick={handleClose}>
                                <Modal.Title style={{ color: "#fff" }}>Artistas encontrados</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {
                                    props.results.map((artist) => (
                                        <Link style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} href={`/sobre?id=${artist.id}`}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginLeft: "2rem", marginBottom: "1rem" }}>
                                                <img src={artist.images[0]?.url} alt={artist.name} width="50" />
                                                {artist.name}
                                            </div>
                                        </Link>
                                    ))}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Fechar
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                )
            }
        </>
    );

}

export default ModalSearch;