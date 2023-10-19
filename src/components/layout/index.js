import React from "react";
import Navbar from "../navbar/navbar";
import UploadFile from "../fileupload";

const Layout =({children, state, onChange,onSubmit, saveInput, toggle})=>{
    console.log('state', state);
    return(
        <React.Fragment>
            <Navbar />
            <div className="container text-center mt-5">
                <button className="btn btn-success float-end" onClick={()=> toggle(!state.isCollaps)} >{state?.isCollaps ? "Close" : "+Add"}</button>
                <div className="clearfix mb-4"></div>
                {!state?.isCollaps && <UploadFile
                isVisible={state?.isCollaps}
                inputs={state?.inputs}
                handleOnChange={onChange}
                handleOnSubmit={onSubmit}
                saveInput={saveInput}
                />
                }
                {children}
            </div>
        </React.Fragment>
    )
}

export default Layout;