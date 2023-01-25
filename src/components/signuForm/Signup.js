import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signup() {
    const [Data, setData] = useState({})
    const navigate = useNavigate()

    const handlechange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value });
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("https://hotelbookingapp-api.herokuapp.com/api/auth/register", Data).then((res) => {
            console.log(res.status, "=-=-=-=-=-=-=-");
            if (res.status === 200) {
                toast.success("Account created Successfully")
                navigate("/login")
            }
        })
    }


    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Sign up
                                            </p>

                                            <form className="mx-1 mx-md-4" onSubmit={handlesubmit} >
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            name="username"
                                                            id="form3Example1c"
                                                            required
                                                            className="form-control"
                                                            onChange={handlechange}
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="form3Example1c"
                                                        >
                                                            Your Name
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            required
                                                            className="form-control"
                                                            onChange={handlechange}

                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="form3Example3c"
                                                        >
                                                            Your Email
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            name="password"
                                                            onChange={handlechange}

                                                            required
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="form3Example4c"
                                                        >
                                                            Password
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input
                                                        className="form-check-input me-2"
                                                        type="checkbox"
                                                        required
                                                        id="form2Example3c"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="form2Example3"
                                                    >
                                                        I agree all statements in
                                                        <Link to="#!">Terms of service</Link>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-outline-dark btn-lg"
                                                    >
                                                        Register
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Signup
