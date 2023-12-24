import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import { removeFromCart, clear } from './storeR/slices/cartSlice';
function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const cartP =  cart.reduce((acc, e) => {
        acc += e.price * e.quantity;
        return acc;
    },0);
    return (
        <div className='mt-5 pt-3 text-center'>
            <div className='mb-1 text-center text-primary fw-bold d-block fs-4'>Total: {cartP.toFixed(2)}$</div>
            <div className='text-center m-2'><button onClick={()=> dispatch(clear()) } className='btn btn-danger'>Remove All Proudcts</button></div>
            <Table striped draggable bordered hover  responsive="md">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Img</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((el) =>
                        <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.title}</td>
                            <td><Image style={{ width: '100px', margin: 'auto' }} src={el.image} thumbnail /></td>
                            <td>{el.price}$</td>
                            <td>{el.quantity}</td>
                            <td><button onClick={() => { dispatch(removeFromCart(el)) }} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;