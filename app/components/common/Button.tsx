interface ButtonProps {
    children: string
    className: string
    onClick?: () => void
}

const Button = ({children, onClick, className}: ButtonProps) => {
    return (
        <button className={`animated-button ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}
export default Button