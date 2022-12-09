import { ThreeCircles } from "react-loader-spinner";
import './LoadingBtn.scss'
const LoadingBtn = () => {
  return (
    <div>
        <ThreeCircles
            height="25"
            width="25"
            color="#4fa94d"
            ariaLabel="line-wave"
            wrapperStyle={{}}
            wrapperClass="lineWrapper"
            visible={true}
            />
    </div>
  )
}

export default LoadingBtn