// // ストラクト、リストか、MAPかで考える。
// // 関数の中で関数は設定しない。不具合が起きやすく、可読性が悪い。
// // わかりやすくするためには？

// // キーとバリューの書き方がある場合、オブジェクトでもMAPでもかける。
// // バリューには関数も入れられる。
// // 例
// const liu1 = {
//     name: 'Liu shenli',
//     age: 42,
//     getname: () => 'Tanaka',
// }
// console.log(liu2.getname());

// const liu = {
//     name: 'Liu shenli',
//     age: 42,
//     gender: 'male',
// }


const zhang = {
    name: 'Liu shenli',
    age: 42,
    gender: 'male',
}

const Iwaki={
 name: 'iwaki',
 age: 22,
 gender: 'female',
};

class Employee {
  constructor(id, name, age ,gender){
       this.id = id;
       this.realAge = age;
       this.name = name;
       this.gender = gender;
  }

  getAge(){
      return 17;
  };

  get age() {
    return 17
  }
  setName(name){
    this.name = name;
  }
  introduce(){
    console.log(`My name is ${this.name}`)
  }
}
const liu = new Employee(1, 'liu Shengli', 42, 'male');
const iwaki = new Employee(1, 'iwaki Shengli', 42, 'male');

console.log(liu.name);
console.log(liu.getAge());
liu.introduce();


