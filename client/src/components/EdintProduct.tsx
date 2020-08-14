import React, { Fragment, useState } from 'react'
import { Product } from './ListProducts';

interface Props {
    product: Product;
}

export default function EdintProduct({ product }: Props) {
    const [prodName, setProdName] = useState<string>(product.name);

    const updatename = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        try {
            const body = { name: prodName };
            const response = await fetch(`http://localhost:5000/products/${product.product_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            window.location.reload(false)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${product.product_id}`}
            >
                Edit
            </button>

            <div
                className="modal"
                id={`id${product.product_id}`}
                onClick={() => setProdName(product.name)}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Product</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={() => setProdName(product.name)}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={prodName}
                                onChange={e => setProdName(e.target.value)}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updatename(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => setProdName(product.name)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
