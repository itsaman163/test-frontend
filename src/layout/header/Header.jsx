import React, { Fragment, useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

// import "./header.css";

const Header = () => {

  const [current, setCurrent] = useState(window.location.pathname);
  const navigate = useNavigate();
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);


  const onClick = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };

  const items = [
    {
      key: "/",
      label: "Admin",
    },
    {
      key: "/customer_registration",
      label: "Customer",
    },
    {
      key: "/login",
      label: "Login",
    },
    {
      key: "/dashboard",
      label: "Dashboard",
    },
  ];




  return (
      <Fragment>
        <div className="header">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            triggerSubMenuAction={"click"}
          />
        </div>
      </Fragment>
  );
};

export default Header;
