import axios from 'axios';

// Lấy tất cả dữ liệu từ API
export const getTasks = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}tasks`);
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

// Lấy một task cụ thể bằng ID
export const getTaskById = async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching task with ID ${id}:`, error);
    throw error;
  }
};

// Tạo một task mới
export const createTask = async (taskData) => {
  try {
    const response = await axios.post(process.env.REACT_APP_BE_URL, taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

// Cập nhật một task bằng ID
export const updateTask = async (id, taskData) => {
  try {
    const response = await axios.put(`${process.env.REACT_APP_BE_URL}/${id}`, taskData);
    return response.data;
  } catch (error) {
    console.error(`Error updating task with ID ${id}:`, error);
    throw error;
  }
};

// Xóa một task bằng ID
export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_BE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting task with ID ${id}:`, error);
    throw error;
  }
};
