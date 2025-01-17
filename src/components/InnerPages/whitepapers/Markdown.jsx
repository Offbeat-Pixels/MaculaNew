import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Markdown = ({ data }) => {
  if (!data) {
    return <p>No content available</p>; // Handle empty or missing content
  }

  return (
    <section className="p-6 w-full ">
      <div className="prose prose-sm sm:prose-xl lg:prose-lg xl:prose-xl max-w-7xl mx-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {data}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default Markdown;
