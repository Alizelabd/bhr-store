import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Categours() {
    const [categories, setCategorise] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategorise(json));
    }, []);
    return (
        <>
            <Container className='pt-5 pb-5'>
            <h2 className="text-center pb-3">Categories</h2>
                <Row md={2} xs={1} lg={2} className='cat-app g-2 w-100 text-center'>
                    {categories.map((cat, i) =>
                        <Col key={i}>
                            <Link to={`products/category/${cat}`} className='category-box'>
                                <span>{cat}</span>
                            </Link>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    );
}
export default Categours;