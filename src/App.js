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

//* 파일간 변수공유
// data.js에서 export default 변수명 해서 내보내서
// App.js에서 import 아무이름 from './data.js'해서 씀
// export 여러개하려면 export {a,b}, import {a,b} from './data
// 상품목록 컴포넌트화
// 상품 안 데이터바인딩 잘해오기
// 반복적인 부분은 map반복문 써보기

import './App.css';
import { Button, Nav, Navbar, Container} from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data';
import Cont from './Container'

function App() {

  let [shoes] = useState(data)
  let arr1 = [0,1,2]

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
          {
            shoes.map((el) => {
              return(
                <Cont id = {el.id} title = {el.title} price = {el.price}></Cont>
              );})
          }
        </div>
      </div>
    </div>
  );
}

export default App;
