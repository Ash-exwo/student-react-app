import React from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
    return (
        <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>

            <NavBar />

            <div className="container p-5">

                <div
                    className="row rounded-4 p-5 shadow"
                    style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #DBEAFE"
                    }}
                >

                    <div className="text-center pb-4">

                        <h2
                            className="fw-bold"
                            style={{ color: "#1E3A8A" }}
                        >
                            Welcome to Student Portal
                        </h2>

                        <p
                            className="text-muted"
                            style={{ fontSize: "16px" }}
                        >
                            Create a new student profile and manage academic records efficiently
                        </p>

                    </div>


                    <div className="col-12">

                        <div className="row g-3">


                            <div className="col-6">
                                <label className="form-label fw-semibold">
                                    Admission Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>


                            <div className="col-6">
                                <label className="form-label fw-semibold">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>


                            <div className="col-6">
                                <label className="form-label fw-semibold">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                />
                            </div>


                            <div className="col-6">
                                <label className="form-label fw-semibold">
                                    Gender
                                </label>

                                <select className="form-select">
                                    <option>Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>

                            </div>


                            <div className="col-6">
                                <label className="form-label fw-semibold">
                                    Class/Grade
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>


                            <div className="col-6">
                                <label className="form-label fw-semibold">
                                    Section
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>


                            <div className="col-6">
                                <label className="form-label fw-semibold">
                                    Parent/Guardian Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>


                            <div className="col-6">
                                <label className="form-label fw-semibold">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                />
                            </div>


                            <div className="col-6">
                                <label className="form-label fw-semibold">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                />
                            </div>


                            <div className="col-6">
                                <label className="form-label fw-semibold">
                                    Address
                                </label>

                                <textarea
                                    className="form-control"
                                    rows="1"
                                ></textarea>

                            </div>


                            <div className="col-12 mt-4 text-center">

                                <button
                                    className="btn px-5 fw-semibold"
                                    style={{
                                        backgroundColor: "#1E3A8A",
                                        color: "white",
                                        borderRadius: "10px",
                                        border: "none",
                                    }}
                                >
                                    Submit
                                </button>

                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddStudent