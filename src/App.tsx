import './App.css';
import { useFetchListBlogs } from './blog/hooks';
function App() {
  const { isPending, isError, data, error } = useFetchListBlogs();
  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(data);
  
  return (
    <>
      <h1>Blog List</h1>
      <ul>
        {data?.map((blog) => (
          <li key={blog.id}>
            {blog.name}
            <br />
            <img src={blog.photo} alt="" />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
