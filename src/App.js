import Navbar from "./components/navbar/navbar";
import UploadFile from "./components/fileupload";
import React, { lazy, Suspense, useEffect, useState } from "react";
import './App.css';
import photos from "./components/data";
const Card = lazy(() => import('./components/card/card'));

function App() {
  const [items, setItems] = useState([]);
  const [isCollaps, collapse] = useState(false);
  const toggle = () => collapse(!isCollaps);
  const [title, setTitle] = useState('Title')
  const [inputs, setInputs] = useState({ title: "", file: "", path: null })
  const [count, setCount] = useState('');

  console.log('count', count);

  useEffect(() => {
    setItems(photos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photos])

  useEffect(() => {
    console.log('items effetc')
    setCount(`You have ${count} Image` + items.length > 1 ? 's' : '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  /* debouncing logic */
  const handleOnChange = (fun, timeout = 500) => {
    let timer = null;
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => { fun.apply(this, args) }, timeout)
    }
  }

  const saveInput = (event) => {
    setTitle(event?.target?.value);
    if (event.target.name === 'file') {
      setInputs({ ...inputs, file: event?.target?.files[0], path: URL?.createObjectURL(event?.target?.files[0]) })
    } else
      setInputs({ ...inputs, title: event?.target?.value })


  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setItems(() => [inputs?.path, ...items])
    setInputs({ title: "", file: "", path: null })
    collapse(false)
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle} >{isCollaps ? "Close" : "+Add"}</button>
        <div className="clearfix mb-4"></div>
        {!isCollaps && <UploadFile
          isVisible={isCollaps}
          inputs={inputs}
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
          saveInput={saveInput}
          title={title}
        />}
        <div className="mb-2">{count}</div>
        <h1 className="mb-4">Gallery</h1>
        <Suspense fallback={<h4>Loading...</h4>}>
          <div className="row" >
            {items?.length && items?.map((item, index) => {
              return <Card key={index} src={item} />
            })}
          </div>
        </Suspense>
      </div>
    </React.Fragment>
  );
}

export default App;
