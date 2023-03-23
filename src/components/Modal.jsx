import Authorization from "./auth/Authorization";
import Registration from "./auth/Registration";
import Password_recovery_email from "./auth/Password_recovery_email"
import Password_recovery_pass from "./auth/Password_recovery_pass"
import exit from '/src/assets/auth/exit.png'

const Modal = (props) => {
    const modal = props?.modal?.props

    function renderForm(param) {
        switch(param) {
            case 'authorization':
                return <Authorization />;
            case 'registration':
                return <Registration />;
            case 'password_recovery_email':
                return <Password_recovery_email />;
            case 'password_recovery_pass':
                return <Password_recovery_pass />;
            default:
                return <Authorization />;
        }
    }

    const content = modal?.active && (
        <div className="modal">
            <div className="blackout" onClick={() => props?.modal.dispatch({ type: "modal", active:"false"})}></div>
            <div className="modal-container">
                <div className="exit">
                    <img src={exit} alt="" onClick={() => props?.modal.dispatch({ type: "modal", active:"false"})}/>
                </div>
                {renderForm(modal?.content)}
            </div>
        </div>
    )

    return content

};

export default Modal