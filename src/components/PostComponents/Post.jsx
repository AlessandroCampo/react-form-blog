import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { FaRegComment, FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import './post.css';
import { formatTimestamp } from "../../utils";

export default ({ user, post }) => {

    return (
        <div className="wrapper">
            <div className="upper">
                <div className="upper-left flex gap-3">
                    <Avatar
                        sx={{ bgcolor: '#DAA520', color: 'gray', width: 48, height: 48 }}
                        alt={user?.username}
                        src="/static/images/avatar/1.jpg"
                    />
                    <div className="authors-info flex flex-col text-sm">
                        <span className="font-bold">
                            {user?.username}
                        </span>
                        <span>
                            {formatTimestamp(post?.createdAt)}
                        </span>
                    </div>
                </div>
            </div>
            <p className="px-6">
                {post?.content}
            </p>
            {
                post.image &&
                <figure
                    className="w-full h-[150px]"
                >
                    <img
                        alt="post_preview"
                        className="preview"
                    />
                </figure>

            }
            <div className="lower">
                <div className="icons-container">
                    <div className="iconandcounter">
                        <FaRegHeart
                            className="icon-common"
                        />
                        <span className="counter">
                            {post?.likes.length || 0}
                        </span>
                    </div>
                    <div className="iconandcounter">
                        <FaRegComment
                            className="icon-common"
                        />
                        <span className="counter">
                            {post?.comments.length || 0}
                        </span>
                    </div>
                    <div className="iconandcounter">
                        <FaRetweet
                            className="icon-common"
                        />
                        <span className="counter">
                            {post?.comments.length || 0}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};