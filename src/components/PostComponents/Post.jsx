import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { FaRegComment, FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import './post.css';

export default ({ user }) => {

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
                            Yesterday
                        </span>
                    </div>
                </div>
            </div>
            <p className="px-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus error laudantium reprehenderit, eum voluptates quos blanditiis soluta eveniet debitis repellat quo ut mollitia perspiciatis tempore fugiat, explicabo distinctio pariatur incidunt itaque necessitatibus quae asperiores voluptatibus esse? Reprehenderit maiores minima sint delectus dolorum quos aliquam quibusdam vero dignissimos. Magni quo aliquid reprehenderit? Vel sunt ex, adipisci iste laborum eos reiciendis atque quod? Magni iusto error explicabo ratione libero reiciendis, eum molestiae recusandae? Neque earum similique iure? Adipisci est provident tenetur ullam alias enim neque impedit harum eos eaque. Expedita, tempore placeat.
            </p>
            {

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
                            3
                        </span>
                    </div>
                    <div className="iconandcounter">
                        <FaRegComment
                            className="icon-common"
                        />
                        <span className="counter">
                            3
                        </span>
                    </div>
                    <div className="iconandcounter">
                        <FaRetweet
                            className="icon-common"
                        />
                        <span className="counter">
                            3
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};