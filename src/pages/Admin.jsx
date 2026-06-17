import { useState } from "react";


function Admin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow">
                <h1 className="mb-4">Create User</h1>

                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className="form-control mb-3"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-primary">
                    Create User
                </button>
            </div>
        </div>
    );
}

export default Admin;