import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export interface DataBase {
    title: string
    href: string
    id: number
}
function Menu() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios("http://localhost:7000/dataBase").then((result) => {
            setdata(result.data)
        })
    }, []);
    console.log(data);

    return (
        <>
            Menu

            {data.map((dbs: DataBase) => (
                <Link to={dbs.href}>
                    <li className="h-10 border-y text-slate-500 hover:text-red-500">{dbs.title}</li>
                </Link>
            ))
            }
        </>
    )
}

export default Menu