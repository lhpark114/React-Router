import React from 'react';

export default function VideoDetail() {
  const { videoId } = useParams();
  console.log(videoId);
  return <div>VideoDetail {videoId} </div>;
}