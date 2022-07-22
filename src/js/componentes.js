import "../css/componentes.css";
// import   webpacklogo  from '../assets/img/webpack-logo.png';  // de esta forma trabaja  REACT


 export const saludar= (nombre)=>{

   //  SIEMPRE  QUE HACEMOS UNA  FUNCIONALIDADES TEEMOS QUE   PONER LA PALABRA RESERVADA EXPORT

    console.log("Creando una etiqueta H1");

    const h1 = document.createElement('h1');//  SE  CREA EL ELEMENTO
     h1.innerText= `Bienvenido ${nombre}`;  //  SE INSERTA LO  QUE DESEAS    QUE  VALLE
     document.body.append(h1); // HACI SE LE INSERTA EN EL BODY  CUALQUIER TAG

  //  DE esta manera trabaja REACT
   //  console.log(webpacklogo);  //  para ver   si la imagen esta cargando
   //  const img =  document.createElement('img');
   //  img.src= webpacklogo;
   //  document.body.append(img);




}

