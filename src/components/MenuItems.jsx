import React, { useEffect, useRef, useState } from 'react'
import DropDown from './DropDown'

const MenuItems = ({ item, depthLevel }) => {
    const [dropdown, setDropDown] = useState(false)
    let ref = useRef()

    useEffect(() => {
        const handler = () => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropDown(false)
            }
        }
        document.addEventListener("mousedown", handler)
        document.addEventListener("touchstart", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
            document.removeEventListener("touchstart", handler)
        }
    }, [dropdown])

    const onMouseEnter = () => {
        setDropDown(true)
    }
    const onMouseLeave = () => {
        setDropDown(false)
    }

    return (
        <li className='menu-items' ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {
                item?.submenu ? (
                    <>
                        <button type='button' aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropDown((prev) => !prev)}>
                            {
                                depthLevel > 0 ? (
                                    <>
                                    <div className='0'>
                                            {item.title}
                                    </div>
                                    </>
                                )
                                    : (
                                        <>
                                            {item.title}
                                        </>
                                    )
                            }
                            {/* {item.title} {' '} {depthLevel > 0 ? <span>&raquo;</span> : <span className='arrow'></span>} */}
                        </button>
                        <DropDown submenu={item.submenu} dropdown={dropdown} depthLevel={depthLevel} />
                    </>
                )
                    : (
                        <a href='/#'>{item.title}</a>
                    )
            }
        </li>
    )
}

export default MenuItems