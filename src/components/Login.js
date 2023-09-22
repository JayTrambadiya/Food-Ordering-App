import React from 'react';
import {Form,Formik,useField, Field} from "formik"
import {Link} from 'react-router-dom'
import basicValidationSchema from "./basicValidationSchema"
import validate from './basicValidationSchema';
import signUpLogo from '../../assets/img/signup_logo.webp'


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!     Field-level Validation  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function validateName(value){
//   let error
//   if(!value){
//     error="Required";
//   }else if(value=="jay"){
//     error="Nice try!!"
//   }
//   return error;
// }

const Login = ()=>{
  return (

    <div className='flex flex-col m-auto h-screen w-8/12 border shadow-xl'>
      <div className='signup-div self-center w-7/12 px-5 py-10  flex flex-col space-y-4  '>
      <div className='flex flex-row self-center '>
        <div>
        <div className='signup-tag text-4xl text-bold mt-2'>
          Sign-up
       </div>
      <div className='self-center mt-2 '>
        or <Link to="/" className='text-orange-500 hover:text-slate-500 border-b-2 border-black'>login to your account</Link>
      </div>
        </div>
       <div className='ml-14'>
       <img src={signUpLogo} alt="Logo" className='w-28'></img>
       </div>
      </div>


      <div className='flex flex-col'>
       <Formik initialValues={{
        phoneNumber:"",
        name:"",
        email:"",
        }}
        
        validationSchema={basicValidationSchema}

        onSubmit={
          (values)=>{
            console.log(values);
          }
        }
        >
         {
          ({errors,touched})=>(
          <Form className='form flex flex-col box-contain m-auto '>
          {/* <label htmlFor="phoneNumber" className='self-center text-xl mb-2 '>{errors.phoneNumber && touched.phoneNumber ?"Enter Phone Number":"Phone Number"}</label> */}
          <Field type="tel" name="phoneNumber" placeholder="Phone Number" className=" text-xl text-slate-900 self-center px-20 py-5  placeholder:text-xl border border-1 border-slate-300 focus:placeholder:text-sm"></Field>
          {/* <label htmlFor="name" className='self-center text-xl mb-2'>{?"Enter a Name":"Name"}</label> */}
          <Field type="text" name="name" placeholder="Name" className=" peer text-xl text-slate-900 self-center px-20 py-5 placeholder:text-xl border border-1 border-slate-300 focus:" 
          // validate={validateName}
          >
          </Field>
          {errors.name && touched.name?<div className='text-sm text-red-600 text-red-600'>Enter a Name</div>
          :null}
          {/* <label htmlFor="email" className='self-center text-xl mb-2'>{errors.email && touched.email ?"Invalid Email":"Email"}</label> */}
          <Field type="email" name="email" placeholder="Email" className=' peer... text-xl  text-slate-900 self-center px-20 py-5 placeholder:text-xl border border-1 border-slate-300'></Field>
          {errors.email && touched.email?<div className='text-sm text-red-600 peer-invalid:focus'>Invalid Email</div>:null}
          <button type="submit" className='self-center w-full my-5 px-10 py-3 bg-orange-500 text-xl text-white '>CONTINUE</button> 
         </Form>
          )
         }
       </Formik>
    </div>
  </div>



    </div>
    
  );
};

export default Login;

