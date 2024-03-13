const Elemento = ({ id, name, descripcion, herramientas, link }) => {
    const src = `${id}`;
    var link = `${link}.html`;
    const pictureClassName = ""; // Añade una clase aquí si es necesario
    return (
        <div  className="grid">
            <div className="proyecto">
                {id ? (
                    <a href={link}><img
                        className={pictureClassName}
                        src={src}
                        alt={descripcion}
                    /></a>
                ) : (
                    <img> Sin imagen </img>
                )}
                <div className = "texto">
                    <strong>{name}</strong>
                    <p>{descripcion}</p>
                    <p>Tecnologías usadas: {herramientas}</p>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(
    <div className="proyecto-container">
        <div className="proyecto">
            <Elemento id="images/pato1.jpg" name="Proyecto 1" descripcion="Descripción del elemento 1" herramientas="HTML, CSS, JavaScript" link="VisualizacionBustos" />
        </div>
        <div className="proyecto">
            <Elemento id="images/pato1.jpg" name="Proyecto 2" descripcion="Descripción del elemento 2" herramientas="HTML, CSS, JavaScript" />
        </div>
        <div className="proyecto">
            <Elemento id="images/pato1.jpg" name="Proyecto 3" descripcion="Descripción del elemento 3" herramientas="HTML, CSS, JavaScript" />
        </div>
    </div>,
    document.getElementById('app')
);
