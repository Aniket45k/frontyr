import React from "react";

function TagList({ tags }) {
  return (
    <div className="flex-wrap flex mx-auto justify-center">
      {tags.map((tag) => (
        <div key={tag} className="tags bg-blue-200 rounded-md mx-1 text-black p-2 mt-2 inline-flex text-xs">
          {tag}
        </div>
      ))}
    </div>
  );
}

function Tags(props) {


  return (
    <div className="">
      {/* <h1>Tags</h1> */}
      <TagList
        tags={props.tags}
      />
    </div>
  );
}

export default Tags;
