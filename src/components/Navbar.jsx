import { menuItem } from "../menuItemData";
import MenuItems from "./MenuItems";

const Navbar = () => {
    const depthLevel = 0;
    return (
        <nav className="main-nav">
            <ul className="menus">
                {menuItem?.map((menu, index) => {
                    return (
                        <MenuItems item={menu} key={index} depthLevel={depthLevel} />
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar