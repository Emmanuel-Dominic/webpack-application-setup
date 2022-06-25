import usersList from "./users";
import './styles/main.scss';
import mine from './assets/mine.png';

const profileImg = document.getElementById('img-profile');
profileImg.src = mine;

const profileBtn = document.getElementById('profileBtn');
profileBtn.addEventListener('click', usersList)

usersList();
