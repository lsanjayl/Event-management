import React from "react"
import { useState } from "react"
import EventDataService from "../../../services/event.services"
import { storage } from "../../../services/auth.js"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import MyVerticallyCenteredModal from "./Modaljsx"
import { Button } from "react-bootstrap"
function EventModal({ choice, getEvents }) {
  const [modalShow, setModalShow] = useState(false);
  const [image, setImage] = useState("");
  const [report, setReport] = useState("");
  const [imageUpload, setimageUpload] = useState({
    isUploading: false,
    state: false
  });
  const [reportUpload, setreportUpload] = useState({
    isUploading: false,
    state: false
  });
  const clubName = choice
  const upload = () => {
    var text=report.name;
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
          setValues(prevUser => ({ ...prevUser, image: downloadURL, imgRef: image.name }));
          console.log(values)
          setimageUpload(prevUser => ({ ...prevUser, isUploading:false}));
          setimageUpload(prevUser => ({ ...prevUser, state:true}));
        });

      }
    );
    }
  }
  const uploadrep = () => {
    var text=report.name;
    var substring = text.substring(text.length - 3);
    if(substring==="pdf"){
    setreportUpload(prevUser => ({ ...prevUser, isUploading:true}));
    if (image == null)
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
          console.log(values)
          setreportUpload(prevUser => ({ ...prevUser, isUploading:false}));
          setreportUpload(prevUser => ({ ...prevUser, state:true}));
        });
      }
    );
    }
    else{
      alert("Please upload a pdf file");
    }
  }
  const close = () => {
    setModalShow(false);
    setValues({
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
    setimageUpload({
      isUploading: false,
      state: false
    })
    setreportUpload({
      isUploading: false,
      state: false
    })
  }
  const onSubmit = async () => {
    try {
      console.log(values)
      const docRef = await EventDataService.addEvent(values, clubName);
      console.log("Document written with ID: ", docRef.id);
      getEvents()
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    close();
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

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)} style={{ margin: "10px", width: "110px",backgroundColor:"#189AB4",color:"white"}}>
        Add Event
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        upload={upload}
        uploadrep={uploadrep}
        values={values}
        setReport={setReport}
        setImage={setImage}
        setValues={setValues}
        onSubmit={onSubmit}
        onHide={close}
        imageUpload={imageUpload}
        reportUpload={reportUpload}
      />
    </>
  );
}

export default EventModal;