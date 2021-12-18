import React, {Fragment, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {Row, Col} from 'reactstrap'
const listItems = [{
    codice: 1,
    icon: <FontAwesomeIcon icon={faCoffee} />,
    label: "Home",
    component: 'home',
}, {
    codice: 2,
    icon: <FontAwesomeIcon icon={faCoffee} />,
    label: "Campo descrittivo per giovani marmotte",
    component: 'home',
}]
const Sidebar = ({isOpen, width}) => {
    const [activeItem, setActiveItem] = useState(listItems[0])
    const getClass = () => {
        if (width > 700) {
            return "sidebar absolute"
        } else {
            return "sidebar relative"
        }
    }
    const checkSelected = (item) => {
        return item.codice === activeItem.codice
    }
    return <div id="" style={{marginTop: '80px'}}
                className={getClass()}>
        <div className="menu">
            {listItems.map((value, index) => (
                <div onClick={() => setActiveItem(value)} className={checkSelected(value) ? "containerItems active" : "containerItems"}>
                    <div className="itemList">{value.icon}</div>
                    <span className="itemList">{value.label}</span>
                </div>
            ))}
        </div>
    </div>
}
export default Sidebar