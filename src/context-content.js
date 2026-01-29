import React from "react";
import {userContext} from './context'

export default function Context(){
    let user = React.useContext(userContext);

    const contextStyle = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        margin: 10,
        padding: 10
    }

    return(
        <div style={contextStyle}>
            Hello {user}
        </div>
    )
}