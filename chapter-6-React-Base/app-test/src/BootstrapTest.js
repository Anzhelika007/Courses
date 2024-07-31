import {Container,Row,Col, Carousel, Button, Form} from 'react-bootstrap';


const BootstrapTest = () => {
  return (
    <Container className='mt-5 mb-5'>
      <Row>
        <Col>
          <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
        </Col>
        <Col>
        <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src='https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1714089600&semt=ais' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='https://img2.akspic.ru/previews/2/7/7/4/7/174772/174772-skelet-18650-past-rebro-kost-500x.jpg' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-IdxG0rzm3CjlqMbgKqMSGHrXds3WGp4n8DdPY3BPA&s' text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
      </Row>
    </Container>
  );
}


export default BootstrapTest;