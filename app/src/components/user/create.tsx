import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import { increment } from "../../counterSlice";
import { RootState } from "../../store";

function Create() {
  const { Formik } = formik;
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup
      .string()
      .required()
      .min(6, "Password must be at least 6 characters")
      .uppercase("Password must contain at least one uppercase letter")
      .lowercase("Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one number"),
  });
  const dispatch = useDispatch();
  const doIncrease = () => dispatch(increment());
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "Mark",
        lastName: "Otto",
        username: "",
        city: "",
        state: "",
        zip: "",
        file: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} style={{ textAlign: "left" }}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {typeof errors.username === "string" && errors.username}
                  {Array.isArray(errors.username) &&
                    JSON.stringify(errors?.username)}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Col md="6">
              <Button
                type="button"
                variant="primary"
                onClick={doIncrease}
                className="mb-3"
              >
                Counter {count}
              </Button>
            </Col>
            <Col md="6">
              <Button type="submit">Submit form</Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default Create;
