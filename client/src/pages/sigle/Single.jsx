import "./single.css"
import SideBar from "../../components/sidebar/Sidebar"
import SinglePost from "../../singlePost/SinglePost"

const Single = () => {
  return (
    <div className="single">
       <SinglePost/>
        <SideBar />
    </div>
  )
}

export default Single