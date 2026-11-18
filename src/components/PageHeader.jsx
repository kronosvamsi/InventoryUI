import "../Pageheader.css";
function PageHeader({ title, description, buttonLabel, onButtonClick }) {
  return (
    <div className="page-header-container">
      <div className="page-title">
        <h2> {title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <button className="add-product-btn" onClick={onButtonClick}>{buttonLabel}</button>
      </div>
    </div>
  );
}

export default PageHeader;
