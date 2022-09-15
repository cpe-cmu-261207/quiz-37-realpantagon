import React from "react";

export default function PostOwner(props) {
  return (
    <div>
      <div>
        <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/profileimages/AK.jpg"
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5">
              Pichayoot Hunchainao 640610653
            </span>
          </div>
          <span>Quiz ยากจังเลยครับ ของ่าย ๆ กว่านี้ได้ไหม #261207</span>
          <div className="d-flex align-items-center gap-1">
            {/* <img src="/like.svg" width={20}></img> */}
            <span className="text-muted"> 😢164 คน</span>
          </div>
          <hr className="m-0" />
        </div>
      </div>
    </div>
  );
}
