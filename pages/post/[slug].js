import Author from "@/components/Author";
import CommentForm from "@/components/CommentForm";
import Comments from "@/components/Comments";
import { getPostDetails, getPosts } from "@/services";
import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const PostDetails = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "heading-two":
        return (
          <h2 key={index} className="text-2xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    post && (
      <>
        <Head>
          <title>{`${post.title} | Yay CMS`}</title>
        </Head>
        <div className="bg-slate-50 rounded-md my-4 mx-1 p-1">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            width={600}
            height={400}
            className="object-cover w-full rounded-md"
          />
          <div className=" flex m-2 gap-2 md:gap-6 flex-wrap ">
            <div className="flex items-center gap-2">
              <Image
                alt={post.author.name}
                src={post.author.photo.url}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{moment(post.createdAt).format("DD/MM/YYYY")}</span>
            </div>
          </div>
          <div className="p-2 text-3xl font-bold animate-bounce">
            {post.title}
          </div>
          <div className="p-2">
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) =>
                getContentFragment(itemindex, item.text, item)
              );

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </div>
        </div>

        <Author author={post.author} />
        <CommentForm slug={post.slug}/>
        <Comments slug={post.slug}/>
      </>
    )
  );
};
export async function getStaticProps({ params }) {
  const post = await getPostDetails(params.slug);
  return {
    props: { post },
  };
}
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
export default PostDetails;
