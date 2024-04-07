export default function todosArr() {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    try {
      const parsedTodos = JSON.parse(storedTodos);

      if (Array.isArray(parsedTodos)) {
        return parsedTodos;
      }
    } catch (error) {
      console.error('Error parsing todos from local storage');
    }
  }
  return [];
}
