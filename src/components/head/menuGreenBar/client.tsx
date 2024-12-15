"use client"
import "./client"
import { useEffect, useState } from 'react'

import { Link } from "react-router-dom"
import axios from "axios"
export interface dataBase1 {
     title1: string
     href1: string
}
export interface dataBase2 {
     title2: string
     href2: string
}
export interface dataBase3 {
     title3: string
     href3: string
}
export interface dataBase4 {
     title4: string
     href4: string
}
export interface dataBase5 {
     title5: string
     href5: string
}
export interface dataBase6 {
     title6: string
     href6: string
}

function DataGreenBar1() {
     const [data, setdata] = useState([]);
     useEffect(() => {
          axios("http://localhost:7000/dataBase1").then((res) => {
               setdata(res.data)
          })
     }, [])

     return (


          <li className="digiBar hidden w-52 overflow-auto bg-white top-12 absolute z-10 ">
               <ul className="flex flex-col justify-center text-right">
                    {data.map((link: dataBase1) => (
                         <Link to={`${link.href1}`}>
                              <li className="h-10 border-y text-green-500 hover:text-red-500">{link.title1}</li>
                         </Link>
                    ))}
               </ul>
          </li>

     )
}
function DataGreenBar2() {
     const [data, setdata] = useState([]);
     useEffect(() => {
          axios("http://localhost:7000/dataBase2").then((res) => {
               setdata(res.data)
          })
     }, [])
     return (
          <li className="digiBar hidden w-52 overflow-auto bg-white top-12 absolute z-10 ">
               <ul className="flex flex-col justify-center text-right">
                    {data.map((link: dataBase2) => (
                         <Link to={`${link.href2}`}>
                              <li className="h-10 border-y text-green-500 hover:text-red-500">{link.title2}</li>
                         </Link>
                    ))}
               </ul>
          </li>
     )
}
function DataGreenBar3() {
     const [data, setdata] = useState([]);
     useEffect(() => {
          axios("http://localhost:7000/dataBase3").then((res) => {
               setdata(res.data)
          })
     }, [])
     return (
          <li className="digiBar hidden w-52 overflow-auto bg-white top-12 absolute z-10 ">
               <ul className="flex flex-col justify-center text-right">
                    {data.map((link: dataBase3) => (
                         <Link to={`${link.href3}`}>
                              <li className="h-10 border-y text-green-500 hover:text-red-500">{link.title3}</li>
                         </Link>
                    ))}
               </ul>
          </li>
     )
}
function DataGreenBar4() {
     const [data, setdata] = useState([]);
     useEffect(() => {
          axios("http://localhost:7000/dataBase4").then((res) => {
               setdata(res.data)
          })
     }, [])
     return (
          <li className="digiBar hidden w-52 overflow-auto bg-white top-12 absolute z-10 ">
               <ul className="flex flex-col justify-center text-right">
                    {data.map((link: dataBase4) => (
                         <Link to={`${link.href4}`}>
                              <li className="h-10 border-y text-green-500 hover:text-red-500">{link.title4}</li>
                         </Link>
                    ))}
               </ul>
          </li>
     )
}
function DataGreenBar5() {
     const [data, setdata] = useState([]);
     useEffect(() => {
          axios("http://localhost:7000/dataBase5").then((res) => {
               setdata(res.data)
          })
     }, [])
     return (
          <li className="digiBar hidden w-52 overflow-auto bg-white top-12 absolute z-10 ">
               <ul className="flex flex-col justify-center text-right">
                    {data.map((link: dataBase5) => (
                         <Link to={`${link.href5}`}>
                              <li className="h-10 border-y text-green-500 hover:text-red-500">{link.title5}</li>
                         </Link>
                    ))}
               </ul>
          </li>
     )
}
function DataGreenBar6() {
     const [data, setdata] = useState([]);
     useEffect(() => {
          axios("http://localhost:7000/dataBase6").then((res) => {
               setdata(res.data)
          })
     }, [])
     return (
          <li className="digiBar hidden w-52 overflow-auto bg-white top-12 absolute z-10 ">
               <ul className="flex flex-col justify-center text-right">
                    {data.map((link: dataBase6) => (
                         <Link to={`${link.href6}`}>
                              <li className="h-10 border-y text-green-500 hover:text-red-500">{link.title6}</li>
                         </Link>
                    ))}
               </ul>
          </li>
     )
}



function A() {
     return (<>
          <ul className="digi flex justify-center">کالای خانه
               <DataGreenBar6 />
          </ul>
          <ul className="digi flex justify-center">خدمات
               <DataGreenBar5 />
          </ul>
          <ul className="digi flex justify-center">کالای اتوموبیل
               <DataGreenBar4 />
          </ul>
          <ul className="digi flex justify-center">وسایل شخصی
               <DataGreenBar3 />
          </ul>
          <ul className="digi flex justify-center">صنعتی
               <DataGreenBar2 />
          </ul>
          <ul className="digi flex justify-center">کالای دیجیتال
               <DataGreenBar1 />
          </ul>
     </>
     )
}

export default A