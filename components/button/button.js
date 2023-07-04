import styles from './button.module.scss';

export default function MyButton({buttonLabel, buttonClass, buttonClicked}) {

    const buttonStyles = ['btn', `btn-${buttonClass}`, 'w-100', styles.button].join(' ');

    return (
        <button 
            type="button" 
            className={buttonStyles}
            onClick={buttonClicked}>
            {buttonLabel}
        </button>
    );
}