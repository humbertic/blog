import "./singlePost.css"

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/4995445/pexels-photo-4995445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" 
        className="singlePostImg"
        />
        <h1 className="singlePostTitle">Lorem ipsum
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author:<b>Safak</b></span>
          <span className="singlePostDate">Date:1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero placeat accusantium, dolor laborum veritatis fuga fugit quae, labore magnam molestias accusamus et inventore perspiciatis dicta ratione ipsam ea, est praesentium earum modi nobis perferendis. Reiciendis dignissimos mollitia eos enim. Esse deserunt laborum quam excepturi doloribus laboriosam, ipsa nobis itaque! Incidunt blanditiis quam suscipit tempore delectus deleniti perferendis a neque aperiam!Esse deserunt laborum quam excepturi doloribus laboriosam, ipsa nobis itaque! Incidunt blanditiis quam suscipit tempore delectus deleniti perferendis a neque aperiamEsse deserunt laborum quam excepturi doloribus laboriosam, ipsa nobis itaque! Incidunt blanditiis quam suscipit tempore delectus deleniti perferendis a neque aperiam</p>
      </div>
      </div>
  )
}

export default SinglePost