body {
    font-family: Arial, sans-serif;
    margin: 0;
    display: flex;
    background-color: #f0f0f0;
}

.sidebar {
    width: 250px;
    background-color: #fff;
    padding: 20px;
    border-right: 1px solid #ddd;
}

.sidebar h2 {
    color: #0d6efd;
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
}

.sidebar ul li a {
    text-decoration: none;
    color: #333;
    display: block;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.sidebar ul li a:hover {
    background-color: #f0f0f0;
}

.main-content {
    padding: 20px;
    width: 100%;
}

form {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form label {
    display: block;
    margin-top: 10px;
}

form input, form select, form button {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

form button {
    background-color: #0d6efd;
    color: #fff;
    cursor: pointer;
}

form button:hover {
    background-color: #0b5ed7;
}
