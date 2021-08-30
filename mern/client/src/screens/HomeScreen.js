import React, { useEffect, useState } from 'react'
import data from '../data'
import Product from '../components/Product'
import axios from 'axios';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';


function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {loading ? <LoadingBox></LoadingBox>
                :
                error ? <MessageBox>{error}</MessageBox>
                    : (<div className="row center">
                        {data.products.map((product) => (
                            <Product key={product._id} product={product}></Product>
                        ))}
                    </div>

                    )}
        </div>
    )
}

export default HomeScreen
