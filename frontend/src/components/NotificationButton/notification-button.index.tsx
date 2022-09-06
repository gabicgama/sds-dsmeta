import icon from "../../assets/img/notification-icon.svg"
import './notification-button.styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="notification"></img>
        </div>
    )
}

export default NotificationButton
