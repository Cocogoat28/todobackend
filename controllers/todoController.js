const Todo = require('../models/todoModel');

// @desc    Get all todos
// @route   GET /api/todos
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Create a new todo
// @route   POST /api/todos
const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }
        const newTodo = await Todo.create({ title, description });
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Update a todo
// @route   PUT /api/todos/:id
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Delete a todo
// @route   DELETE /api/todos/:id
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};