
function Main(props) {
    return (
        <div>
            <h6>Hello Main one</h6>
            <h6>Hello Main two</h6>
            <h6>Hello Main : {props.children}</h6>
        </div>
    );
}

export default Main;