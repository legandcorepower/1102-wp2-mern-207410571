import { FormRow } from '../component';
import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/Register';
import { Logo } from '../component';
import { useAppContext } from './context/appContext';
import  Alert from '../component/Alert';
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  
  const {showAlert,displayAlert} =useAppContext();

  const handleChange = (e) => {
    console.log('e.target', e.target);
    setValues({...values, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log('e.target', e.target);
    const {email,password}= values;
    if(!email||!password){
      displayAlert();
      return;
    }
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Register</h3>
        {showAlert && <Alert/> }
        <FormRow
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
          className='form-input'
        />

        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          className='form-input'
        />

         <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          className='form-input'
        />


       <button className='btn btn-block' type="submit">
           submit 
       </button>
      </form>
    </Wrapper>
  );
};

export default Register;
