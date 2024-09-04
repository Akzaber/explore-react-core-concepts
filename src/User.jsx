export default function User({user}){
    const {name, username, email} = user;
    const userStyle = {
        border: "4px solid purple",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        backgroundColor: "skyblue",
        color: "black"
    }
    return(
        <div style={userStyle}>
            <h1>FullName = {name}</h1>
            <h2>UserName = {username}</h2>
            <p>Email = {email}</p>
        </div>
    )
}