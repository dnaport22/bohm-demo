import styles from "./headerBar.module.scss";
import {Layout} from "antd";
import {Menu} from "antd";
import {useEffect, useState} from "react";

const {Header} = Layout;

const MenuItems = [
    {
        key: "1",
        label: "Home",
        link: "/"
    },
    {
        key: "2",
        label: "Lean Construction",
        link: "/leanconstruction"
    },
    {
        key: "3",
        label: "About Us",
        link: "/aboutus"
    },
    {
        key: "4",
        label: "Contact Us",
        link: "/contactus"
    }
]

export default function HeaderBar() {
    const [current, setCurrent] = useState("1");

    useEffect(() => {
        const path = window.location.pathname;
        const item = MenuItems.find(item => item.link === path);
        console.log(path, item)
        if (item) {
            setCurrent(item.key);
        }
    }, []);

    const menuClick = (e: any) => {
        location.href = MenuItems[e.key - 1].link;
    }

    return (
        <div>
            <Header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img src={"/logo.png"}/>
                </div>
                <Menu
                    theme="light"
                    className={styles.menu}
                    mode="horizontal"
                    selectedKeys={[current]}
                    onClick={menuClick}
                    items={MenuItems}
                />
            </Header>
        </div>
    )
}