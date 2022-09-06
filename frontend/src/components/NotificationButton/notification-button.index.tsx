import './notification-button.styles.css';

import icon from '../../assets/img/notification-icon.svg';

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="notification"></img>
        </div>
    )
}

export default NotificationButton
