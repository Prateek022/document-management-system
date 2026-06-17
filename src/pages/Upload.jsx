import { useState } from "react";
function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [tags, setTags] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [remarks, setRemarks] = useState("");
    return (
    <div>
    <input
            type="text"
            placeholder="Enter tags separated by commas"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
/>  
    <p>Tags: {tags}</p>
    <textarea
    placeholder="Enter Remarks"
    value={remarks}
    onChange={(e) => setRemarks(e.target.value)}
/>
    <h1>Upload Documents</h1>

    <input type="date" />

    <br />
    <br />

    <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
>
        <option value="">Select Category</option>
        <option value="Personal">Personal</option>
        <option value="Professional">Professional</option>
</select>
<select
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