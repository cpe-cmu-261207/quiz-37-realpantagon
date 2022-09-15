import React from "react";
import { comments } from "../libs/comments";
import Reply from "./Reply";

export default function Comment(props) {
  const comment = comments;

  return (
    <div>
      {/* Entire Comment div */}
      {comment.map((x, i) => {
        return (
          <div className="d-flex gap-2 my-2" key={i}>
            <img
              src={`${x.userImagePath}`}
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <div
              className="rounded rounded-3 p-2"
              style={{ backgroundColor: "#E5E7EB" }}
            >
              <span className="fw-semibold">{x.username}</span>
              <br />
              <span>{x.commentText}</span>
              <div
                className="d-flex align-items-center gap-1"
                style={{ display: x.likeNum > 0 ? "visible" : "hidden" }}
              >
                <img src="/like.svg" width={20}></img>
                <span className="text-muted">{x.likeNum} คน</span>
              </div>
            </div>
          </div>
        );
      })}
      <Reply reply={comment.replies} />
      {/*render Reply here... */}
    </div>
  );
}
