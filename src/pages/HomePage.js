import React from 'react';

const HomePage = ( { history } ) => {
    function linkto(page) {
        history.push(page);
    };
    
    return (
        <>
            <h2>home page</h2>
            <button onClick={()=>linkto('/login')}>sign in</button>
            <button onClick={()=>linkto('/register')}>sign up</button>
        </>
    );
};

export default HomePage;