const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

const calculateAverageMarks = (arr) => {
    const result  = arr.reduce((a, b) => (a + b)) / arr.length
    console.log(result)
    return result
}

const calculateStudentAverageMark = (student) => {
const marks = student.marks
calculateAverageMarks(marks)
}
 calculateStudentAverageMark(students[1]);

const calculateGroupAverageMark = (arr) => {
    const allMarks = arr.map(item => item.marks).flat()
    calculateAverageMarks(allMarks);
}
 calculateGroupAverageMark(students)



