import React, { useState } from 'react';
import './website.css';

function App() {
    const [orders, setOrders] = useState([]);
    const [newOrder, setNewOrder] = useState('');
    const [receivedOrder, setReceivedOrder] = useState('');

    const handleAddOrder = () => {
        if (newOrder.trim()) {
            setOrders([...orders, { id: Date.now(), text: newOrder }]);
            setNewOrder('');
        }
    };

    const handleDeleteOrder = (id) => {
        setOrders(orders.filter((order) => order.id !== id));
    };

const handleReceivedOrder = (text) => {
    setReceivedOrder(text);
};

return (
    <div className="app">
        <h1>Welding Shop App</h1>
        <div className="input-container">
            <input
                type="text"
                value={newOrder}
                onChange={(e) => setNewOrder(e.target.value)}
                placeholder="Enter order"
                className="input-field"
            />
            <button onClick={handleAddOrder} className="add-btn">Add Order</button>
</div>
<ul className="order-list">
    {orders.map((order) => (
        <li key={order.id} className="order-item">
            <span onClick={() => handleReceivedOrder(order.text)}>{order.text}</span>
            <button onClick={() => handleDeleteOrder(order.id)} className="delete-btn">Delete</button>
        </li>
    ))}
</ul>
{receivedOrder && (
    <div className="received-order">
        <h2>Received Order:</h2>
        <p>{receivedOrder}</p>
    </div>
)}
</div>
);
}

export default App;

