import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { AddedCoinsList } from './coins/AddedCoinsList'

export const Modal = (props) => {
    const rootModalElement = document.getElementById('root-modal');

    return ReactDOM.createPortal(
        <>
        
        <div className="modal">
            <AddedCoinsList />
            <button
            onClick={() => {
                props.dismissModal();
            }}
            className="btn btn-highlight"
            >
            Cancel
            </button>
            <button onClick={() => {}} className="btn">
            Confirm
            </button>
        </div>
        <div onClick={() => {}} className="backdrop" />
        </>,
        rootModalElement
    );
}

