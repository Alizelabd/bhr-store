import { useSelector } from 'react-redux';
import cartimg from '../images/cart.png';
import { Link } from 'react-router-dom';
function Sllaa() {
    const cart = useSelector(state => state.cart);
    return (
        <>
            <div className="">
                <Link className="btn btn-warning"><img style={{ width: '25px' }} src={cartimg} alt='cart' /></Link>
                <span className='notic'>{cart.length}</span>
            </div>
        </>
    );
}
export default Sllaa;