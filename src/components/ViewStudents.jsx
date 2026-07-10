import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewStudents = () => {

    const [data, changeData] = useState(
        [
            { "avatar": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", "name": "Rahul", "admissionnum": "ADM001", "class": "Grade 12" },
            { "avatar": "https://i.pinimg.com/736x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg", "name": "Ananya", "admissionnum": "ADM002", "class": "Grade 12" },
            { "avatar": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", "name": "Joseph", "admissionnum": "ADM003", "class": "Grade 12" },
            { "avatar": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", "name": "Ajith", "admissionnum": "ADM004", "class": "Grade 11" },
            { "avatar": "https://i.pinimg.com/736x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg", "name": "Arya", "admissionnum": "ADM005", "class": "Grade 11" },

            { "avatar": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", "name": "Rahul", "admissionnum": "ADM001", "class": "Grade 12" },
            { "avatar": "https://i.pinimg.com/736x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg", "name": "Ananya", "admissionnum": "ADM002", "class": "Grade 12" },
            { "avatar": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", "name": "Joseph", "admissionnum": "ADM003", "class": "Grade 12" },
            { "avatar": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", "name": "Ajith", "admissionnum": "ADM004", "class": "Grade 11" },
            { "avatar": "https://i.pinimg.com/736x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg", "name": "Arya", "admissionnum": "ADM005", "class": "Grade 11" },
            { "avatar": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", "name": "Rahul", "admissionnum": "ADM001", "class": "Grade 12" },
            { "avatar": "https://i.pinimg.com/736x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg", "name": "Ananya", "admissionnum": "ADM002", "class": "Grade 12" },
            { "avatar": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", "name": "Joseph", "admissionnum": "ADM003", "class": "Grade 12" },
            { "avatar": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", "name": "Ajith", "admissionnum": "ADM004", "class": "Grade 11" },
            { "avatar": "https://i.pinimg.com/736x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg", "name": "Arya", "admissionnum": "ADM005", "class": "Grade 11" },
              
        ]
    )

    return (
        <div
            style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}
        >

            <NavBar />

            <div className="container py-5">

                <h2
                    className="text-center fw-bold mb-5"
                    style={{ color: "#1E3A8A" }}
                >
                    Student Profiles
                </h2>


                <div className="row g-4">


                    {/* Student 1 */}
                    {data.map(
                        (value, index) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div className="card h-100 shadow">

                                        <img
                                            src= {value.avatar}
                                            className="card-img-top mx-auto mt-3"
                                            alt="Profile"
                                            style={{
                                                width: "100px",
                                                height: "100px"
                                            }}
                                        />

                                        <div className="card-body text-center">

                                            <h5 className="card-title fw-bold">
                                                {value.name}
                                            </h5>

                                            <p className="card-text">
                                                <strong>Admission No:</strong> {value.admissionnum}
                                                <br />
                                                <strong>Class:</strong> {value.class}
                                            </p>

                                            <button
                                                className="btn w-100 fw-semibold"
                                                style={{
                                                    backgroundColor: "#1E3A8A",
                                                    color: "white",
                                                    borderRadius: "8px",
                                                    border: "none"
                                                }}
                                            >
                                                View Details
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            )
                        }
                    )}

                </div>

            </div>

        </div>
    )
}

export default ViewStudents