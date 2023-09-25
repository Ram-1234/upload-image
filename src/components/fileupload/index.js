import React, { useMemo } from 'react';


const Preview = ({ path }) => {
    return (
        <div
            className='rounded p-1 m-5'
            style={{
                width: '30%',
                height: '300px',
                backgroundImage: `url(${path})`,
                backgroundSize: 'cover'
            }}
        >
        </div>
    )
}

const UploadFile = (props) => {
    const { handleOnChange, saveInput, handleSubmit, title, inputs } = props;

    /* usememo handling unneccessory rerendering */
    const isDisabled = useMemo(() => {
        return !!Object.values(inputs).some(input => !input)
    }, [inputs])

    return (
        <React.Fragment>
            <p className='display-6 text-center mb-3'>Upload Stock Image</p>
            <div className='mb-5 d-flex align-items-center justify-content-center'>
                {!isDisabled && <Preview {...inputs} />}
                <form onSubmit={handleSubmit.bind(this)} className="mb-2" style={{ textAlign: "left" }}>
                    <div className="mb-3">
                        <input onChange={handleOnChange(saveInput)} type="text" className="form-control" name="title" placeholder={title} aria-describedby='text' id="formFile" />
                    </div>
                    <div className="mb-3">
                        <input onChange={handleOnChange(saveInput)} className="form-control" name='file' type="file" id="file" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" disabled={isDisabled} className="btn btn-success float-end">Save changes</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default UploadFile;