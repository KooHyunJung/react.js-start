// JSX 문법
// js + html 혼합해서 사용하는 표현법
// 공통적으로 써야 하는 요소들을 "컴포넌트"라는 이름으로 분활하여 재사용 가능
// 반드시 최상위 태그로 다른 태그를 묶어 줘야 한다(부모-자식)
// 확장자를 .jsx 안해도 됨. 기본적으로 js 위에서 동작하기 때문.
// html 꼭 닫아줘야 한다 -> <div></div> === <div />
// 가장 밖같에 감싸고 있는 < > 요소가 부모요소이다

const MyHeader = () => {
    return <header>Header</header>
};

export default MyHeader;   