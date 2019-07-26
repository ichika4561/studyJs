// const name = "Liu shenli";
// const age = 42;
// const gender = 'male';
// console.log(age);

// const name2 = "iwaki";
// const age2 = 22;
// const gender2 = 'female';

// console.log(age2);

// わかりやすくするためには？

const liu = {
    name: 'Liu shenli',
    age: 42,
    gender: 'male',
}


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

const employees = [liu, Iwaki, zhang];
// // 100回のif elseはfor文出かける。
// const getAgeName = (name) =>{
//   for (const employee of employees){
//       if (name === employee.name)
//       {return employees.name}
//   }
// };

// const getAgeName = (name) => employees.filter(empoyee => employee.name === name)[0]
// // 引数は1行かつ一文字なら、（）は不要。
// // filterは配列で返す。
// console.log(employees.filter(empoyee => employee.name === 'Liu shenli'));
// console.log(employees.filter(empoyee => employee.name === 'Liu shenli')[0]);
// console.log(employees.filter(empoyee => employee.name === 'Liu shenli')[0].age);

// find はデータを一つだけ、オブジェクト。
// 名前はユニークデータのため、FIND
// 女性だと複数のデータが出てくるので、filter
// const getAgeName = (name) => employees.find(employee => employee.name === name).age;
// console.log(getAgeName('Liu shenli'));

const getMaleAgeSum = () => employees.filter(employee => employee.gender === 'male')
                                    // fileterにてオブジェクト
                                     .map(employee => employee.age)
                                    // 配列からオブジェクトを出している。
                                     .reduce((a, b) => a + b);
                                    // reduceにて単なる数字をだす。
console.log(getMaleAgeSum());
