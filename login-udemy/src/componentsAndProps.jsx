const HelloWorld = ({name}) => {
    <div>
        <h1>Hello, {name}</h1>
    </div>
}

function MyInput(){
    let myValue;

    return(
        <input type='text' value={myValue}></input>
    )
}