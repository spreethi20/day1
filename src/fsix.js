function F6(){
    const reviewers=['Preethi','Tanmayi','Dhruva','Viraj','Vihan']
    const reviews=['Good','Average','Bad','Somewhat good','Totally bad']
    return(
        <div>
            <h1>REVIEWS</h1>
            <img src="./peacock.jpg" alt="peacock" width={175}/>
            <ul>
                {reviewers.map((i,index) =>(
                  <li key={index}>
                    <h2>{i}</h2><h3>{reviews[index]}</h3>
                  </li>
                ))}
            </ul>
        </div>
            
    );
}
export default F6;