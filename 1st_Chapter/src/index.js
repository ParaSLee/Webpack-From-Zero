// import './index.css';
import './index.less';
import img from '../statics/imgs/img.jpg'

console.log("Webpack Lemo2");

const myimg = new Image();
myimg.src = img;
document.body.appendChild(myimg);