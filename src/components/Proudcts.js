import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./storeR/slices/cartSlice";
function Proudcts(props) {
    const dispatch = useDispatch();
    const { proudct } = props;
    return(
    <div className="card text-center">
        <img src={proudct.image} className="card-img-top" alt={proudct.title} />
            <div className="card-body">
                <h5 className="card-title">{proudct.title}</h5>
                {/* <p className="card-text">{proudct.description}</p> */}
                <Link className="btn btn-success mb-2 w-100" to={`/product/${proudct.id}`}>Details</Link>
                <button  className="btn btn-primary w-100" onClick={() => {dispatch(addToCart(proudct))}} >addToCart</button>
            </div>
    </div>
    );
}
export default Proudcts;