

const Error = ( {message} : { message : string}) => {
    return (
        <div>
            <h2 style = {{color: "red"}}>{message} </h2>
        </div>
    )
};

export default Error;