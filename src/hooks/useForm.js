// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initValue) => {
    const [values, setValues] = useState(initValue)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };

      return ([values, handleChanges, showSuccessMessage, handleSubmit]);
}

export default useForm;