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

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    };

    return (
    <div>
        <h1>Document Management System</h1>
        <p>Login using OTP</p>

        <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
/>

        <button onClick={handleGenerateOTP}>
        Generate OTP
        </button>

        <p>{message}</p>

        {showOtpField && (
        <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
        />
        )}

            {showOtpField && (
        <button onClick={handleVerifyOTP}>
            Verify OTP
        </button>
        )}
    </div>
    );
}

export default Login;