import React, { lazy, Suspense, useEffect, useState, useReducer } from "react";
import Layout from "./components/layout";
import './App.css';
import photos from "./components/data";
import { initialState, reducer } from "./components/data";

const Card = lazy(() => import('./components/card/card'));


function App() {
  const [count, setCount] = useState('');
  const [state, dispacth]=useReducer(reducer, initialState);

  const toggle = (bool) => {
    dispacth({type:"IS_COLLAPS", payload:bool})
  };

  useEffect(() => {
    dispacth({type:"SET_ITEM", payload:photos})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photos])

  useEffect(() => {
    setCount(`You have ${count} Image` + state?.items.length > 1 ? 's' : '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.items])

  /* debouncing logic */
  const handleOnChange = (fun, timeout = 500) => {
    let timer = null;
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => { fun.apply(this, args) }, timeout)
    }
  }

  const saveInput = (event) => {
    if (event.target.name === 'file') {
      dispacth({type:"SET_INPUT", payload:{...state.inputs, file: event?.target?.files[0], path: URL?.createObjectURL(event?.target?.files[0])}})
    } else{
      dispacth({type:"SET_INPUT", payload:{ ...state.inputs, title: event?.target?.value }})
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispacth({type:"SET_ITEM", payload:[state.inputs?.path, ...state?.items]})
    dispacth({type:"SET_INPUT", payload:{title: "", file: "", path: "" }})
    toggle(true)
  }

  return (
    <React.Fragment>
    <Layout
    state={state}
    toggle={toggle}
    onChange={handleOnChange}
    onSubmit={handleSubmit}
    saveInput={saveInput}
    >
        <div className="mb-2">{count}</div>
        <h1 className="mb-4">Gallery</h1>
        <Suspense fallback={<h4>Loading...</h4>}>
          <div className="row" >
            {state?.items?.length && state?.items?.map((item, index) => {
              return <Card key={index} src={item} />
            })}
          </div>
        </Suspense>
    </Layout>
    </React.Fragment>
  );
}

export default App;
