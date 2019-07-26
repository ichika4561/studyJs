// const b = () =>{b["aaa"]
//  return "hello"
// }

// {aaa :function (){
//     return "hello"
// }

b = { aaa:function (){
    console.log("こんにちは");
    return "hello"
}}

const d = b["aaa"]();

// console.log(b["aaa"]());

console.log (d);