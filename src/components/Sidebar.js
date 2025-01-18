import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    return (
        <div className="sidebar">
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <div
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                        aria-current="page"
                        onClick={() => handleButtonClick('/')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi me-2" viewBox="0 0 16 16">
                            <path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z" fill="white"></path>
                        </svg>
                        Home
                    </div>
                </li>
                <li className="nav-item">
                    <div
                        className={`nav-link ${location.pathname === '/ConfigWidget' ? 'active' : ''}`}
                        aria-current="page"
                        onClick={() => handleButtonClick('/ConfigWidget')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi me-2" viewBox="0 0 16 16">
                            <path d="M6 1H1L1 15H6V1ZM15 1H10V6H15V1ZM15 10V15H10V10H15ZM0 1C0 0.447715 0.447715 0 1 0H6C6.55228 0 7 0.447715 7 1V15C7 15.5523 6.55228 16 6 16H1C0.447715 16 0 15.5523 0 15V1ZM9 1C9 0.447715 9.44772 0 10 0H15C15.5523 0 16 0.447715 16 1V6C16 6.55228 15.5523 7 15 7H10C9.44772 7 9 6.55228 9 6V1ZM10 9C9.44772 9 9 9.44772 9 10V15C9 15.5523 9.44772 16 10 16H15C15.5523 16 16 15.5523 16 15V10C16 9.44772 15.5523 9 15 9H10Z" fill="black" />
                        </svg>
                        widget
                    </div>
                </li>
                <li className="nav-item">
                    <div
                        className={`nav-link ${location.pathname === '/reservation' ? 'active' : ''}`}
                        aria-current="page"
                        onClick={() => handleButtonClick('/reservation')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi me-2" viewBox="0 0 16 16">
                            <path d="M2.97071 1.34921C3.16069 1.12756 3.43804 1 3.72997 1H12.27C12.562 1 12.8393 1.12756 13.0293 1.34921L15.6389 4.39374C15.8719 4.6656 16 5.01186 16 5.36992V5.625C16 6.93668 14.9367 8 13.625 8C12.8629 8 12.1846 7.64102 11.75 7.08291C11.3154 7.64102 10.6371 8 9.875 8C9.11287 8 8.43458 7.64102 8 7.08291C7.56542 7.64102 6.88714 8 6.125 8C5.36286 8 4.68458 7.64102 4.25 7.08291C3.81542 7.64102 3.13713 8 2.375 8C1.06332 8 0 6.93668 0 5.625V5.36992C0 5.01186 0.128088 4.6656 0.361115 4.39374L2.97071 1.34921ZM4.75 5.625C4.75 6.38439 5.36561 7 6.125 7C6.88439 7 7.5 6.38439 7.5 5.625C7.5 5.34886 7.72386 5.125 8 5.125C8.27614 5.125 8.5 5.34886 8.5 5.625C8.5 6.38439 9.11561 7 9.875 7C10.6344 7 11.25 6.38439 11.25 5.625C11.25 5.34886 11.4739 5.125 11.75 5.125C12.0261 5.125 12.25 5.34886 12.25 5.625C12.25 6.38439 12.8656 7 13.625 7C14.3844 7 15 6.38439 15 5.625V5.36992C15 5.25057 14.9573 5.13515 14.8796 5.04453L12.27 2H3.72997L1.12037 5.04453C1.0427 5.13515 1 5.25057 1 5.36992V5.625C1 6.38439 1.61561 7 2.375 7C3.13439 7 3.75 6.38439 3.75 5.625C3.75 5.34886 3.97386 5.125 4.25 5.125C4.52614 5.125 4.75 5.34886 4.75 5.625ZM1.5 8.5C1.77614 8.5 2 8.72386 2 9V15H3V10C3 9.44772 3.44772 9 4 9H7C7.55228 9 8 9.44772 8 10V15H14V9C14 8.72386 14.2239 8.5 14.5 8.5C14.7761 8.5 15 8.72386 15 9V15H15.5C15.7761 15 16 15.2239 16 15.5C16 15.7761 15.7761 16 15.5 16H0.5C0.223858 16 0 15.7761 0 15.5C0 15.2239 0.223858 15 0.5 15H1V9C1 8.72386 1.22386 8.5 1.5 8.5ZM4 15H7V10H4V15ZM9 10C9 9.44772 9.44771 9 10 9H12C12.5523 9 13 9.44772 13 10V13C13 13.5523 12.5523 14 12 14H10C9.44771 14 9 13.5523 9 13V10ZM12 10H10V13H12V10Z" fill="black" />
                        </svg>
                        Réservation
                    </div>
                </li>
                <li className="nav-item">
                    <div
                        className={`nav-link ${location.pathname === '/profil' ? 'active' : ''}`}
                        aria-current="page"
                        onClick={() => handleButtonClick('/profil')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi me-2" viewBox="0 0 16 16">
                            <path d="M6 6C7.65685 6 9 4.65685 9 3C9 1.34315 7.65685 0 6 0C4.34315 0 3 1.34315 3 3C3 4.65685 4.34315 6 6 6ZM8 3C8 4.10457 7.10457 5 6 5C4.89543 5 4 4.10457 4 3C4 1.89543 4.89543 1 6 1C7.10457 1 8 1.89543 8 3Z" fill="white" />
                            <path d="M12 11C12 12 11 12 11 12H1C1 12 0 12 0 11C0 10 1 7 6 7C11 7 12 10 12 11ZM11 10.9965C10.9986 10.7497 10.8462 10.0104 10.1679 9.33211C9.51563 8.67985 8.2891 8 5.99999 8C3.71088 8 2.48435 8.67985 1.8321 9.33211C1.15375 10.0104 1.00142 10.7497 1 10.9965H11Z" fill="white" />
                        </svg>
                        Profil
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
