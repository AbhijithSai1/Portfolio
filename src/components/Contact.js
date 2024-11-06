import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"; // Import your contact image here

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and phone number
    if (
      !formDetails.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formDetails.email)
    ) {
      setStatus({
        success: false,
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (!formDetails.phone || !/^\d{10}$/.test(formDetails.phone)) {
      setStatus({
        success: false,
        message: "Please enter a valid 10-digit phone number.",
      });
      return;
    }

    setButtonText("Sending");

    try {
      let response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      setButtonText("Send");

      // Check if the response is ok (status 200-299)
      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Check if the response has content and is JSON
      const contentType = response.headers.get("content-type");
      let result =
        contentType && contentType.includes("application/json")
          ? await response.json()
          : { status: "Error", message: "No JSON response" };

      setFormDetails(formInitialDetails);

      if (result.status === "Message Sent") {
        setStatus({ success: true, message: "Message Sent Successfully" });
      } else {
        setStatus({
          success: false,
          message: result.message || "Something went wrong, please try again",
        });
      }

      // Clear status message after 5 seconds
      setTimeout(() => {
        setStatus({});
      }, 5000);
    } catch (error) {
      setButtonText("Send");
      setStatus({
        success: false,
        message: error.message || "Something went wrong, please try again",
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({});
      }, 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>

                <Col>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
