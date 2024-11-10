import { Menu } from "antd";
import { MenuItem, getItem } from "./constants";
import { useEffect, useState } from "react";
import { Skeleton } from "antd";
import { useLocation } from "react-router-dom";

const skeleton = [
  getItem("Sketon", "1", <Skeleton active avatar />),
  getItem("Sketon", "2", <Skeleton active avatar />),
  getItem("Sketon", "3", <Skeleton active avatar />),
];

const MenuNavbar = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
 
    return () => abortController.abort();
  }, []);

  return (
    <>
      <Menu
        defaultSelectedKeys={["/admin/manage-users"]}
        selectedKeys={[location.pathname === '/admin' ? '/admin/manage-users' : location.pathname ]}
        mode="inline"
        theme="dark"
        items={loading ? skeleton : menu}
      />
    </>
  );
};

export default MenuNavbar;
