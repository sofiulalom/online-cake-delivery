

export const SetToken=(user)=> {
    
    const currentUser={
        email: user.email,
    }
     
    fetch(`https://cake-service-server.vercel.app/jwt`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=>  res.json())
    .then(data => {
        
        localStorage.setItem('cake-token', data.token)
        
    })

};

