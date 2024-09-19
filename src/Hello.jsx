import './Hello.css';
export default function Hello({firstname,lastname,age}){
        return(<><h1>First name: {firstname}</h1><h1>Last name: {lastname}</h1><h1>Age:{age}</h1></>)
};