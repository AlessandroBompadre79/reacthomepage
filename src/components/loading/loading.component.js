import React from 'react';
import cx from 'classnames';
import styles from './loading.hashed.scss';

export const Loading = (props) => {
    return(
        <div className="container">
            <div className="row align-items-start">
                <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
                <p>Loading ...</p>
            </div>
        </div>
    );
}

export default Loading;