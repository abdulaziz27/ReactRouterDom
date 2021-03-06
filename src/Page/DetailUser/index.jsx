import React from "react";
import { config } from '../../config'
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"


const DetailUser = (props) => {
    let { id } = useParams();
    let [user, setUser] = React.useState([]);
    React.useEffect(() => {
      getUser();
    }, [id]);
  
    const getUser = async () => {
      try {
        let response = await Axios.get(`${config.api_host}/users/${id}`);
        setUser(response.data.data);
      } catch {
        console.log("error");
      }
    };
  
    const NextHandle = () => {
      let nextId = parseInt(id, 10) + 1;
      props.history.push(`/DetailUser/${nextId}`);
    };
    const PrevHandle = () => {
      let prevId = parseInt(id, 10) - 1;
      props.history.push(`/DetailUser/${prevId}`);
    };
    return (
      <React.Fragment>
        <div className="container">
          <img className="rounded-circle" src={user.avatar} alt="" />
          <h3>
            {user.first_name} {user.last_name}{" "}
          </h3>
          <h4>{user.email}</h4>
          <Link to="/">
            <button>Back</button>
          </Link>
          <div>
            <button disabled={id < 2} onClick={PrevHandle}>
              Previous
            </button>
            <button onClick={NextHandle}>Next</button>
          </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default DetailUser;