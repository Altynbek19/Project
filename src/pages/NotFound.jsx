import { Link } from "react-router-dom";

const NotFound = (Props) => {
    return (
        <div>
            Ошибка 404. Страница не найдена <Link to='/'></Link>
        </div>
    );
};

export default NotFound