"use client";

import { useState } from "react";
import CollegeLayout from "@/components/college-layout/CollegeLayout";
import ReactPlayer from "react-player";
import "./video-gallery.css";

const videoGallery = [
  {
    id: 1,
    title: "College Annual Function",
    thumbnail: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
    url: "https://youtu.be/x2juH8lbtgM",
  },
  {
    id: 2,
    title: "Campus Tour",
    thumbnail: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
    url: "https://youtu.be/x2juH8lbtgM",
  },
  {
    id: 3,
    title: "Science Exhibition",
    thumbnail: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
    url: "https://youtu.be/x2juH8lbtgM",
  },
  {
    id: 4,
    title: "Sports Day",
    thumbnail: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
    url: "https://youtu.be/x2juH8lbtgM",
  },
  {
    id: 5,
    title: "Guest Lecture",
    thumbnail: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
    url: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
  },
  {
    id: 6,
    title: "Cultural Program",
    thumbnail: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
    url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
  },
];

export default function ProgrammsPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <CollegeLayout>
      <div className="video-gallery-wrapper">

        <h1 className="gallery-title">Video Gallery</h1>

        {/* Grid */}
        <div className="video-grid">
          {videoGallery.map((video) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => setActiveVideo(video.url)}
            >
              <div className="thumb-wrapper">
                <img src={video.thumbnail} alt={video.title} />
                <div className="play-icon">▶</div>
              </div>

              <h3>{video.title}</h3>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
{activeVideo && (
  <div className="video-modal">
    <div className="video-modal-content">

      <button
        className="close-btn"
        onClick={() => setActiveVideo(null)}
      >
        ✕
      </button>

      <ReactPlayer
        src={activeVideo}
        controls
        playing
        width="100%"
        height="100%"
        light={false}
        />

    </div>
  </div>
)}

      </div>
    </CollegeLayout>
  );
}