import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner
          username="Pichayoot Hunchainao 640610653"
          postText="Quiz ยากจังเลยครับ ของ่าย ๆ กว่านี้ได้ไหม #261207"
          userImagePath="/profileImages/AK.jpg"
          likeNum="165"
        />
        {comments.map((x, i) => {
          return (
            <Comment
              key={i}
              username={x.username}
              commentText={x.commentText}
              userImagePath={x.userImagePath}
              likeNum={x.likeNum}
              replies={x.replies}
            />
          );
        })}
        {/* ------------------ */}
      </div>
    </div>
  );
}
