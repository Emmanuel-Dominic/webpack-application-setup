import axios from 'axios';

const usersList = () => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    axios.get('https://jsonplaceholder.typicode.com/users', config)
        .then(res => {
            let index = Math.floor(Math.random()*res.data.length);
            document.getElementById('profile-name').innerHTML = res.data[index].name;
            document.getElementById('profile-email').innerHTML = res.data[index].email;
            document.getElementById('profile-website').innerHTML = res.data[index].website;
            document.getElementById('profile-phone').innerHTML = res.data[index].phone;
            document.getElementById('profile-company').innerHTML = res.data[index].company.name;
        })
}

export default usersList;
