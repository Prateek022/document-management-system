import { useState } from "react";

function Search() {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");

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
        <button>Search</button>
    </div>
);
}

export default Search;