import { useState } from 'react';

export const useForm = (callback, state) => {
  const [data, setValues] = useState(state);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleChange = (e) => {
    setValues((data) => ({ ...data, name: e.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    data,
  }
};

