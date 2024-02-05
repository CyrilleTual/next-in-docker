"use client";

import { useEffect, useState } from "react";

type PostType = {
  id: number;
  title: string;
  description: string;
  content: string;
};

export default function PostId({ params }: { params: { id: string  } }) {
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    try {
      const fetchPost = async (postId: string) => {
        const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
          method: "GET",
        });
        setPost(await res.json());
      };

      fetchPost(params.id);
    } catch (error) {
      console.log("error");
    }
  }, [params.id]);

  return (
    post && (
      <div>
        PostId {params.id} titre: {post.title}
      </div>
    )
  );
}
