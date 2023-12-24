import { useEffect } from "react";
import Proudcts from "./Proudcts";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProudcts, selectProducts, selectLoading } from "./storeR/slices/proudcts-slices";
import Loder from "../Layout/Loder";
function ProudctList() {
    // const proudct = useSelector((state) => state.proudct.products);
    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProudcts());
    }, [dispatch]);
    if (loading) {
        return <Loder />;
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    {products.map((proudctEl) =>
                        <div className="col-lg-4 col-12" key={proudctEl.id}>
                            <Proudcts proudct={proudctEl} />
                        </div>
                    )}
                </div>
            </div >
        </>
    );
}
export default ProudctList;