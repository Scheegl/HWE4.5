const otherObj = { first: 7, second: 'something' };
const d = 'seven'
const b = 'ban'
function oneFunc(a, otherObj)
{ return a in otherObj; }
console.log(oneFunc(d, someObj))
console.log(oneFunc(b, someObj))