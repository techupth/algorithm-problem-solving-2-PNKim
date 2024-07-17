function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  return students.indexOf(searchStudent);
}

const students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
const searchStudent = "John";
console.log(findStudentIndex(students, searchStudent));

// ตอบคำถามตรงนี้จ้า
// O(log n) เนื่องจากรอบการทำงานของ binary search จะเพิ่มตามขนาดของข้อมูลในลักษณะ log n ฐาน 2
