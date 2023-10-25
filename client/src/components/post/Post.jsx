import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="postInfo">
        <div className="divpostCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor.</span>
        <hr />
        <span className="postdate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam
        consequuntur iusto animi quisquam quo sit repellendus dolorum autem, eos
        vel porro amet sint modi itaque quos, suscipit debitis est. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Hic ipsam consequuntur
        iusto animi quisquam quo sit repellendus dolorum autem, eos vel porro
        amet sint modi itaque quos, suscipit debitis est. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Hic ipsam consequuntur iusto animi
        quisquam quo sit repellendus dolorum autem, eos vel porro amet sint modi
        itaque quos, suscipit debitis est.
      </p>
    </div>
  );
};

export default Post;
