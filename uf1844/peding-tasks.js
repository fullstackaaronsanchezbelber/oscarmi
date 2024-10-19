
function filterPendingTaks(tasks) {
  return tasks.filter(task => !task.completed)
}

const tasks = [
  { task: "Wash the dishes", completed: true },
  { task: "Exercise", completed: false },
  { task: "Study programming", completed: false },
  { task: "Clean the house", completed: true },
];

const result = filterPendingTaks(tasks);
console.log(result);
/**
 * // Pending tasks
  { task: "Exercise", completed: false },
  { task: "Study programming", completed: false }
 */




  

// OUTPUT
//   PS C:\Users\asanchezbelb\Desktop\examen-modulo-mf0492_3-students> cd .\uf1844\
// PS C:\Users\asanchezbelb\Desktop\examen-modulo-mf0492_3-students\uf1844> node peding-tasks.js 
// [
//   { task: 'Exercise', completed: false },
//   { task: 'Study programming', completed: false }
// ]
// PS C:\Users\asanchezbelb\Desktop\examen-modulo-mf0492_3-students\uf1844> 