import styles from './card.module.css';
import React from 'react';
import PropTypes  from 'prop-types';



const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles['card-header']}>
                {props.header}
            </div>
            <div className={styles['card-body']}>
                {props.body}
            </div>
            <div className={styles.punch}>
                {props.punch}
            </div>
            <div className={styles.btnDiv}>
                <button className={styles.btn} onClick={props.onClick}>Hit me a new Joke</button>
            </div>
            {props.children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element), 
      PropTypes.element.isRequired
    ]),
    header: PropTypes.string,
    body: PropTypes.string,
    punch: PropTypes.string,
    fetchJoke: PropTypes.func,
    onClick: PropTypes.func,
}

export default Card