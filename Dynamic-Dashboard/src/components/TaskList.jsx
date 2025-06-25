const TaskList = () => {

let lists = [
    {id: 1, taskName: "walk the dog", completed: true},
    {id: 2, taskName: "do the dishes", completed: true},
    {id: 3, taskName: "clean the kids", completed: false}
];


let taskList = 
    lists.map((list) => {
    return <li
        style = {{color: list.completed ? " green": "white"}}
         key={list.id}>
        {list.taskName}
        {list.completed ? "✅ ": " ❌"}
        </li>; 
      
});
let completedTasks = lists.filter(list => list.completed).length

return (
    <main>
        {taskList}
        <h4>Number of Completed Tasks</h4>
        {lists.length === 0 ? (
            <p>No tasks completed</p>
        ) : (
            <p>
            {completedTasks} completed {completedTasks === 1 ? 'task' : 'tasks'} out of {lists.length} total.
            </p>
        
        )}
        
    </main>
)
 
};


export default TaskList;