
let login = (username, password) => {
    if(username !== 'admin' ||  password !== '1234s' ){
        console.log('login loaded');
        document.write('<div> + INCORRECT LOGGING</div>')
    }
};


export {login}