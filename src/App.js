import logo from './logo.svg';
import './App.css';
import MyHeader from './MyHeader'; // 컴포넌트 사용할 때 import 해준다
import MyFooter from './MyFooter';
import Counter from './Counter';


// 보통 최상위 요소를 "App"이라고 한다

function App() {
  let name = "Counter";
  
  return (
    <div className="App">
      {/* 아래처럼 "자식"으로 추가해야 화면에 렌더링된다 */}
      <MyHeader /> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <h2>Hi React {name}</h2>
      </header>
      <MyFooter />
    </div>
  );
}

// 앱을 내보내면 다른 파일에서 import 해서 사용가능하도록 한다
// export default 1개만 내보낼 수 있다
export default App;
