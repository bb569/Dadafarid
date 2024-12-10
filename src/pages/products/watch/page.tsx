import Container from '../../../components/container/container'

import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { getProducts29 } from '../../../services/api';
import { Products } from '../../../servers/Server';
import Productitem from './Productitem';

function Store29() {
    const [products, setproducts] = useState<Products[]>([]);
    useEffect(() => {
        getProducts29().then((result) => {
            setproducts(result)

        })
    }, []);

    return (
        <div>
            <Container>

                <div className='grid grid-cols-5 gap-4' >
                    {products.map((item) =>
                    (
                        <Link key={item.id} to={`/product/${item.id}`}>
                            <Productitem {...item} />
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    )

}

export default Store29