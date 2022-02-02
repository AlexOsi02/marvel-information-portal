import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from "react-router-dom";


const Page404 = () => {
  return(
      <div>
          <ErrorMessage/>
          <p style={{textAlign: "center", marginTop: "20px", fontSize: "24px", }}>Page doesn't exist</p>
          <Link style={{display: "block", textAlign: "center", marginTop: "25px", fontSize: "24px", fontWeight: "700"}} to="/">Back to main page</Link>
      </div>
  )
}

export default Page404;