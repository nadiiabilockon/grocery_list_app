import React, { Fragment, useEffect, useState } from "react";

interface Product {
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
                    {productsList.map((todo) => (
                        <tr key={todo.product_id}>
                            <td>{todo.name}</td>
                            <td></td>
                            <td>
                                <button
                                    className="btn btn-danger"
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
