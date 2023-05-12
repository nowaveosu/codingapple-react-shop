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

//* css
//한 컴포넌트에만 css 적용하고싶으면
//컴포넌트명.module.css

//* useEffect 
// 컴포넌트의 Lifecycle
// 페이지에 장착되기도하고 (mount)
// 가끔 업데이트도 되고(update)
// 필요없으면 제거되고 (unmount)
// 실행할코드를 3가지중 하나에 갈고리를 달아놓을수 있음
// usEffect로 할수있음
// mount, update(재렌더링)될때마다 useEffect내 코드를 실행해줌
// useEffect 안에 있는 코드는 html렌더링 후에 동작해서
// 오래걸리는 연산, 서버에서 데이터 가져오는 작업등을 넣으면 되겠다.
// 동적인 ui는 직접 다루는게 아니라. 그걸 다루는 스위치(state)를 만들어서 삼항연산자를 활용
// useEffect 두번째인자는 []안에 있는 변수가 변할때마다 1번째 함수가 실행이됨 
// 빈배열로 두면 맨처음에만 실행되고, 빈배열 없으면 맨처음(mount)에만 실행됨
// useEffect () => { return()=>{여기는 기존코드제거코드}}

//* ajax
// 서버에 데이터 요청 하는법
// 서버 : 데이터 요청하면 데이터 보내주는 프로그램
// 요청방법(GET/POST , URL)
// 요청결과는 .then((result)=>{})
// axios.post('url',{name: 'kim'})
// 동시에 url여러개에 요청
// Promise.all([axios.get(),axios.get()])


import './App.css';
import { Button, Nav, Navbar, Container} from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data';
import {Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';
import axios from 'axios';

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

  let [shoes,setShoes] = useState(data)
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
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result)=>{
                  console.log(result.data)
                  setShoes([...shoes,...result.data])
                })
                .catch(()=>{
                  console.log('실패함')
                })
              axios.post('url',{name: 'kim'})
            }}>더보기</button>
          </>
        }/>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>
      </Routes>

    </div>
  );
}


export default App;
