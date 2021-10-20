import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="container mt-5 ">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<form>
							<div className="mb-3 row">
								<div className="col-sm-12">
									<input
										type="text"
										className="form-control"
										placeholder="name"
									/>
								</div>
							</div>
							<div className="mb-3 row">
								<div className="col-sm-12">
									<input
										type="password"
										className="form-control"
										id="inputPassword"
									/>
								</div>
							</div>
							<div className="mb-3 row">
								<div type="button" className="col-sm-12">
									<button
										type="button"
										className="btn btn-primary"
									>
										<i className="bi bi-person-plus"></i>{" "}
										Add
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						Column
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
