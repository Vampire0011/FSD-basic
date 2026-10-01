/*
question 1  : Develop a Student Grade
Calculator
using ES6+
features such
as arrow
functions, template literals, de-structuring, and spread operators.
*/

const students = [
    { name: "Alice", marks: [85, 90, 78] },
    { name: "Bob", marks: [72, 68, 80] },
    { name: "Charlie", marks: [95, 88, 92] }
];

const calculateGrade = (marks) => {
    const average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

    if (average >= 90) return "A+";
    if (average >= 80) return "A";
    if (average >= 70) return "B";
    if (average >= 60) return "C";
    if (average >= 50) return "D";
    return "F";
};

const displayStudent = ({ name, marks }) => {
    const [first, ...remaining] = marks;
    const allMarks = [first, ...remaining];
    const total = allMarks.reduce((sum, mark) => sum + mark, 0);
    const average = total / allMarks.length;
    const grade = calculateGrade(allMarks);

    return `
        Student: ${name}
        Marks: ${allMarks.join(", ")}
        Average: ${average.toFixed(2)}
        Grade: ${grade}
    `;
};

students.forEach(student => {
    console.log(displayStudent(student));
});