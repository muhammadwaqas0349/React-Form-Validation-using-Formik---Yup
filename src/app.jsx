import { signupSchema } from './Index';
import './app.css'
import {  Formik, Form, Field } from 'formik';


const initialValues  = {
name: "", email: "", password: "", cpassword: ""
}; 



  export const App = () => {

   const onSubmit =  (values, actions) => {
      console.log(values);
      actions.resetForm();
    }; 

  
  
  
  

  return (
    <div className='app'>
      
      <Formik initialValues={initialValues} validationSchema={signupSchema} onSubmit={onSubmit}>
        
        {({errors, touched}) => (
          <Form className='signup_form'>
          <label htmlFor='name'>Name</label>
          <Field type='text' name='name' />

            <div className='error-container'>
              {errors.name && touched.name &&(
                <p className='form_error'>{errors.name}</p>
              )}
            </div>
        
          <label htmlFor='email'>Email</label>
          <Field type='email' name='email' />    

          <div className='error-container'>
              {errors.email && touched.email &&(
                <p className='form_error'>{errors.email}</p>
              )}
            </div>
          <label htmlFor='Password'>Password</label>
          <Field type='password' name='password' />   

          <div className='error-container'>
              {errors.password && touched.password &&(
                <p className='form_error'>{errors.password}</p>
              )}
            </div>
          <label htmlFor='cpassword'>CPassword</label>
          <Field type='password' name='cpassword' />    

          <div className='error-container'>
              {errors.cpassword && touched.cpassword &&(
                <p className='form_error'>{errors.cpassword}</p>
              )}
            </div>
          <button type='submit'>Submit</button>
        </Form>
        ) }
      </Formik>
    </div>
  );
              
};  
  