

var students = [{ name: "bilal" }, { name: "usama" }, { name: "usman" }, { name: "muneeb" }, { name: "ahmed" }];
console.log("students=>", students)
students.forEach(function (data, index) {
    console.log(data.name)
})


students[0].name = "sir bilal";
students.splice(1,1);
console.log(students)


// console.log("students=>" , students)