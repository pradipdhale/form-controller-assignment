import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormComponent from "./components/FormComponent";

function App() {

  return (
    <div className="container" >
        <div className="row">
        <div className="col-md-1"></div>
          <div className="col-md-10">
            <FormComponent />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
  );
}

export default App;
