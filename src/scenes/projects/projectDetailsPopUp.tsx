import { ReactElement } from 'react'

interface PopUpProps {
    open: boolean;
    onCloseClick: () => void;
    children: ReactElement;
}

export default function ProjectDetailsPopUp(props: PopUpProps) {
    return (
        <div
            className={`${"modal"} ${props.open ? "display-block" : "display-none"}` }
        >
            <div className="modal-main">
                <div className="modal-body">{props.children}</div>
                <div className="btn-container">
                    <button type="button" className="btn" onClick={props.onCloseClick}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}