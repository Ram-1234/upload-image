import React, { useContext } from 'react';
import { Context } from '../context';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const Card = ({ src }) => {
    const theme = useContext(Context)
    console.log('theme', theme);
    const styles = { margin: "0", padding: "0", fontSize: "8px", fontFamily: "sans-serif", fontStyle: "oblique" }
    return (
        <div className="col mb-5">
            <div className="card" style={{ width: "18rem" }}>
                <img src={src} className="card-img-top" style={{maxHeight:"290px"}} alt="_card" />
                <div class="card-body bg-dark text-light" style={{ borderRadius: "0 0 5px 5px" }}>
                    <p class="card-text">
                        {/* <i class="bi bi-person-circle bg-light" style={{width:"50px",height:"50px", color:"white", background:"white"}}></i> */}
                        <div className='user float-start'>
                            <AccountCircleIcon />
                            <p style={styles}>Uploaded</p>
                        </div>
                        <div className='likes float-end d-flex' style={styles}>
                            <div className='support m-1 p-0'>
                                <VolunteerActivismIcon />
                                <p style={styles}>Support</p>
                            </div>
                            <div className='like m-1 p-0'>
                                <FavoriteIcon />
                                <p style={styles}>Likes</p>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;