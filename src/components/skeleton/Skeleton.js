import "./skeleton.scss";

const Skeleton = () => {
  return(
      <div className="skeleton">
        <h2 className="skeleton__title">Please select a character to see information</h2>
        <div className="skeleton__header">
          <div className="pulse skeleton__logo"/>
          <div className="pulse skeleton__field_mini"/>
        </div>
        <div className="pulse skeleton__field"/>
        <div className="pulse skeleton__field"/>
        <div className="pulse skeleton__field"/>
      </div>
  )
}

export default Skeleton;