import { Link } from "react-router-dom";

const HeaderRight = () => {
  return (
  <div className="header-right">
      <Link to="/Student" className="header-right-link">
      <i className="bi bi-person"></i>
        <span>الطلاب</span>
      </Link>
      <Link to="Company" className="header-right-link">
      <i className="bi bi-building"></i>
        <span>الشركات</span>
        
      </Link>
    </div>
  );
};

export default HeaderRight;