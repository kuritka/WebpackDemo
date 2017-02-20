
let login = (username, password) => {
    if(username !== 'admin' ||  password !== '1234sa' ){
        console.log('login loaded');
        document.write('<div> + INCORRECT LOGGING 123</div>')
    }
};


export {login}