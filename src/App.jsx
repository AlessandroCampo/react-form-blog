import { useState } from "react";
import CreatePost from "./components/PostComponents/CreatePost"
import Post from "./components/PostComponents/Post";

const app = () => {
  const [postList, setPostList] = useState([]);
  const user = {
    username: 'Aleks'
  }

  return (
    <>
      <div className="home-container">
        <CreatePost
          user={user}
          setPostList={setPostList}
        />
        <div className="posts-container">
          {
            postList.map((p, i) => {
              return <Post
                user={user}
                key={p.id || `post-${i}`}
                post={p}
                setPostList={setPostList}

              />
            })
          }
        </div>

      </div>

    </>
  )
}

export default app;