interface ButtonProps {
    children: string
    className?: string
    onClick?: () => void
    RightIcon?: any
    LeftIcon?: any
}

const BlackButton = ({children, onClick, className, RightIcon, LeftIcon}: ButtonProps) => {
    return (
        <button className={`flex items-center ${className}`} onClick={onClick}>
            <span>{LeftIcon}</span>
            <span className="mx-2">{children}</span>
            <span>{RightIcon}</span>
        </button>
    )
}
export default BlackButton