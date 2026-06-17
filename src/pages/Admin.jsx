import { useState } from "react";

function Admin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
    <div>
        <h1>Create User</h1>

        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button>Create User</button>
    </div>
    );
}

export default Admin;