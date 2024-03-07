import { useState } from 'react';
import './App.css';
// import Box1 from './components/Box1';
import Brand from './components/Brand';
// import Branding from './components/Branding';
// import DropZone from './components/Dropzone';
import Jsx from './components/Jsx';
// import Mydropzone from './components/Mydropzone';
// import Onsite from './components/Onsite';
// import NavBar from './components/NavBar';
// import { Star } from './components/Star';
import UseEffect from './components/UseEffect';

function App() {
  // let listdata=
  //   {
  //   name:"chetan",
  //   city:"koppal"
  // }

  // const [removeComp, setremoveComp] = useState(true); 
  return (
    <div>
      {/* <NavBar /> */}
      {/* <Star /> */}
      {/* <Box1 /> */}
      {/* <Onsite />  */}
      {/* <UseEffect /> */}
      {/* <div>{removeComp && <UseEffect />}</div>
      <button onClick={()=>setremoveComp(!removeComp)} >unmount component</button> */}


      {/* <Jsx  listdata={listdata} /> */}

      {/* <Branding /> */}
      <Brand />
      {/* <DropZone /> */}
      {/* <Mydropzone /> */}


    </div>
  );
}

export default App;
