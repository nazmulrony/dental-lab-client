import React from 'react';

const ConfirmationModal = ({ title, message, successAction, modalData, successBtnName }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-ruby text-xl">{title}</h3>
                    <p className="py-4 font-semibold">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn btn-sm btn-success">{successBtnName}</label>
                        <label htmlFor="confirmation-modal" className="btn btn-error btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;