import Authorization from "./auth/Authorization";
import PasswordRecovery from "./auth/Password_recovery";
import Registration from "./auth/Registration";
import './Modal.css'
import exit from '/src/assets/exit.png'

const Modal = (props) => {
    const modal = props?.modal?.props

    function renderForm(param) {
        switch(param) {
            case 'authorization':
                return <Authorization />;
            case 'registration':
                return <Registration />;
            case 'password-recovery':
                return <PasswordRecovery />;
            default:
                return <Authorization />;
        }
    }

    const content = modal?.active && (
        <div className="main">
            <div className="blackout" onClick={() => props?.modal.dispatch({ type: "main", active:"false"})}></div>
            <div className="modal-container">
                {renderForm(modal?.content)}
                <button onClick={() => props?.modal.dispatch({ type: "main", active:"false"})}>Закрыть окно</button>
            </div>
        </div>
    )

    return content

};

export default Modal