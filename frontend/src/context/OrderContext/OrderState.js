// OrdersContext.js
import React, {   useEffect, useState } from 'react';
import { fetchOrders, createOrder, updateOrder, deleteOrder } from './api'; // Adjust the import path as necessary
import OrdersContext from '../OrderContext/OrderContext'

function OrdersState({ children }) {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newOrderData, setNewOrderData] = useState({})
    const [orderIdToUpdate, setOrderIdToUpdate] = useState(null); // State for order ID to update

    // Fetch orders on component mount
    useEffect(() => {
        const loadOrders = async () => {
            try {
                const data = await fetchOrders();
                console.log('Fetching Orders', data);                
                setOrders(data.orders);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadOrders();
    }, []);

    // Function to handle creating a new order
    const handleCreateOrder = async (newOrderData) => {
        try {
            const createdOrder = await createOrder(newOrderData);   
            setOrders((prevOrders) => [...prevOrders, createdOrder.newOrder]);
            return createdOrder
        } catch (err) {
            console.log(err);            
        }
    };

    // Function to handle updating an existing order
    const handleUpdateOrder = async () => {
        if (!orderIdToUpdate) return; // Ensure there is an order ID to update
        try {
            const updatedOrder = await updateOrder(orderIdToUpdate, newOrderData);
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order._id === updatedOrder.updatedOrder._id ? updatedOrder.updatedOrder : order
                )
            );
            setNewOrderData({}); // Reset after updating
            setOrderIdToUpdate(null); // Clear the ID after updating
        } catch (err) {
            setError(err.message);
        }
    };

    // Function to handle deleting an order
    const handleDeleteOrder = async (orderId) => {
        try {
            await deleteOrder(orderId);
            setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <OrdersContext.Provider value={{
            orders,
            loading,
            error,
            orderIdToUpdate,
            setOrderIdToUpdate,
            handleCreateOrder,
            handleUpdateOrder,
            handleDeleteOrder,
        }}>
            {children}
        </OrdersContext.Provider>
    );
};
export default OrdersState