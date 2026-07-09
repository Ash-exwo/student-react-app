import React from 'react'
import NavBar from './NavBar'

const ViewStudents = () => {
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
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 shadow">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                className="card-img-top mx-auto mt-3"
                                alt="Profile"
                                style={{
                                    width: "100px",
                                    height: "100px"
                                }}
                            />

                            <div className="card-body text-center">

                                <h5 className="card-title fw-bold">
                                    Arjun Kumar
                                </h5>

                                <p className="card-text">
                                    <strong>Admission No:</strong> ADM001
                                    <br />
                                    <strong>Class:</strong> Grade 10
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



                    {/* Student 2 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 shadow">

                            <img
                                src="https://i.pinimg.com/736x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg"
                                className="card-img-top mx-auto mt-3"
                                alt="Profile"
                                style={{ width: "100px", height: "100px" }}
                            />

                            <div className="card-body text-center">

                                <h5 className="card-title fw-bold">
                                    Ananya Sharma
                                </h5>

                                <p className="card-text">
                                    <strong>Admission No:</strong> ADM002
                                    <br />
                                    <strong>Class:</strong> Grade 9
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



                    {/* Student 3 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 shadow">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                className="card-img-top mx-auto mt-3"
                                alt="Profile"
                                style={{ width: "100px", height: "100px" }}
                            />

                            <div className="card-body text-center">

                                <h5 className="card-title fw-bold">
                                    Rahul Raj
                                </h5>

                                <p className="card-text">
                                    <strong>Admission No:</strong> ADM003
                                    <br />
                                    <strong>Class:</strong> Grade 12
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



                    {/* Student 4 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 shadow">

                            <img
                                src="https://i.pinimg.com/736x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg"
                                className="card-img-top mx-auto mt-3"
                                alt="Profile"
                                style={{ width: "100px", height: "100px" }}
                            />

                            <div className="card-body text-center">

                                <h5 className="card-title fw-bold">
                                    Meera Nair
                                </h5>

                                <p className="card-text">
                                    <strong>Admission No:</strong> ADM004
                                    <br />
                                    <strong>Class:</strong> Grade 8
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

                    {/* Student 5 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 shadow">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                className="card-img-top mx-auto mt-3"
                                alt="Profile"
                                style={{ width: "100px", height: "100px" }}
                            />

                            <div className="card-body text-center">

                                <h5 className="card-title fw-bold">
                                    Adithya Menon
                                </h5>

                                <p className="card-text">
                                    <strong>Admission No:</strong> ADM005
                                    <br />
                                    <strong>Class:</strong> Grade 11
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


                    {/* Student 6 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 shadow">

                            <img
                                src="https://i.pinimg.com/736x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg"
                                className="card-img-top mx-auto mt-3"
                                alt="Profile"
                                style={{ width: "100px", height: "100px" }}
                            />

                            <div className="card-body text-center">

                                <h5 className="card-title fw-bold">
                                    Sneha Joseph
                                </h5>

                                <p className="card-text">
                                    <strong>Admission No:</strong> ADM006
                                    <br />
                                    <strong>Class:</strong> Grade 10
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


                    {/* Student 7 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 shadow">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                className="card-img-top mx-auto mt-3"
                                alt="Profile"
                                style={{ width: "100px", height: "100px" }}
                            />

                            <div className="card-body text-center">

                                <h5 className="card-title fw-bold">
                                    Vishnu Prasad
                                </h5>

                                <p className="card-text">
                                    <strong>Admission No:</strong> ADM007
                                    <br />
                                    <strong>Class:</strong> Grade 9
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


                    {/* Student 8 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 shadow">

                            <img
                                src="https://i.pinimg.com/736x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg"
                                className="card-img-top mx-auto mt-3"
                                alt="Profile"
                                style={{ width: "100px", height: "100px" }}
                            />

                            <div className="card-body text-center">

                                <h5 className="card-title fw-bold">
                                    Diya Thomas
                                </h5>

                                <p className="card-text">
                                    <strong>Admission No:</strong> ADM008
                                    <br />
                                    <strong>Class:</strong> Grade 12
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


                    {/* Student 9 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 shadow">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                className="card-img-top mx-auto mt-3"
                                alt="Profile"
                                style={{ width: "100px", height: "100px" }}
                            />

                            <div className="card-body text-center">

                                <h5 className="card-title fw-bold">
                                    Nikhil Das
                                </h5>

                                <p className="card-text">
                                    <strong>Admission No:</strong> ADM009
                                    <br />
                                    <strong>Class:</strong> Grade 11
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


                    {/* Student 10 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 shadow">

                            <img
                                src="https://i.pinimg.com/736x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg"
                                className="card-img-top mx-auto mt-3"
                                alt="Profile"
                                style={{ width: "100px", height: "100px" }}
                            />

                            <div className="card-body text-center">

                                <h5 className="card-title fw-bold">
                                    Aisha Khan
                                </h5>

                                <p className="card-text">
                                    <strong>Admission No:</strong> ADM010
                                    <br />
                                    <strong>Class:</strong> Grade 10
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

                </div>

            </div>

        </div>
    )
}

export default ViewStudents