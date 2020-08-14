import React, { Fragment, useState, FormEvent } from "react";

export default function InputProduct() {
    const [prodName, setProdName] = useState<string>("");

    const onSubmitForm = async (e: FormEvent) => {
        try {
            e.preventDefault();
            const body = { name: prodName };
            const response = await fetch("http://localhost:5000/products/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            window.location.reload(false)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Input product</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control mr-1"
                    onChange={(e) => setProdName(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
}
