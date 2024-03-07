import React, { useState } from 'react'

const Jsx = ({listdata}) => {
    const [data, setdata] = useState(listdata)
    let answer = "jsx is a javascript xml";
    // let userName = "chetan";
    // const newone = true;
    // if(newone){
    //     return (
    //         <>
    //         <h1>hi, bro</h1>
    //         </>
    //     )
    // }else{
    //     return (
    //         <>
    //         <div>bye, bro</div>
    //         </>
    //     )
    // }


    let userName = null;
    const userHtml=(user)=>{
            if(user){
                return <div>i am a {user} </div>
            }else{
                return <h1>i am xyz</h1>
            }
    }

  return (
    <>
    <div>{answer}</div>
    <h1>{userHtml(userName)}</h1>
     <div>{data? <p> hi {data.name} </p> : <p>nothing</p>}</div> 
    </>
  )
}

export default Jsx