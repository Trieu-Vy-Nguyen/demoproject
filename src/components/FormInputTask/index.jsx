import React, { useEffect, useState } from 'react';
import './style.scss';
import { Button, Input, Table } from 'antd';
import { getTasks, createTask } from '../../apis/taskApis';


const FormInputTask = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [dataSource, setDataSource, ] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await getTasks();
        setDataSource(tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await createTask(formData);
      setDataSource([...dataSource, newTask]);
      setFormData({ name: '', phone: '', address: '' });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Task Manager</h1>
        <div className='form-container'>
          <div className='form-content'>
            <label>Name: </label>
            <Input
              name='name'
              placeholder='Please input your name'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-content'>
            <label>Phone number: </label>
            <Input
              name='phone'
              placeholder='Please input your number'
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-content'>
            <label>Address: </label>
            <Input
              name='address'
              placeholder='Please input your address'
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <Button onClick={handleSubmit} className='form-content-btn' type='submit'>Save</Button>
      </form>

      <Table dataSource={dataSource} columns={columns} rowKey={(record) => record.phone} />
    </>
  );
};

export default FormInputTask;