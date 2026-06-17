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

    return (
    <div>
        <h1>Search Documents</h1>

        <input
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        />

        <input
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        />

        <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
        <option value="">Select Category</option>
        <option value="Personal">Personal</option>
        <option value="Professional">Professional</option>
        </select>

        <input
        type="text"
        placeholder="Enter tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        />
        <button onClick={handleSearch}>
        Search
</button>
<h2>Results</h2>

<table border="1">
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
        <td>{item.document_name || item.file_name || "Document"}</td>

        <td>
            <button>Preview</button>
        </td>

        <td>
            <button>Download</button>
        </td>
        </tr>
    ))}
    </tbody>
</table>
    </div>
);
}

export default Search;