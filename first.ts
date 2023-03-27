/**
 * 타입스크립트는 변수, 매개변수, 리턴값에 타입을 붙이는것
 */

// 변수 : 변수 뒤
const a: number = 5;
const b: string = "5";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = true;

// 함수 : 매개변수, 리턴 값
type Add = (x: number, y: number) => number;

// interface Add {
//     (x: number, y:number): number;
// }

function add(x: number, y: number): number {
  return x + y;
}

const arrowAdd = (x: number, y: number): number => {
  return x + y;
};

const hasTypeArrowAdd: Add = (x, y) => {
  return x + y;
};

// 배열, 객체 : 변수 뒤
const arr: string[] = ["a", "b"];
const obj: { name: string; age: number } = { name: "jung", age: 33 };

// 튜플
const tuple: [number, number, string] = [1, 2, "hello"];

// 원시값 타입
const isTrue: true = true;
