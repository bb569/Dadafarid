import "./client"
import React, { useEffect, useState } from 'react'
import RedGreenBar from './redGreenbar/RedGreenBar'
import A from "./client"

function GreenBar() {
    return (
        <div className="hidden lg:flex lg:w-11/12 xl:w-full h-16  bg-green-500 z-10 left-10 top-64 xl:left-0 absolute">
            <div className=" items-center text-white cursor-pointer flex justify-between relative lg:left-10 xl:left-20">
                <RedGreenBar />
                <p className="flex">ورود به پنل کاربری</p>
               <A/>
            </div>
        </div>
    )
}

export default GreenBar