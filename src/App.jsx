import { useEffect, useState } from "react";
import { dataToDos } from "./data/dataToDos";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const setAndGetPosts = () => {
      setLoading(true);
      setPosts(dataToDos);
      setLoading(false);
    };

    setAndGetPosts();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <h1 className="flex justify-center mb-5 text-amber-500 z-10  text-4xl">
        my to dos:
      </h1>
      <div className="w-full h-[50rem] relative">
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default App;
