import './App.css';
import { Button, Nav, Navbar, Container} from 'react-bootstrap';
import bg from './img/bg.png';

// * bootstrap
// 상단바, 모달, 버튼 등 맘대로 갖다쓸수있음
// index.html에 <link> 추가하거나 app.js에 import하면됨
// 복붙하면 되고, className으로 커스터마이징 가능함

// * img
// 불러올때는 import로 js로 불러오거나 css파일로 불러오거나
// import안하는 법 : public폴더에 이미지 보관가능
// 리액트는 사이트 발행전에 번들링을 하는데, public파일은 압축안됨
// public폴더 이미지 사용할땐 그냥 src="/logo.png" 이렇게 쓰면 편함
// <img src={process.env.PUBLIC_URL + '/logo192.png'} /> 서브경로 문제를 위해 public 쓰면 이렇게쓰는게 더 좋음


function App() {
  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">밤무리상점</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' style={{backgroundImage: 'url('+ bg +')'}}></div>
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
              <h4>상품명</h4>
              <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
              <h4>상품명</h4>
              <p>상품설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
