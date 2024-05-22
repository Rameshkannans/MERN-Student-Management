import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Student_form = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await axios.post("http://localhost:5000/Student_Form", values);
      console.log(values);
      message.success("Student Added successfully!");
    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to add student. Please try again.");
    }
  };

  return (
    <>
      <div className="Shadow rounded my-3 pb-5 mx-auto border border-1 border-secondary col-md-9">
        <div className="text-success rounded" style={{ backgroundColor: "#DFF0D8" }}>
          <p className="ms-4 py-3">Add Student Details</p>
        </div>
        <Form
          onFinish={onFinish}
          form={form}
          layout="horizontal"
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
        >
          <fieldset className="border p-2 m-3">
            <legend className="float-none fw-bold text-dark w-auto border-0">
              Personal Information
            </legend>
            <div className="form-group">
              <Form.Item
                label={<strong>Full Name</strong>}
                colon={false}
                name="FullName"
                rules={[
                  { required: true, message: "Please input full name!" },
                  { pattern: /^[A-Za-z\s]+$/, message: "Please enter only letters and spaces." }
                ]}
              >
                <Input type="text" placeholder="Enter Name" />
              </Form.Item>
            </div>
            <div className="form-group">
              <Form.Item
                label={<strong>Contact</strong>}
                name="contact"
                colon={false}
                rules={[
                  { required: true, message: "Please input contact number!" },
                  { pattern: /^[0-9]{10}$/, message: "Please enter exactly 10 digits." }
                ]}
              >
                <Input type="tel" placeholder="Enter contact" />
              </Form.Item>
            </div>
            <div className="form-group">
              <Form.Item
                label={<strong>Parent Contact</strong>}
                name="parentContact"
                colon={false}
                rules={[
                  { required: true, message: "Please input parent contact number!" },
                  { pattern: /^[0-9]{10}$/, message: "Please enter exactly 10 digits." }
                ]}
              >
                <Input type="tel" placeholder="Enter Parent Contact" />
              </Form.Item>
            </div>
            <div className="form-group">
              <Form.Item
                label={<strong>Aadhar</strong>}
                name="aadhar"
                colon={false}
                rules={[
                  { required: true, message: "Please input Aadhar number!" },
                  { pattern: /^[0-9]{12}$/, message: "Please enter a 12-digit Aadhar number." }
                ]}
              >
                <Input type="tel" placeholder="Enter Aadhar number" />
              </Form.Item>
            </div>
            <div className="form-group">
              <Form.Item
                label={<strong>Intern ID</strong>}
                name="internid"
                colon={false}
                rules={[{ required: true, message: "Please fill the field" }]}
              >
                <Input type="tel" placeholder="Enter Intern ID" />
              </Form.Item>
            </div>
            <div className="form-group">
              <Form.Item
                label={<strong>Date of Joining</strong>}
                name="doj"
                colon={false}
                rules={[{ required: true, message: "Please input date of joining!" }]}
              >
                <Input type="date" placeholder="Date" />
              </Form.Item>
            </div>
          </fieldset>
          <fieldset className="border p-2 m-3">
            <legend className="float-none fw-bold text-dark w-auto border-0 ">
              Fees Information
            </legend>
            <div className="form-group">
              <Form.Item
                label={<strong>Fees Remarks</strong>}
                name="feesRemarks"
                colon={false}
                rules={[{ required: true, message: "Please input fees remarks!" }]}
              >
                <Input type="text" placeholder="Enter Fees Remarks" />
              </Form.Item>
            </div>
          </fieldset>
          <fieldset className="border p-2 m-3">
            <legend className="float-none fw-bold text-dark w-auto border-0">
              Optional Information
            </legend>
            <div className="form-group">
              <Form.Item
                label={<strong>About Student</strong>}
                name="aboutStudent"
                colon={false}
                rules={[
                  { required: true, message: "Please input information about student!" },
                  {
                    validator: (_, value) => {
                      if (!value || value.split("\n").length <= 3) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Maximum 2 rows allowed.");
                    }
                  }
                ]}
              >
                <Input.TextArea rows={2} placeholder="Enter information about the student" />
              </Form.Item>
            </div>
            <div className="form-group">
              <Form.Item
                label={<strong>Email ID</strong>}
                name="email"
                colon={false}
                rules={[
                  { type: "email", message: "The input is not a valid email address!" },
                  { required: true, message: "Please input your email address!" },
                  {
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address format!"
                  }
                ]}
              >
                <Input placeholder="Enter email" />
              </Form.Item>
            </div>
          </fieldset>
          <div className="form-group justify-content-center d-flex">
            <Button className="btn px-5 py-1 fw-bold text-bg-success border-0" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
        <div className="text-center mt-2">
          <NavLink to="/loginForm" className="text-decoration-none">
            Login ?
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Student_form;
