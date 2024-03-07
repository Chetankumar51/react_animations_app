import React from "react";
import { useState } from "react";
import "../styles/onsite.css";

const Onsite = () => {

//   const [date, setdate] = useState("");

//   const handleDate = (e) => {
//     const { value } = e.target;
//     const regex = /^[0-9]*$/;
//     if(regex.test(value)){
//         console.log("sucess");
//         console.log(date.length);
//         if(date.length===2||date.length===5){
//         console.log("3333");
//             setdate(...date+"/"+value);
//         }else if(date.length<8){
//             console.log("67777");
//             setdate(value);
//         }
//     }
//   };
// console.log(date.length);
//   console.log(date);

  return (
    <div>
      <div className="container">
        <h3 className="Installation">Installation</h3>

        <div className="row">
          <div className="col-6">
            <h5 className="add">Add code to your site</h5>
            <p className="add_the">
              Add the following code to your site right after opening the tag.
              We recommend adding the code to all pages of your site. This code
              needs to be added only once per page. Note: adding the script
              through a tag manager is not supported.
            </p>
          </div>

          <div className="col-6">
            <div
              className="row row_data"
              style={{ border: "1px solid #A8BAC9" }}
            >
              <div className="col-1 col_first">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </div>
              <div className="col-11 col_sec">
                <li>script</li>
                <li>async</li>
                <li>src=”https://osm.bankpay.to/lib.js”</li>
                <li>data-client-id=”1234abcd-4567efgh-8901ijkl”</li>
                {/* <li>'></>'</li>  */}
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className=" col-md-6 col-xs-6">
            <h5 className="add">Refresh placements</h5>
            <p className="add_the">
              Placements are rendered after the page loads. Products where the
              user can select options that change the price, or to show a
              placement that is appended after DOM load, you will need to
              refresh the placement to update the values or render the content.
            </p>
          </div>

          <div className="col-md-6 col-xs-6 ">
            <div className="onsite__right__wrapper">

            <div className="onsite__right__wrapper--left">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </div>

            <div className="onsite__right__wrapper--right">
              <li>
                <span className="green" style={{ color: "#129448" }}>script</span>
              </li>
              <li>
                <span style={{ color: "#000000" }}>
                  window.BankpayOnSiteMessaging =
                </span>
              </li>
              <li>
                <span style={{ color: "#000000" }}>
                  window.BankpayOnSiteMessaging | | [];
                </span>
              </li>
              {/* <li><span style={{color:"#000000"}}>window.BankpayOnSiteMessaging.push({ eventName:</span></li> */}
              <li>
                <span style={{ color: "#FD2137" }}>
                  {/* ‘refresh-placements’ }); */}
                </span>
              </li>
              {/* <li><span style={{color:"#129448"}}>></script></span></li>  */}
            </div>

            </div>
           

   
          </div>


          
        </div>

      </div>
      {/* <input
        type="text"
        value={date}
        onChange={handleDate}
        placeholder="dd/mm/yyyy"
      /> */}

      <input type="text" className="inp" />

    </div>
  );
};

export default Onsite;
