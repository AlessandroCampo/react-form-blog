import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { IoMdImages } from "react-icons/io";


import './post.css';

export default ({ user }) => {
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
        <div className="wrapper">
            <div className="upper">
                <Avatar
                    sx={{ bgcolor: '#DAA520', color: 'gray', width: 48, height: 48 }}
                    alt={user?.username}
                    src="/static/images/avatar/1.jpg"

                />
                <textarea
                    value={postContent}
                    placeholder="What's on your mind?"
                    className="h-[100px]"
                    onChange={(e) => { updatePostContent(e) }}
                >
                </textarea>
            </div>
            {
                postMedia &&
                <figure
                    className="w-full h-[150px]"
                >
                    <img
                        src={imagePreview}
                        alt="post_preview"
                        className="preview"
                    />
                </figure>

            }
            <div className="lower">
                <label
                    htmlFor="postPic"

                >
                    <IoMdImages
                        className="icon-common"
                    />
                </label>

                <input
                    type="file"
                    id="postPic"
                    onChange={(e) => { handleFileUpload(e) }}
                    className="hidden"
                    accept=".jpg, .png, .jpeg"
                />
                <button>Publish</button>
            </div>
        </div>
    )
};
