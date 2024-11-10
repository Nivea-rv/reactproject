import React from 'react';

const Video = () => {
  return (
    <div>
     
      <video id='video' controls>
        <source src="https://firebasestorage.googleapis.com/v0/b/vijay-storage.appspot.com/o/jsp.mp4?alt=media&token=7262c8fc-2949-4acf-9905-f6cedfb974c5" type="video/mp4" />
        <source  src="https://firebasestorage.googleapis.com/v0/b/vijay-storage.appspot.com/o/jsp2.mp4?alt=media&token=40253695-dc6e-461b-93f3-fb608a1eb117" type="video/mp4"/>
       
      </video>
    </div>
  );
};

export default Video;
