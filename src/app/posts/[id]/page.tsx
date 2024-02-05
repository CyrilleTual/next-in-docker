/// on recupère les données dynaùmiquement
const fetchPost = async (postId: string) => {
  const post = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    method: "GET",
    next: {
      revalidate: 1,
      tags: ["posts"],
    },
  });
  console.log("lknjk");
  return post.json();
};

type PostType = {
  id: number;
  title: string;
  description: string;
  content: string;
};

let post: PostType;

// export async function generateMetadata({ params }: any) {
//   const res = await fetchPost(params.id);
//   post = res.post;
//   return {
//     title: post.title,
//     description: post.description,
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       url: `/posts/${params.id}`,
//     },
//   };
// }

export default async function PostId({ params }: { params: { id: any } }) {
  const fetchPost = async (postId: string) => {
    const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: "GET",
    });
    return await res.json();
  };

  const res = await fetchPost(params.id);
  post = res.post;

  return (
    post &&
    post.title && (
      <div>
        PostId {params.id} titre: {post.title}
      </div>
    )
  );
}
