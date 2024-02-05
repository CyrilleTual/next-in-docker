import { NextRequest, NextResponse} from "next/server";

type PostType = {
    id: number,
    title: string,
    description: string,
    content: string
};

const posts: PostType[] =  [{
    id:121,
    title: "hello world",
    description: "my first post ",
    content: "bla bla  bla pour beaucoup"
}];


export async function GET (request:NextRequest, context:any){
    const {params} = context;

   const  post = posts.find((post) => post.id.toString() === params.id);

    return NextResponse.json({
        post: posts.find ((post)=>post.id.toString()===params.id)
    })
}