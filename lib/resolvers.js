
const courses = [
  {
    _id: '1',
    title: 'Mi titulo',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  },
  {
    _id: '2',
    title: 'Mi titulo 2',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  },
  {
    _id: '3',
    title: 'Mi titulo 3',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  }
];

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => {
      const course = courses.find(course => course._id === args.id)
      return course
  }
},
}