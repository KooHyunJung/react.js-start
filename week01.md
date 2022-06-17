## 변수와 상수

### 변수
프로그램이 실행되는 도중에 계속해서 바뀌는 값을 가지는, 이름붙은 저장소.

```
let age = 25;
console.log(age);
```

- <변수 생성시 주의점>
    - 변수명에는 기호를 사용할 수 없다(-, $ 이 두 기호는 사용 가능)
    - 변수명은 문자로 시작해야 한다(숫자로 시작하면 안됨)
    - "예약어"를 피해야 한다(let if = 25 -> if는 예약어)

### 변수 선언하는 여러 키워드
### let, var, const
- *** 다른 자료 찾아보기
- let -> 변수 중복선언 불가능하다
- var -> 변수 중복선언 가능

## 상수
## const
```
const age = 25;
```
- 상수는 변하지 않는 수를 말한다.
    - 상수는 중간에 값을 변경하면 에러가 난다
    - 따라서 선언 후 동시에 초기화를 하지 않으면 에러가 난다


## 자료형과 형 변환
### 자바스크립트의 자료형
자료형 이란 것은 값을 성질에 따라 분류한 것을 말한다.
<img width="765" alt="스크린샷 2022-06-11 오후 5 01 26" src="https://user-images.githubusercontent.com/96563289/173179232-bf527aba-2521-48c3-a37a-5c3a99b5c348.png">

- Primitive Type(원시타입)
    - `let number = 12;`
    - 한번에 하나의 값만 가질 수 있음
- Non-Primitive Type(비 원시 타입)
    - `let array = [1,2,3,4];`
    - 한번에 여러 개의 값을 가질 수 있다
    - 여러 개의 고정되지 않는 동적 공간 사용

### Primitive Type(원시타입)
### 숫자형
- 숫자로 이루어진 자료형

```
let age = 25;
let tall = 185.9;
let inf = Infinity;
let inf2 = -Infinity;
let nan = NaN; // 수학적 연산의 실패
```

### 문자형
- 문자 또는 숫자를 "", ''로 감싸서 사용한다
- `` 으로 감싸면 문자열 안에 변수 작성 가능하다(Template literals)

```
let name = "아롱이";
let name2 = '아롱';
let mame3 = `강아지 이름은 ${name} 입니다`
```

### Boolean
- Boolean 타입은 논리 요소를 나타내며 `true`와 `false` 두 가지의 값을 가진다.

### Null 
- Null 타입은 null 하나의 값만 가질 수 있다.
- 언제 사용? 의도적으로 선언한 변수가 아무 값도 안 가지고 있다고 명시할 때 사용한다.

### Undefined
- 값을 할당하지 않은 변수는 자동으로 undefined 값을 가진다.

### 형 변환
값은 유지하면서 자료형은 변경할 수 있는 형 변환.

```
let numberA = 12;
let nemberB = "2";
console.log(numberA * numberB);
// 24를 출력한다
```

- 숫자와 문자열 곱이었는데 !? 24를 출력 ???
    - 자바스크립트가 문자 "2"를 자동으로 숫자 2로 인지하고 연산을 진행한 것이다.
    - 자바스크립트 엔진은 다른 자료형과의 연산을 수행할 때 적절하게 자료형을 변환하여 값을 출력하는 기능을 가지고 있다.  
    - 이를 `묵시적형변환`이라 한다

- `명시적형변환`
- 프로그래머가 의도적으로 형태를 변형하는 것을 말한다

```
let numberA = 12;
let nemberB = "2";
console.log(numberA + numberB);
// 덧셈을 수행할 경우 numberA를 문자열로 변경하여 122를 출력한다
// 이를 아래처럼 parseInt()를 작성하면 
console.log(numberA + parseInt(numberB));
// 14를 반환한다
```


### 연산자
- 사칙연산을 도와주는 문자(기호)
- 대입 연산자, 산술 연산자, 연결 연산자(문자열 + 문자열), 복합 연산자(a += 10; 파이썬과 동일), 증감 연산자(a++; or ++a;), 논리 연산자(!, &&, || ...) 
- MDN https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators


## 참고자료
- 기본 자료형 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures
- 





