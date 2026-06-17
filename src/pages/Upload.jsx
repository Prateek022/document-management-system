import { useState } from "react";
import axios from "axios";

function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [tags, setTags] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [remarks, setRemarks] = useState("");
    const [documentDate, setDocumentDate] = useState("");

    const handleUpload = async () => {
    try {
        const formData = new FormData();

        formData.append("file", selectedFile);

        const data = {
        major_head: category,
        minor_head: subCategory,
        document_date: documentDate,
        document_remarks: remarks,
        tags: tags.split(",").map((tag) => ({
            tag_name: tag.trim(),
        })),
        user_id: "prateek",
    };

    formData.append("data", JSON.stringify(data));

    const response = await axios.post(
        "https://apis.allsoft.co/api/documentManagement/saveDocumentEntry",
        formData,
        {
        headers: {
            token: "your_generated_token",
        },
        }
    );

    console.log(response.data);
    } catch (error) {
    console.error(error);
    }
};

return (
    <div className="container mt-4">
    <div className="card p-4 shadow">
        <h1 className="mb-4">Upload Documents</h1>

        <input
        className="form-control mb-3"
        type="date"
        value={documentDate}
        onChange={(e) => setDocumentDate(e.target.value)}
        />

        <select
        className="form-select mb-3"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
        <option value="">Select Category</option>
        <option value="Personal">Personal</option>
        <option value="Professional">Professional</option>
        </select>

        <select
    className="form-select mb-3"
    value={subCategory}
    onChange={(e) => setSubCategory(e.target.value)}
        >
    <option value="">Select Option</option>

    {category === "Personal" && (
            <>
        <option value="John">John</option>
        <option value="Tom">Tom</option>
        <option value="Emily">Emily</option>
            </>
    )}

    {category === "Professional" && (
            <>
        <option value="Accounts">Accounts</option>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
            </>
    )}
        </select>

        <input
        className="form-control mb-3"
        type="text"
        placeholder="Enter tags separated by commas"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        />

        <textarea
    className="form-control mb-3"
        placeholder="Enter Remarks"
        value={remarks}
        onChange={(e) => setRemarks(e.target.value)}
        />

        <input
        className="form-control mb-3"
        type="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        {selectedFile && (
        <p className="mb-3">
            Selected File: {selectedFile.name}
        </p>
        )}

        <button
        className="btn btn-success"
        onClick={handleUpload}
        >
        Upload Document
        </button>
    </div>
    </div>
);
}

export default Upload;