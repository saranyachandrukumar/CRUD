import React, { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

const AddPost = () => {
  const Formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      date: "",
      email: "",
    },
    onSubmit: async (values) => {
      try {
        // If there's an id, update the existing data
        if (values.id) {
          const response = await axios.put(
            `https://65952c2b04335332df821d44.mockapi.io/api/v1/users/${values.id}`,
            values
          );
          console.log("Post updated:", response.data);
        } else {
          // If there's no id, create a new post
          const response = await axios.post(
            "https://65952c2b04335332df821d44.mockapi.io/api/v1/users",
            values
          );
          console.log("Post created:", response.data);
        }

        // Reset the form after submitting
        Formik.resetForm();
      } catch (error) {
        console.error("Error updating/creating post:", error);
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
        Id:
        <textarea
          name="id"
          value={Formik.values.id}
          onChange={Formik.handleChange}
        ></textarea>
      </label>
      <label>
        Name:
        <textarea
          name="name"
          value={Formik.values.name}
          onChange={Formik.handleChange}
        ></textarea>
      </label>
      <br />
      <label>
        Date:
        <textarea
          name="date"
          value={Formik.values.date}
          onChange={Formik.handleChange}
        ></textarea>
      </label>
      <br />
      <label>
        Email:
        <textarea
          name="email"
          value={Formik.values.email}
          onChange={Formik.handleChange}
        ></textarea>
      </label>
      <br />
      <button type="submit">Add/Update Post</button>
    </form>
  );
};

export default AddPost;
