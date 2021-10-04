import React from "react";
import img from "../../images/code-care.jpg";
import HomePart2 from "../HomePart2/HomePart2";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className="row home-row">
                <div className="col-md-6">
                    <img className="w-100" src={img} alt="" />
                </div>

                <div className="col-md-6">
                    <div className="mt-5">
                        <input
                            className="w-50 p-2 rounded"
                            type="email"
                            placeholder="Enter your email"
                        />{" "}
                        <br /> <br />
                        <input
                            className="w-50 p-2 rounded"
                            type="password"
                            placeholder="Enter your password"
                        />{" "}
                        <br /> <br />
                        <button className="btn btn-warning fw-bold w-50">Log In</button>{" "}
                        <br /> <br />
                        <p className="text-dark">
                            Or, Create Account{" "}
                            <a href="https://google.com">Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <HomePart2></HomePart2>
            </div>
        </div>
    );
};

export default Home;
