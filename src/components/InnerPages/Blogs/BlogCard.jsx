import React from "react";

function BlogCard({ title, description, imageUrl, isLarge = false }) {
  return (
    <a
      href="#"
      className={`group block overflow-hidden ${
        isLarge ? "md:grid md:grid-cols-2 md:gap-8" : ""
      }`}
    >
      <div
        className={`relative ${
          isLarge ? "aspect-[16/9]" : "aspect-[4/3]"
        } overflow-hidden rounded-lg`}
      >
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className={`mt-4 ${isLarge ? "md:mt-0" : ""}`}>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </a>
  );
}

export default BlogCard;
