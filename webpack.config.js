
const HtmlWebPack    = require('html-webpack-plugin') //  del paquete que instale con npm ....
const MiniCssExtract = require("mini-css-extract-plugin");  //  este paquete es para instalar el css global
const CopyPlugin = require("copy-webpack-plugin");


module.exports ={
// ESTE ARCHIVO ES PARA CONFIGURAR  TODO EL PROYECTO Y LOS HTMLS Y LOS PQUETES  QUE TIENEN  QUE INDICAR
//  HTML LOAD Y LOS PLUYINS   CON LOS DIFERENTES MODULOS

//  EL BUILD ES PARA CORRER EL  PROGRAMA Y ESTE TAMBIEN CREA LA CARPETA DIST    
// ESTE ESTA EN EL ARCHIVO PACKAGE.JSON   COMO UNA PROPIEDAD QUE NOSOTROS LO PONEMOS


///  Las propiedades del buil  es apara correr el html
///  y start es patra correr en modo de desarrollo https

// TAMBIEN INSTALAMOS  npm i -D   //  ESTE  crea instalaciones  dependientes
// npm i -D webpack-dev-server esta es para instalar el servidor https

    mode:'development',

    output :{  //  con esto borro todo y se vuelve a crear
      clean :  true
    },

     module:{
        rules:[
          {
            test : /\.hmtl$/,
            loader : 'html-loader',
            options:{
               sources:false
            }
          },
          { 
            test : /\.css$/,  //   expresion regular  para todos  los css o puede ser cualquiera sass
            exclude:/styles.css$/,  //  esta para que excluya para que pasa a la siguiente  condicion
            use :['style-loader','css-loader'] //  aca se pone los paquetes  que instalamos
          },
          {
            test: /styles.css$/, //  asi es  para buscar el archivo especifico  con / xx /
            use: [MiniCssExtract.loader, 'css-loader']
          },
          {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'file-loader',
           
          },
            
        ]
     },

     optimization:{},

     plugins:[

      new HtmlWebPack({ //  ACA  se configura  el HTML
         title:'Mi WebPAck APP',
         template:'./src/index.html'

      }),

      new MiniCssExtract({
        filename:'[name].css', //  PARA QUE UTILICE EL MISMO NOMBRE   
        ignoreOrder:false

      }),
      new CopyPlugin({  //  Este plugin son mas que nada pARA PROPIEDADES ESTATICOS
         patterns: [
           { from: "src/assets/", to: "assets/" },  //  siempre  tener en ccuenta las  /  7 o  el patch o ruta
         ],
       }),

      

     ],
}

