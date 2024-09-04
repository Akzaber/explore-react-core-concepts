export default function Singer({singer}){
    const {name, age} = singer;
    return(
        <div>
            <h1>Singer Name: {name}</h1>
            <h2>Age: {age}</h2>
        </div>
    )
}