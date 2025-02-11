function Posts({ posts, loading }) {
  // const { id, title, body } = posts;
  if (loading) {
    return <h2 className="mt-[200px] text-amber-500">loading...</h2>;
  }
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-2">
      {posts.map((post) => (
        <div className="m-[2rem] w-[12rem] h-[20rem] rounded-2xl bg-orange-500" key={post.id}>
          <h3 className=" bold text-3xl text-amber-400">{post.title}</h3>

          <p className="text-sm italic text-green-300">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
