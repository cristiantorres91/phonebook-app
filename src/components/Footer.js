import React from "react";

export const Footer = () => {
	return (
		<footer className="navbar fixed-bottom text-black footer">
			<div className="container d-flex justify-content-center">
				<span>
					Cristian Torres <b>{new Date().getFullYear()}</b>
				</span>
			</div>
		</footer>
	);
};
