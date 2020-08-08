const student = [
  {id: 1, name: 'Al Amin'},
  {id: 2, name: 'Munna'},
  {id: 3, name: 'Shakil'},
  {id: 4, name: 'Prottoy'},
  {id: 5, name: 'Saiful'}
];

for (let i = 0; i < student.length; i++) {
  const studentName = student[i].name;
  console.log(studentName);
}

const ids = student.map(x => x.id);
console.log(ids);
