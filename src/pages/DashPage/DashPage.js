import React, {FC} from 'react';
import grossas from "../../images/grossas.gif"
import './DashPage.css'

const DashPage: FC = () => {

    return (
        <div className="dash">
            <h1>GROSSAS</h1>
            <div className="image">
                <img id="img" src={grossas} alt="dsf"/>
            </div>
        </div>
    );
}

export default DashPage