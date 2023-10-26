import { useEffect, useState } from "react";
import "./singlePost.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPosts] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPosts(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && <img src={post.photo} alt="" />}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.userName}`} className="link">
              <b>{post.userName}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
