import users from "./data.js";

// Get semua user
const index = () => {
    return users;
};

// Get user by id
const show = (id) => {
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) { 
        return users[index];
    }
    return { message: "User not found" };
};

// Add user
const store = (data) => {
    const newUser = {
        id: users.length + 1,
        name: data.name,
        age: data.age,
        address: data.address,
        email: data.email
    };
    users.push(newUser);
    return newUser;
};

// Delete user
const destroy = (id) => {
    const deleteIndex = users.findIndex(user => user.id === parseInt(id));
    if (deleteIndex !== -1) {
        users.splice(deleteIndex, 1);
        return { message: "User deleted" };
    }
    return { message: "User not found" };
};

export { index, show, store, destroy };
