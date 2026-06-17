import { useState } from "react";
import axios from "axios";

function Login() {
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");
    const [otp, setOtp] = useState("");
    const [showOtpField, setShowOtpField] = useState(false);

    const handleGenerateOTP = async () => {
    try {
        const response = await axios.post(
        "https://apis.allsoft.co/api/documentManagement/generateOTP",
        {
            mobile_number: mobileNumber,
        }
        );

        setMessage(response.data.data);
        setShowOtpField(true);
    } catch (error) {
        console.error(error);
    }
    };

    const handleVerifyOTP = async () => {
    try {
        const response = await axios.post(
        "https://apis.allsoft.co/api/documentManagement/validateOTP",
        {
            mobile_number: mobileNumber,
            otp: otp,
        }
        );

        console.log("Verify OTP Response:", response.data);
        setMessage(response.data.data || response.data.message);
    } catch (error) {
        console.error(error);
    }
    };
    return (
        <div className="container mt-5">
        <div className="card p-4 shadow">
        <h1 className="mb-3">Document Management System</h1>
        <p className="text-muted">Login using OTP</p>
        <input
        className="form-control mb-3"
        type="text"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
/>

        <button 
        className="btn btn-primary mb-3"
        onClick={handleGenerateOTP}>
        Generate OTP
        </button>

        <p className="text-danger mt-2">{message}</p>   

        {showOtpField && (
        <input
            className="form-control mb-3"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
        />
        )}

            {showOtpField && (
        <button 
        className="btn btn-success"
        onClick={handleVerifyOTP}>
            Verify OTP
        </button>
        )}
    </div>
    </div>
    );
}

export default Login;