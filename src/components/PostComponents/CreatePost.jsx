import { useState } from "react";

export default () => {
    const [postContent, setPostContent] = useState('');
    const [postMedia, setPostMedia] = useState(undefined);
    const [imagePreview, setImagePreview] = useState('');

    const updatePostContent = (e) => {
        console.log(e.target.value);
        setPostContent(e.target.value);
    }

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setPostMedia(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <>
            <textarea
                value={postContent}
                onChange={(e) => { updatePostContent(e) }}
            >
            </textarea>
            {
                postMedia &&
                <img
                    src={imagePreview}
                    alt="post_preview"
                    className="preview"
                />
            }

            <input
                type="file"
                onChange={(e) => { handleFileUpload(e) }}
            />
        </>
    )
};
