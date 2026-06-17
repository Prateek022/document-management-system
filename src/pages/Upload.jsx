import { useState } from "react";
function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);
    return (
    <div>
    <h1>Upload Documents</h1>

    <input type="date" />

    <br />
    <br />

    <select>
        <option>Select Category</option>
        <option>Invoice</option>
        <option>Contract</option>
        <option>Report</option>
    </select>
    <br />
    <br />

        <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <p>{selectedFile?.name}</p>
    </div>
);
}

export default Upload;