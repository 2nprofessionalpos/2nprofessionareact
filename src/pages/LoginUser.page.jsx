import React from "react";
import { Link } from "react-router-dom";
import '../css/loginUser.css';
import xwhithe from '../img/xwhithe.svg';

function LoginEntityPage(){
	return (
        <div className="loginUser">
            <div className="contenedor_formulario contenedor">

                <div className="logo">

                </div>

                <form method="post" action="send" className="formulario">
                    <div className="cerrar">
                        <Link className="entidad" to='/'>
                            <img src={xwhithe} alt="cerrar"></img>
                        </Link>
                    </div>
                    <div className="input">
                        <input type="texto" name="usuario" placeholder="usuario" required></input>
                    </div>
                    <div className="input">
                        <input type="password" name="contraseña" placeholder="contraseña" required></input>
                    </div>
                    <div className="input">
                        <button type="button" href="#" className="ingresar">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
	);
}

export default LoginEntityPage;
