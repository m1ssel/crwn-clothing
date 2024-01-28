import './button.styles.scss'


const BYTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${BYTTON_TYPES_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button