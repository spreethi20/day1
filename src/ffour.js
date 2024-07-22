function F4(){
    const colors=['Red','Blue','Green','Yellow'];
    return(
        <div>
            <h1>List of colors</h1>
            <ul>
                {colors.map((color,index) => (
                <li key={index}>{color}</li>
                ))}
            </ul>
        </div>
    );
}
export default F4;