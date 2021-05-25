import React ,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Firebase,{FirebaseContext} from './components/Firebase';
import reportWebVitals from './reportWebVitals';
import "./styles/styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(

  <FirebaseContext.Provider value={new Firebase() }>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);


reportWebVitals();
