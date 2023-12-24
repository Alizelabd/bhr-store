import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Proudcts from "./Proudcts";
function Category() {
    const params = useParams();
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${params.categoryName}`).then((res) => res.json())
            .then((data) => setCategory(data));
    }, [params.categoryName]);
    return (
        <>
            <div className="container pt-5">
                <div className="row">
                    {category.map((cat) =>
                        <div className="col-lg-4 col-12" key={cat.id}>
                            <Proudcts proudct={cat} />
                        </div>
                    )}
                </div>
            </div >
        </>
    );
}
export default Category;