import axios from "axios";
import { ChangeEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Register() {
  const [formData, setFormData] = useState({});

  const saveUser = () => {
    console.log(formData, " forms");
    axios.post("http://localhost:3001/api/users", formData).then(() => {
      alert("user created");
    });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData, "formData");
  const isDisabled = Object.values(formData).length === 0;
  return (
    <Form className="w-50 mx-auto mt-5 text-start border p-4">
      <Form.Group className="mb-3" controlId="fullname">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Full Name"
          name="fullName"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="username" onChange={handleChange}>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="userName"
          placeholder="Enter Username"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={saveUser}
        disabled={isDisabled}
        type="button"
      >
        Submit
      </Button>
    </Form>
  );
}
export default Register;
