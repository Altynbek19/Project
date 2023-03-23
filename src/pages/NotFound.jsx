import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = (Props) => {
    return (
        <div className="error_bug">
            {/* <p>Ошибка 404. Страница не найдена </p>
            <div className="back">
                <Link to='/'>Вернуться домой</Link>
            </div> */}
            <div>
                <div className="error_cod">404</div>
            </div>
            <div className="error_mess_back">
                <div className="error_mess">
                    Извините, такой страницы <br /> не существует!
                </div>
                <div className="back">
                    <Link to='/'>Вернуться домой</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound