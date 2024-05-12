import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.js'
function VerifiedEmail() {
    const { token } = useParams();
    var request = new Request('http://localhost:3001/api/VerifyUser', {
                    method: 'POST',
                    headers: new Headers({'Content-Type': 'application/json'}),
                    body: JSON.stringify({token: token})
                })
                fetch(request)
                    .then(function(response) {
                        response.json()
                            .then(function(data) {
                            });
                    });
    return (
    <div>
        <Navbar />
            <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundColor: "#3E2751"}}>
                <div className="bg-white p-3 rounded w-25">
                    <h1 className="text-center">You Verified your Email!</h1>
                    <h3 className="text-center">You can now login</h3>
                </div>
            </div>
    </div>
    );
}

export default VerifiedEmail;