import { useState } from "react";
import axios from "axios";

function Search() {
    const [results, setResults] = useState([]);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const handleSearch = async () => {
        try {
            const response = await axios.post(
                "https://apis.allsoft.co/api/documentManagement/searchDocumentEntry",
                {
                    major_head: category,
                    minor_head: "",
                    from_date: fromDate,
                    to_date: toDate,
                    tags: tags
                        .split(",")
                        .filter((tag) => tag.trim() !== "")
                        .map((tag) => ({
                            tag_name: tag.trim(),
                        })),
                    uploaded_by: "",
                    start: 0,
                    length: 10,
                    filterId: "",
                    search: {
                        value: "",
                    },
                },
                {
                    headers: {
                        token: "your_generated_token",
                    },
                }
            );

            console.log(response.data);
            setResults(response.data.data || []);
        } catch (error) {
            console.error(error);
        }
    };
    const handlePreview = (file) => {
        alert("Preview feature");
    };

    const handleDownload = (file) => {
        alert("Download feature");
    };
    return (
        <div className="container mt-4">
            <div className="card p-4 shadow">
                <h1 className="mb-4">Search Documents</h1>
                <input
                    className="form-control mb-3"
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                />
                <input
                    className="form-control mb-3"
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
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

                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Enter tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />

                <button
                    className="btn btn-primary mb-4"
                    onClick={handleSearch}
                >
                    Search
                </button>

                <h2 className="mb-3">Results</h2>

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Document</th>
                            <th>Preview</th>
                            <th>Download</th>
                        </tr>
                    </thead>

                    <tbody>
                        {results.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {item.document_name ||
                                        item.file_name ||
                                        "Document"}
                                </td>

                                <td>
                                    <button
                                        className="btn btn-info btn-sm"
                                        onClick={() => handlePreview(item)}
                                    >
                                        Preview
                                    </button>
                                </td>

                                <td>
                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() => handleDownload(item)}
                                    >
                                        Download
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Search;