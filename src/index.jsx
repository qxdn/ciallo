import { createRoot } from 'react-dom/client';
import React from 'react';
import Ciallo from './components/Ciallo';

function App() {
    return <div>
        <Ciallo />
    </div>;
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
