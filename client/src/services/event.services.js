import { db } from "./auth";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

class EventDataService {
  addEvent = (newEvent,clubName) => {
    const eventCollectionRef = collection(db, clubName);
    return addDoc(eventCollectionRef, newEvent);
  };

  updateEvent = (id, updatedEvent,clubName) => {
    const eventDoc = doc(db, clubName, id);
    return updateDoc(eventDoc, updatedEvent);
  };

  deleteEvent = (id,clubName) => {
    const bookDoc = doc(db, clubName, id);
    return deleteDoc(bookDoc);
  };

  getAllEvent = (clubName) => {
    const eventCollectionRef = collection(db, clubName);
    return getDocs(eventCollectionRef);
  };

  getEvent = (id,clubName) => {
    const eventDoc = doc(db, clubName, id);
    return getDoc(eventDoc);
  };
  filt = (events,theme,event,mode) => {
    let themee=events.filter((element)=>
      (element.theme===theme)||(theme==='true')
    )
    events=themee
    let modee=events.filter((element)=>
      (element.mode===mode)||(mode==='true')
    )
    events=modee
    let eventt=events.filter((element)=>
      (element.event===event)||(event==='true')
    )
    events=eventt
    return events;
  }
}

export default new EventDataService();