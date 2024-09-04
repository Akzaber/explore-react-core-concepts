export default function Todo({step, next, last}){
    if(next){
        return <h1>{step}</h1>
    }
    return <h1>{last}</h1>

}