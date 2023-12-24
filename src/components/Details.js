import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backIcon from '../images/back-page-icon.png';
import { useDispatch } from "react-redux";
import { addToCart } from "./storeR/slices/cartSlice";
function Details() {
    const dispatch = useDispatch();
    const urlApi = 'https://fakestoreapi.com/products';
    const [proudct, setProudct] = useState({});
    const params = useParams();
    useEffect(() => {
        fetch(`${urlApi}/${params.proudctId}`).then((res) => res.json()).then((proudctData) => setProudct(proudctData));
    }, [params.proudctId]);
    function back() {
        window.history.back();
    }
    return (
        <div className="mt-5 pt-1">
                <button className="btn btn-warning d-block mb-2 mt-2 ms-4" onClick={() => {back();}}>
                    <img style={{ width: '30px' }} src={backIcon} alt="back-icon" />
                </button>
            <h1 className="text-center text-warning">Proudct Details</h1>
            <div className="container text-center d-flex flex-lg-nowrap flex-wrap align-items-center">
                <img src={proudct.image} alt={proudct.title} style={{width: `max(200px, 150px)`}} />
                <div className="text-proudct">
                <h2>{proudct.title}</h2>
                <p className="mt-3">{proudct.description}</p>
                <div className="d-flex align-items-center justify-content-between gap-3">
                <span className="fs-4 p-1 text-bg-danger  rounded">Price: {proudct.price}$</span>
                <button className="btn btn-primary" onClick={() => {dispatch(addToCart(proudct))}} >addToCart</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Details;