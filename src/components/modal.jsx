"use client"
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';

function ModalSearch(props) {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'fixed' }}
        >
            <Modal.Dialog >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {
                            props.results.map((artist) => (
                                <Link href={`/sobre?id=${artist.id}`}>
                                    <li key={artist.id}>
                                        <img src={artist.images[0]?.url} alt={artist.name} width="50" />
                                        {artist.name}
                                        <p>{artist.id}</p>
                                    </li>
                                </Link>
                            ))}
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ModalSearch;