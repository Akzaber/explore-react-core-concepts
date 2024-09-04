export default function Actor({name, actors}){
    return(
        <div>
            <li>Name : {name}</li>
            {
                actors.map(actor => <li>Actor-Name: {actor}</li>)
            }
        </div>
    )
}