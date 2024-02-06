import React, { useState } from 'react';

function Sample() {
    const [login, setLogin] = useState(false);

    return (
        <div>
            {login ? <h2>Hey please LogIn</h2> : <h2>Welcome Adil</h2>}
            <button onClick={() => setLogin(!login)}>
                {login ?  'Please Login' : 'Log Out' }
            </button>
        </div>
    );
}

export default Sample;

