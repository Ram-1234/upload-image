import React,{useContext} from 'react';
import { Context } from '../context';

const Card = ({ src }) => {
const theme = useContext(Context)
console.log('theme', theme);
    return (
        <div className="col mb-5">
            <div className="card" style={{ width: "18rem" }}>
                <img src={src} className="card-img-top" alt="_card" />
            </div>
        </div>
    )
}

export default Card;