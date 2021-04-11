import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../../Actions";

function EditTask({ id }) {
    const [show, setShow] = useState(false);
    const [editask, seteditask] = useState("");

    const handlechange = (input) => {
        seteditask(input);
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(editTask({ editask: editask, id }));
        seteditask("");
        handleClose();
    };
    return (
        <>
            <Button
                variant="outline-dark"
                onClick={(e) => handleShow(e.target.value)}
            >
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task </Modal.Title>
                </Modal.Header>
                <Form.Control
                    type="text"
                    placeholder="Edit your task here..."
                    onChange={(e) => handlechange(e.target.value)}
                />
                <Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditTask;
