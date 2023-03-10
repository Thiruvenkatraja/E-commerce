import React, { useState } from "react";
import "./Sidebar.css";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import Navbar from "./Navbar.tsx";

const Leftbar = () => {
  const { collapseSidebar } = useProSidebar();
  const [open, setOpen] = useState(false);
  const [actives, setActive] = useState(false);
  const [actives1, setActive1] = useState(false);
  const [actives2, setActive2] = useState(false);

  const toggle = () => {
    setActive(!actives);
    setActive1(false);
    setActive2(false);
  };
  const toggle1 = () => {
    setActive1(!actives1);
    setActive(false);
    setActive2(false);
  };
  const toggle2 = () => {
    setActive2(!actives2);
    setActive1(false);
    setActive(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        style={{
          height: "100vh",
          background: "#1C315E",
          borderRightStyle:'none',
          borderRightWidth:'none',
        }}
        backgroundColor="#1C315E"
        defaultCollapsed
      >
        <div className={open === true ? "main-container" : ""}>
          <h1 style={{color:'white'}}>ICON</h1>
          {open === true ? (
          <i
              className="fa-solid fa-angle-left close"
              style={{ margin: "20px", fontWeight: "bold",color:'white' }}
              onClick={() => {
                setOpen(false);
                collapseSidebar();
              }}
            ></i>
          ) : (
            ""
          )}
        </div>

        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (active === true)
                return {
                  // color: disabled ? '#f5d9ff' : '#d359ff',
                  backgroundColor: active ? "#ffffff73" : undefined,
                  fontFamily: "Righteous",
                  fontSize: "large",
                  color:'white',
                  paddingBottom: "0.2rem",
                  paddingTop: "0.2rem",
                };
            },
          }}
        >
        

          <MenuItem
            active={actives1 === true ? true : false}
            onClick={() => {
              toggle1();
            }}
            className="menu2"
            icon={<i className="fa-solid fa-chart-simple"></i>}
          >
            
            DashBoard
          </MenuItem>
          <MenuItem
            active={actives2 === true ? true : false}
            onClick={() => {
              toggle2();
            }}
            className="menu3"
            icon={<i className="fa-solid fa-chart-simple"></i>}
          >
           ProductData
          </MenuItem>
          <SubMenu
            icon={<i className="fa-solid fa-chart-simple"></i>}
            label="Charts"
            className="menu1"
            active={actives === true ? true : false}
            onClick={() => toggle()}
          >
            <MenuItem
              rootStyles={{
                fontFamily: "Righteous",
                fontSize: "large",
                color:'black',
                "&:hover": {
                  backgroundColor: "#eecef9",
                },
              }}
            >
             ProductTable
            </MenuItem>
            <MenuItem
              rootStyles={{
                fontFamily: "Righteous",
                fontSize: "large",
                color:'black',
                "&:hover": {
                  backgroundColor: "#eecef9",
                },
              }}
            >
              {" "}
              Line charts{" "}
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <Navbar collapseSidebar={collapseSidebar} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Leftbar;
