import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";  


export const Star = () => {

  const intial = [
    {
      id: 1,
      name: "*",
      color: "black",
    },
    {
      id: 2,
      name: "*",
      color: "black",
    },
    {
      id: 3,
      name: "*",
      color: "black",
    },
    {
      id: 4,
      name: "*",
      color: "black",
    },
  ];

  const [data, setData] = useState(intial);

  useEffect(() => {
    console.log(data);
  }, [data]);


  const handleClick = (id) => {
    let x = [...data];
    let y = x.map((val) => {
      if (val.id === id) {
        val.color = "red";
        return val;
      } else if (val.id < id) {
        val.color = "blue";
        return val;
      } 
      // else if(val.id > id){
      //   val.color = "blue";
      //   return val;
      // }
       else return val;
    });
    setData(y);
  };



  return (
    <>

    
      {data?.map((val) => {
        return (
          <div key={val?.id}>
            <h1
              key={val?.id}
              style={{ color: val?.color }}
              onClick={() => {
                handleClick(val?.id);
              }}
            >
              {val?.name}
            </h1>

          </div>
        );
      })}

      
    </>
  );
};