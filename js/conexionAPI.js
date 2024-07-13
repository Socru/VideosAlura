async function listarVideos() {
    const conexion = await fetch("http://localhost:3001/videos");
    const conexionConvertida = await conexion.json();
    //console.log(conexionConvertida); 
    return conexionConvertida;
}

async function crearVideo(titulo,descripcion,url,imagen) {
    const conexion = await fetch("http://localhost:3001/videos",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringifly({
            titulo: titulo,
            descripcion: descripcion,
            url: url,
            imagen: imagen
        })
    })
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function buscarVideos(palabraClave){
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`); 
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export const conexionAPI = {
    listarVideos,crearVideo,buscarVideos
}