import faker from '@faker-js/faker';


const appCss={
   textAllign:'center',
   alignItems:'center',
   justifyContent:'center',
   color:'silver',
   border:'3px solid black'
}
function App() {
  function getTime() {
    return (new Date()).toLocaleTimeString()
}
  return (
    <div className="App" style={appCss}>
      <h1 >Cool {getTime()} </h1>
      <i className="massive snowflake icon" style={{color:'grey'}}/>
      <i className="massive sun icon" style={{color:'orange'}}/>
      <h2> Hi {faker.animal.type()}</h2>
    </div>
  );
}

export default App;
