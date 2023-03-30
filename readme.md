# Typescript

## 기본적인 정보

- TSC 는 타입스크립트를 자바스크립트로 변환해주는 컨파일러, 그리고 코드를 검사하는 역할을 한다
- tsconfig.json 설정에 따라 컨파일을 다르게 한다. 가장 중요한 파일
- type 은 소문자

## Tips

- const 변수는 타입추론을 이용하는게 제일 좋다, 타입추론이 가능한 것들은 타입추론을 그대로 쓰는게 좋다
- typescript 에서 사라지는 부분 기억하기 ( type, as, interface )
- 빈 배열을 선언할때는 항상 type 을 선언해야한다, 빈배열일때 never 가 들어가면 아무것도 못들어옴
- HTML 요소는 Element 라는 type 을 가지고있다
- obj type 들은 뒤에 as const 를 붙여주는게 엄격한 type 을 만들어줌

  `const obj = {a:'123', b: 'hello', c: 'world'} as const;`

- keyof 를 사용하여 객체의 키를 뽑아올수 있다.
- typeof 를 사용하여 객체의 값을 뽑아올수 있다.

  `type key = typeof obj[keyof typeof obj];`

- 좁은 타입은 넓은 타입에 포함될수 있다. 객체의 경우 명시된 타입이 많을수록 좁다고 이해하면 된다.

- 함수의 타입을 선언할때, 매개변수와 메서드에 타입을 void 로 선언해도 다른 타입이 올수 있는건 단순하게 '리턴 값을 신경쓰지 않겠다' 라는 의미이다. 원칙적으로는 void 는 return 값을 넣으면 안된다.

  `function a(callback: () => void): void{};`

  `a(() => { return '3'; });`

- 함수 자체의 리턴 타입을 void 로 선언하는건 'return 이 없다' 라는 의미이다.

  `function a(param: string): void { return };`

- 함수를 body 없이 타입만 선언해두고 아래 라인에서 타입에 맞는 구현부를 만들어주면 된다. 구현부를 만들기 싫을때는 함수 앞에 declare 를 붙여준다. declare 는 자바스크립트로 변환될때 사라진다.

- any 는 타입 포기, unknown 은 나중에 as 를 사용해서 타입 강화
- unknown 일때 아니면 as 는 웬만하면 쓰지않는다.
- typeof, Array.isArray(), instanceof, in, object key 값 등을 사용해서 타입가드 (js 문법)
- 커스텀 함수로 타입가드를 할수도 있다.
- {}, Object 는 null, undefined 를 제외한 모든 타입을 뜻한다. (object 와 다른 타입)
- 옵셔널 (?) 은 속성 뒤에 붙여준다.

## Type 과 Interface

- type 은 간단한 타입 설정, interface 는 객체지향 타입 설정
- type 의 확장

  `type Animal = {breath: true};`

  `type Poyouryu = Animal & {breed: true};`

  `type Human = Poyouryu & {think: true};`

  `const JUNG: Human = {breath: true, breed: true, think: true};`

- interface 의 확장

  `interface A {breath: true};`

  `interface B extends A {breed: true};`

  `const b: B = {breath: true, breed: true};`

- type 중복선언 불가능, interface 중복선언 가능 ( 선언 할때마다 합쳐짐 ) 확장성이 좋음

## readonly, 인덱스드 시그니처, 맵드 타입스

- readonly 는 객체 내부 타입이 바뀌는걸 막아준다.

  `type A = { a: string, b: number };`

  `const a: A = {a: 1, b: 2}; // 변경 불가능`

- 인덱스드 시그니처는 편리하다.

  `type A = { [key: string]: string };`

  `const a: A = {a:'a', b:'b', c:'c'};`

- 맵드 타입스는 더 좁게 사용할수 있다.

  `type B = 'HUMAN' | 'MAMA' | 'PAPA';`

  `type A = {[key in B]: string};`

  `const a: A = {HUMAN: 'human', MAMA: 'mama', PAPA: 'papa'};`

## Type 을 변수화 하는 Generic

- 함수를 호출할때 타입이 정해지게 하기 위해 제네릭을 쓴다.
- 함수명 뒤에 <> 로 선언한다.
- 제네릭을 강화하려면 extends 를 사용한다.
- 제네릭을 여러개 만들면서 각각 다른 제한을 둘수 있다.

  `function add<T extends string, K extends number>(a:T, b: K): T`

  `const add = <T>(a: T):T => a;`
