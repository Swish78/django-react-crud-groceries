import { useEffect, useState } from "react";
import axios from "axios";

const GroceryList = () => {
    const [groceryItems, setGroceryItems] = useState([]);
    const [newGroceryItem, setNewGroceryItem] = useState({ name: "", quantity: 0, price: 0.00 });
    const [editGroceryItem, setEditGroceryItem] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/groceryitems/");
            setGroceryItems(response.data);
        } catch (error) {
            console.error("Error in the get method", error);
        }
    };

    const handleCreate = async () => {
        try {
            const response = await axios.post("http://localhost:8000/groceryitems/", newGroceryItem);
            setGroceryItems([...groceryItems, response.data]);
            setNewGroceryItem({ name: "", quantity: 0, price: 0.00 });
        } catch (error) {
            console.error("Error creating grocery item", error);
        }
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/groceryitems/${editGroceryItem.id}/`, editGroceryItem);
            setGroceryItems(groceryItems.map((item) => (item.id === editGroceryItem.id ? response.data : item)));
            setEditGroceryItem(null);
        } catch (error) {
            console.error("Error updating grocery item", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/groceryitems/${id}/`);
            setGroceryItems(groceryItems.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error deleting grocery item", error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Grocery Item List</h1>

            {/* Create Grocery Item Form */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Create Grocery Item</h5>
                            <form>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newGroceryItem.name}
                                        onChange={(e) => setNewGroceryItem({ ...newGroceryItem, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Quantity:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={newGroceryItem.quantity}
                                        onChange={(e) => setNewGroceryItem({ ...newGroceryItem, quantity: parseInt(e.target.value) })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Price:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={newGroceryItem.price}
                                        onChange={(e) => setNewGroceryItem({ ...newGroceryItem, price: parseFloat(e.target.value) })}
                                    />
                                </div>
                                <button type="button" className="btn btn-primary" onClick={handleCreate}>
                                    Create Grocery Item
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grocery Item List Table */}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Grocery Item List</h5>
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {groceryItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A'}</td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm mr-2"
                                        onClick={() => setEditGroceryItem(item)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>


            {/* Edit Grocery Item Form */}
            {editGroceryItem && (
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Edit Grocery Item</h5>
                                <form>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={editGroceryItem.name}
                                            onChange={(e) => setEditGroceryItem({ ...editGroceryItem, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={editGroceryItem.quantity}
                                            onChange={(e) => setEditGroceryItem({ ...editGroceryItem, quantity: parseInt(e.target.value) })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Price:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={editGroceryItem.price}
                                            onChange={(e) => setEditGroceryItem({ ...editGroceryItem, price: parseFloat(e.target.value) })}
                                        />
                                    </div>
                                    <button type="button" className="btn btn-success" onClick={handleUpdate}>
                                        Update Grocery Item
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary ml-2"
                                        onClick={() => setEditGroceryItem(null)}
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GroceryList;
