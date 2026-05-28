import React from 'react'
import { Bookmark } from 'lucide-react'

const card = (props) => {
    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src={props.brandLogo} alt="" />
                    <button>save <Bookmark size={14} /></button>
                </div>
                <div className="center">
                    <h3>{props.company} <span>{props.postedDaysAgo} days ago</span></h3>
                    <h2>
                        {props.position}
                    </h2>
                    <div className="tags">
                        <h4>{props.tagEmploymentType}</h4>
                        <h4>{props.tagExperienceLevel}</h4>
                    </div>

                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.payRate} </h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply now</button>
            </div>
        </div>
    )
}

export default card