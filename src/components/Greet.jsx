
// function Greet() {
//   return <h1>Hello World</h1>;
// }

const Greet = (props) => {
    console.log(props);
    return(
        <>
            <h1>Hello, {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </>
    ) 
};


export default Greet;