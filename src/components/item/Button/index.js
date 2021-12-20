const Botao = ({children, className, onClick}) => {
    return (
        <button type="button" className={className} onClick={onClick}>{children}</button>
    )
}

export default Botao;