import React, { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

const AddPost = () => {

const Formik = useFormik({
    initialValues: {
        name: "",
        date:"",
        email:"",
     
      },

  // Function to handle form input changes


  // Function to submit the form data using Axios
  onSubmit : async (values) => {
    try {
      const response = await axios.post("https://65952c2b04335332df821d44.mockapi.io/api/v1/users", values);
      console.log("Post created:", response.data);
      Formik.resetForm();
     
    } catch (error) {
      console.error("Error creating post:", error);
    }
  },
});
useEffect(() => {
    // Code inside this block will run on mount and every time formik.values changes
    console.log("Form values changed:", Formik.values);
  }, [Formik.values]);

  return (
    <form onSubmit={Formik.handleSubmit}>
      <label>
        Name:
        <textarea name="name" value={Formik.values.name} onChange={Formik.handleChange}></textarea>
      </label>
      <br />
      <label>
        Date:
        <textarea name="date" value={Formik.values.date} onChange={Formik.handleChange}></textarea>
      </label>
      <br />
      <label>
        Email:
        <textarea name="email" value={Formik.values.email} onChange={Formik.handleChange}></textarea>
      </label>
      <br />
      <button type="submit">Add Post</button>
    </form>
  );
  };

export default AddPost;