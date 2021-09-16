import classes from './boldText.module.css'
 export const BoldText = ({children,className}) => {
    return (
        <div className={`${classes.boldText} ${className}`}>
            {children}
        </div>
    )
}
export const MediumText = ({content,className}) => {
    return (
        <div className={`${classes.mediumText} ${className}`}>
            <p>{content}</p>
        </div>
    )
}

export const Text = ({content, className}) => {
    return (
        <div className={`${classes.text} ${className}`}>
            <p>{content}</p>
        </div>
    )
}


