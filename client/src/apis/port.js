import io from 'socket.io-client';

const port = "https://cool-tic-tac-toe.herokuapp.com/"; //need to change it before deployment
const socket = io(port);
export default socket;