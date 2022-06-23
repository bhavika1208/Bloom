import React,{ useContext, useEffect, useRef, useState} from 'react';
import noteContext from "../Context/Notes/NoteContext"
import Noteitem2 from './Noteitem2';

export const All = (props) => {
    const context = useContext(noteContext);
    const { notes, getAllNotes } = context;

  useEffect(() => {
        getAllNotes()
    // eslint-disable-next-line
}, [])

const ref = useRef(null)
const refClose = useRef(null)
const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
// const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  return (
    <div className="row mx-2">
                <h2>Your Notes</h2>
                <div className="mx-2">
                    {notes.length === 0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <Noteitem2 key={note._id} showAlert={props.showAlert} note={note}/>
                })}
    </div>
  );
};

// import React, { useContext, useEffect, useRef, useState } from "react";
// import noteContext from "../Context/Notes/NoteContext";
// import Noteitem from "./Noteitem";

// export const All = (props) => {
//   const context = useContext(noteContext);
//   const { notes, getAllNotes } = context;

//   useEffect(() => {
//     getAllNotes();

//     // eslint-disable-next-line
//   }, []);

//   const ref = useRef(null);
//   const refClose = useRef(null);
//   const [note, setNote] = useState({
//     id: "",
//     etitle: "",
//     edescription: "",
//     etag: "",
//   });

//   const updateNote = (currentNote) => {
//     ref.current.click();
//     setNote({
//       id: currentNote._id,
//       etitle: currentNote.title,
//       edescription: currentNote.description,
//       etag: currentNote.tag,
//     });
//   };

//   return (
//     <>
//       <h1> All Interview</h1>
//       <div className="row my-3">
//         <h2 className="text-center my-5">Your Notes</h2>
//         <div className="container mx-2">
//           {notes.length === 0 && "No notes to display"}
//         </div>
//         {notes.map((note) => {
//           return (
//             <Noteitem
//               key={note._id}
//               updateNote={updateNote}
//               showAlert={props.showAlert}
//               note={note}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// };