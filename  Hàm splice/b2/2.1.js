
var students = [
    {
        id: 1,
        name: "NguyenVanAnh",
        address: "HaNoi"
    },
    {
        id: 2,
        name: "TranThiKham",
        address: "HaiDuong"
    }
];

console.log(students);
for (let i = 0; i < students.length; i++) {
    if (students[i].id === 2) {
        students.splice(i, 1);
        break;
    }
}
console.log(students);
