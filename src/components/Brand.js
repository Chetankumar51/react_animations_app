import {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import '../styles/brand.css';
import reactimg from '../assets/Group 271.svg';
import brandlogo from '../assets/Group 272.svg';


const Brand = () => {

// const [state, setState] = useState([])
//     const onDrop = useCallback((files) => {
//         files.map(file => {
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 //store result into your state array.
//                 setState(prevState => {
//                     console.log(prevState);
//                     // console.log(event.target.result);

//                     const updatedImages = [...prevState.images, event.target.result];

//                     return {
//                         images: updatedImages,
//                     }
//                 })
//                 console.log(event.target.result);
//             };
//             reader.readAsDataURL(file);
//         });
//     },[])


    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
    
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
          // Do whatever you want with the file contents
            const binaryStr = reader.result
            console.log(binaryStr)
          }
          reader.readAsArrayBuffer(file)
        })
        
      }, [])
      const {getRootProps, getInputProps} = useDropzone({onDrop})







        // const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
        
        // const files = acceptedFiles.map(file => (
        //     <li key={file.path}>
        //     {file.path} - {file.size} bytes
        //     </li>
        // ));




    
    
   
  return (
    <div>
        <div className="brand_main">
            <div className="row">
                <div className="col-2"></div>

                
            <div className="col-4">

                <div className="part1"> 
                    <div className="main_brand1">
                        <span className='logo_button1'>Brand logo</span>
                    </div>

                    <div className='drag_main '>
                    <div className="drag1">

                    {/* <div {...getRootProps({className: 'dropzone'})}>
                         <input {...getInputProps()} />
                              <div className='main_drag1'>Click to browse or drag and drop your files</div>
                         </div> */}

                    <div {...getRootProps()}>
                         <input {...getInputProps()} />
                              <div className='main_drag1'>Click to browse or drag and drop your files</div>
                         </div>
                    </div>
                    </div>
                </div>

                <div className="main3 mt-3">
                    <p>Dimensions: 160 x 40 (min)</p>
                    <h5>Example placement:</h5>
                    <div>
                        <img src={reactimg} className="mt-3" alt="" />
                    </div>
                </div> 
                    
                </div>


                <div className="col-4">

                <div className="part1">
                    <div className="main_brand1">
                        <span className='logo_button1'>Brand logo</span>
                    </div>

                    <div className='drag_main'>
                    <div className="drag1">
                    <div {...getRootProps()}>
                         <input {...getInputProps()} />
                              <div className='main_drag1'>Click to browse or drag and drop your files</div>
                         </div>
                    </div>
                    </div>

                    </div>

                    <div className="main3 mt-3">
                    <p>Dimensions: 540 x 240 (min)</p>
                    <h5>Example placement:</h5>
                    <div>
                        <img className="mt-3" src={brandlogo} alt="" />
                    </div>
                </div>
                </div>
                </div>


                <div className="col-2"></div>
            </div>

            

{/* 
            <aside>
        <h4>Files</h4>
        <ul>{state}</ul>
      </aside> */}

        </div>
  )
}

export default Brand;