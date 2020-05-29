// function createCouter() {
//   let counter = 0;
//   const myFn = function () {
//     counter += 1;
//     return counter;
//   };
//   return myFn;
// }

// const icrement = createCouter();

// const c1 = icrement();
// const c2 = icrement();
// const c3 = icrement();

// console.log(c1, c2, c3);



function useState(initVal) {
  let _val = initVal;
  const state = () => _val;
  const setState = newVal => {
  _val = newVal;
  }
  return [state, setState];
}
const [count, setCount] = useState(1);
console.log(count());
setCount(2);
console.log(count());