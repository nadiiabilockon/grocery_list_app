import React, { Fragment, useEffect, useState } from "react";
import EdintProduct from "./EdintProduct";

export interface Product {
    name: string;
    product_id: string;
}

export default function ListProducts() {
    const [productsList, setProductsList] = useState<Product[]>([]);

    const getProducts = async () => {
        try {
            const response = await fetch("http://localhost:5000/products/");
            const data = await response.json();
            setProductsList(data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProduct = async (id: string) => {
        const deleteProduct = await fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });
        
        setProductsList(productsList.filter(prod => prod.product_id != id))
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList.map((prod) => (
                        <tr key={prod.product_id}>
                            <td>{prod.name}</td>
                            <td><EdintProduct product={prod}/></td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteProduct(prod.product_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}
