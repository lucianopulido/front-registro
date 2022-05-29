import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// el signo de admiracion al final es porque sino te salta un error porque no sabe si lo que recibe puede ser o no nulo
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

