import React from 'react'
import Enamad from './enamad'

function Footer() {
    return (
        <div dir="rtl" className="h-96  bg-neutral-200">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-11/12 sm:relative right-5 top-20" dir="rtl">
                <li className="text-2xl h-44 ">با دادآفرید
                    <ul className="mt-6">
                        <li
                            className="text-lg text-neutral-600 border-neutral-300 border-b duration-500 cursor-pointer hover:text-red-600">
                            درباره ما</li>
                        <li
                            className="text-lg text-neutral-600 border-neutral-300 border-b duration-500 cursor-pointer hover:text-red-600">
                            تماس با ما</li>
                        <li
                            className="text-lg text-neutral-600 border-neutral-300 border-b duration-500 cursor-pointer hover:text-red-600">
                            همکاری با ما</li>
                    </ul>
                </li>
                <li className="text-2xl h-44 ">خدمات پشتیبانی
                    <ul className="mt-6">
                        <li
                            className="text-lg text-neutral-600 border-neutral-300 border-b duration-500 cursor-pointer hover:text-red-600">
                            پشتیبانی</li>
                        <li
                            className="text-lg text-neutral-600 border-neutral-300 border-b duration-500 cursor-pointer hover:text-red-600">
                            تست محصولات</li>
                        <li
                            className="text-lg text-neutral-600 border-neutral-300 border-b duration-500 cursor-pointer hover:text-red-600">
                            سوالات متداول</li>
                    </ul>
                </li>
                <li className="text-2xl h-44 ">نماد اعتماد شما<Enamad/></li>
            </ul>
        </div>
    )
}

export default Footer