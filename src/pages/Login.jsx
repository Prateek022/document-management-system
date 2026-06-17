import { useState } from "react";

function Login() {
const [mobileNumber, setMobileNumber] = useState("");

const handleGenerateOTP = () => {
    console.log("Generate OTP clicked");
};    
return (
    <div>
        <h1>Document Management System</h1>
        <p>Login using OTP</p>

    <input
        type="text"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)} />
    <button onClick={handleGenerateOTP}>
    Generate OTP
</button>
    <p>Mobile Number: {mobileNumber}</p>
    </div>
    
);
}

export default Login;