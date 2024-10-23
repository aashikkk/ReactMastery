
// function Greet() {
//   return <h1>Hello World</h1>;
// }

const Greet = ({name, heroName, children}) => {
    console.log(props);
    return(
        <>
            <h1>Hello, {name} a.k.a {heroName}</h1>
            {children}
        </>
    ) 
};


export default Greet;