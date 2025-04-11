import React, { useState } from "react";
import { Form, Input, Button, Typography, notification } from "antd";
import emailjs from "emailjs-com";

const { Title } = Typography;

function Contact() {
  const [messageStatus, setMessageStatus] = useState(null); 

  // Form submission handler
  const onFinish = async (values) => {
    if (!values.name || !values.email || !values.message) {
      setMessageStatus({
        type: "error",
        message: "All fields are required. Please fill in all the fields.",
      });
      return; 
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(values.email)) {
      setMessageStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return; 
    }

    try {
      const response = await emailjs.send(
        "service_pz51c8s",
        "template_qb1nqpp"
        , 
                {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        "rAHVlrdJwGCQ_dYSu" 
      )

      setMessageStatus({
        type: "success",
        message: "Your message has been sent to Pallavi Joshi.",
      });

      notification.success({
        message: "Message Sent Successfully",
        description: "Your message has been sent to Pallavi Joshi.",
        placement: "topRight",
        duration: 3,
      });
    } catch (error) {
      setMessageStatus({
        type: "error",
        message: "There was an issue sending your message. Please try again.",
      });

      notification.error({
        message: "Message Failed",
        description: "There was an issue sending your message. Please try again.",
        placement: "topRight",
        duration: 3,
      });
    }
  };

  return (
    <div>
      <Title
        level={2}
        style={{
          color: "#09577e",
          fontFamily: "'Montserrat', sans-serif",
          marginBottom: "30px",
        }}
      >
        Contact
      </Title>
      <Form name="contact" onFinish={onFinish} layout="horizontal" labelCol={{ span: 1 }} wrapperCol={{ span: 25 }}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Name is required!" }]}
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
          required={false} 
        >
          <Input
            placeholder="Your Name"
            style={{
              fontFamily: "'Poppins', sans-serif",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Email is required!" }, 
            {
              type: "email",
              message: "Please enter a valid email address!", 
            },
          ]}
          required={false} 
        >
          <Input
          placeholder="your@email.com"
            style={{
              fontFamily: "'Poppins', sans-serif",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
        </Form.Item>
        <Form.Item
          name="message"
          label="Msg"
          rules={[{ required: true, message: "Message is required!" }]} 
          required={false} 
        >
          <Input.TextArea
          placeholder="Write your message here..."
            style={{
              fontFamily: "'Poppins', sans-serif",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
        </Form.Item>

        {/* Show custom status message above the Submit button */}
        {messageStatus && (
          <div
            style={{
              backgroundColor: messageStatus.type === "success" ? "#4CAF50" : "#f44336",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            {messageStatus.message}
          </div>
        )}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#09577e",
              borderColor: "#074463",
              fontFamily: "'Poppins', sans-serif",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#074463")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#09577e")}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Contact;
