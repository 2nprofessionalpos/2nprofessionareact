import React from "react";
import { Link } from "react-router-dom";
import '../css/home.css';


function HomePage() {
	return (
		<div className="home-page">
			
			<div className="contenedor_ingreso contenedor">{}
				<div className="logo">  {}
				</div>
				<div className="inicio">{}
					<Link className="entidad" to='/loginUser'>
						<button type="button" className="entidad">Login</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
