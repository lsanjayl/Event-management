import { Modal, Form, Button, Spinner } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import { storage } from "../../../services/auth"
import { ref, deleteObject, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import EventDataService from "../../../services/event.services"
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            size="lg"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Report updation
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form.Control name="reports" type="file" onChange={(e) => props.setReport(e.target.files[0])} />
                <div style={{ display: "flex" }}>
                    {props.reportUpload.state ? <Button variant="success" disabled style={{ margin: "10px 5px 0px 10px" }}>Uploaded</Button> : <Button onClick={() => props.uploadrep()} style={{ margin: "10px 5px 0px 10px", backgroundColor: "#189AB4", color: "white" }}>Update</Button>}
                    {props.reportUpload.isUploading && <Spinner animation="border" variant="primary" style={{ margin: "12px 5px 0px 10px" }} />}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.close} style={{ backgroundColor: "#189AB4", color: "white" }}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Updatereport({ repRef,id,choice,getEvent }) {
    const handleEdit = async () => {
        setModalShow(true);
        console.log(choice)
        const docSnap = await EventDataService.getEvent(id, choice);
        setValues(docSnap.data());

    }
    const [values, setValues] = useState({
        title: "",
        theme: "webinar",
        venue: "",
        mode: "Offline",
        date: "",
        duration: "",
        nooffaculty: "",
        noofstud: "",
        url: "",
        remarks: "",
        image: "",
        report: "",
        repRef: "",
        imgRef: "",
        event: "Intercollege",
        participants:[]
    })
    const [modalShow, setModalShow] = useState(false);
    const [report, setReport] = useState("");
    const [reportUpload, setreportUpload] = useState({
        isUploading: false,
        state: false
    });
    const uploadrep = async () => {
        var text = report.name;
        var substring = text.substring(text.length - 3);
        if (substring === "pdf") {
            await deleteReport();
            setreportUpload(prevUser => ({ ...prevUser, isUploading: true }));
            if (report == null)
                return;
            const metadata = {
                contentType: 'image/pdf'
            };
            const storageRef = ref(storage, 'images/' + report.name);
            const uploadTask = uploadBytesResumable(storageRef, report, metadata);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    switch (error.code) {
                        case 'storage/unauthorized':
                            break;
                        case 'storage/canceled':
                            break;
                        case 'storage/unknown':
                            break;
                    }
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log(downloadURL)
                        setValues(prevUser => ({ ...prevUser, report: downloadURL, repRef: report.name }));
                        // console.log(values)
                        setreportUpload(prevUser => ({ ...prevUser, isUploading: false }));
                        setreportUpload(prevUser => ({ ...prevUser, state: true }));
                    });
                }
            );
        }
        else {
            alert("Please upload a pdf file");
        }
    }

    const deleteReport = async () => {
        // Delete the file
        const reportRef = ref(storage, 'images/' + repRef);
        // Create a reference to the file to delete
        await deleteObject(reportRef).then(() => {
            console.log("File deleted successfully report");
        }).catch((error) => {
            console.log("erroe occured at report delete", error);
        });
    }
    const close = async() => {
        await EventDataService.updateEvent(id, values, choice);
        getEvent();
        setreportUpload({
            isUploading: false,
            state: false
        })
        setModalShow(false);
    }
    return (
        <>
            <Button style={{ margin: " 0px 0px 0px 10px", backgroundColor: "#189AB4", color: "white" }} onClick={() => handleEdit()}>
                Update
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                reportUpload={reportUpload}
                setreportUpload={setreportUpload}
                uploadrep={uploadrep}
                setReport={setReport}
                close={close}
                onHide={close}
            />
        </>
    );
}
export default Updatereport;