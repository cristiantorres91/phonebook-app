import React from "react";

export const ItemContact = () => {
	return (
		<>
			<div role="alert" className="alert-info">
				<div className="d-flex justify-content-between align-items-center">
					<div className="pt-2 ps-2">
						<h5>Cristian Torres</h5>
						<h6>71003568</h6>
					</div>
					<div>
						<button
							type="button"
							className="btn btn-outline-success bt-sm mx-3"
						>
							<i className="bi bi-pencil"></i>
						</button>
						<button
							type="button"
							className="btn btn-outline-danger bt-sm mx-3"
						>
							<i className="bi bi-trash"></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
