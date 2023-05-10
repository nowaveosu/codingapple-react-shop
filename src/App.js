/* eslint-disable */
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

//* react-router-dom
// index.js에서 BrowserRouter로 App.js를 감싸준다. 
// navigate, nested routes 등 쓸수있음
// Outlet쓰면 /about/members 중 멤버스가 들어갈자리를 정해줄수있음
// 비슷한 페이지 여러개 필요하면 url파라미터
import './App.css';
import { Button, Nav, Navbar, Container} from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data';
import {Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">밤무리상점</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg' style={{backgroundImage: 'url('+ bg +')'}}></div>
            <div className='container'>
              <div className='row'>
                {
                  shoes.map((el,i) => {
                    return(
                      <Card shoes={shoes[i]} i={i}></Card>
                    );})
                }
              </div>
            </div>
          </>
        }/>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>
        {/* <Route path='*' element={<div>없는 페이지입니다</div>}/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버임</div>}/>
          <Route path='location' element={<About/>}/>  
        </Route> */}

      </Routes>

    </div>
  );
}


export default App;
