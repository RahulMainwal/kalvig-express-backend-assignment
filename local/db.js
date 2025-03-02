let localDbInstance = [];

const localDb = {
 getTodo: () => {
  return {
   todo: localDbInstance,
   total: localDbInstance.length,
  };
 },
 postTodo: (data) => {
  localDbInstance.push(data);
  return data;
 },
 deleteTodo: (id) => {
  const filterTodoData = localDbInstance.filter((todo) => todo.id !== id);
  return (localDbInstance = filterTodoData);
 },
};

export default localDb;
