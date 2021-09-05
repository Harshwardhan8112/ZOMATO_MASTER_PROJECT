//import HOC
import Temp from "./Component/temp";
import HomeLayoutHOC from "./HOC/Home.Hoc";

import Master from "./Component/master"

function App() {
  return <>
  
  <HomeLayoutHOC path="/" exact component={Temp}/>
   <HomeLayoutHOC path="/:type" exact component={Master}/>
  </>
  
}

export default App;

//delivery
//dining out
//night life
//nutrition

//master component looks for url parameter