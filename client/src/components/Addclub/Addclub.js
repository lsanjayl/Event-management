
import {Modal} from 'react-bootstrap';
import {Button,Form,FormLabel,Spinner} from 'react-bootstrap'
import  React, { useState } from 'react';
import { storage } from "../../services/auth"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import EventDataService from "../../services/event.services"
function MyVerticallyCenteredModal(props) {
    const handleChange = e => {
        props.setNewClub(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
      }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a new group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Group name</Form.Label>
        <Form.Control type="text" placeholder="mobile development" name="name"value={props.newClub.name} onChange={handleChange}/>
        <Form.Label>Group description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Description" name="description"value={props.newClub.description} onChange={handleChange}/>
        <FormLabel>Group icon</FormLabel>
                <Form.Control name="images" type="file" onChange={(e) => props.setImage(e.target.files[0])} />
                <div style={{display:"flex"}}>
                {props.imageUpload.state?<Button variant="success" disabled style={{margin:"10px 5px 0px 10px"}}>Uploaded</Button>:<Button onClick={props.upload}style={{margin:"10px 5px 0px 10px",backgroundColor:"#189AB4",color:"white"}}>Upload</Button>}
                {props.imageUpload.isUploading&&<Spinner animation="border" variant="primary"style={{margin:"12px 5px 0px 10px"}}/>}
                </div>
      </Form.Group>
      
    </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.submit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Addclub () {
  const [modalShow, setModalShow] = React.useState(false);
  const [image, setImage] = useState("");
  const [imageUpload, setimageUpload] = useState({
    isUploading: false,
    state: false
  });
  const [newClub, setNewClub] = useState({
    name: '',
    description:'',
    mailid:'',
    iconref: ''
  });
  const close = () => {
    setModalShow(false);
    setNewClub({
        name: '',
        description:'',
        mailid:'',
        iconref: ''
      })
}
  const submit = async()=>{
    try {
        const docRef = await EventDataService.addEvent(newClub, 'clubs');
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  
      close();
  }
  const upload = () => {
    
    var text=image.name;
    console.log(text)
    if(text){
    setimageUpload(prevUser => ({ ...prevUser, isUploading:true}));
    if (image == null)
      return;
    const metadata = {
      contentType: 'image/jpeg'
    };
    const storageRef = ref(storage, 'images/' + image.name);
    const uploadTask = uploadBytesResumable(storageRef, image, metadata);
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
          setNewClub(prevUser => ({ ...prevUser,  iconref:downloadURL}));
        //   console.log(values)
          setimageUpload(prevUser => ({ ...prevUser, isUploading:false}));
          setimageUpload(prevUser => ({ ...prevUser, state:true}));
        });

      }
    );
    }
  }
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}style={{margin: "10px",backgroundColor:"#189AB4",color:"white"}}>
        Add club
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={close}
        setImage={setImage}
        upload={upload}
        imageUpload={imageUpload}
        submit={submit}
        newClub={newClub}
        setNewClub={setNewClub}
      />
    </>
  );
}

export default Addclub;