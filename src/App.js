import './App.css';
import { Button, Nav, Navbar, Container} from 'react-bootstrap';

// * bootstrap
// 상단바, 모달, 버튼 등 맘대로 갖다쓸수있음
// index.html에 <link> 추가하거나 app.js에 import하면됨
// 복붙하면 되고, className으로 커스터마이징 가능함


function App() {
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">밤무리상점</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
