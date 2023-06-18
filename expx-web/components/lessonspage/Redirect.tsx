import React, { useEffect, useState } from 'react';

const Redirect = () => {
  const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const urlName = url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}`)
      .then((response) => response.json())
      .then((data) => {
        setImageSrc(data?.data?.image?.url);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, [url]);

  const calculateThumbnailWidth = () => {
    const containerWidth = document.getElementById('white-container')?.offsetWidth;
    return containerWidth ? `${containerWidth / 4}px` : '0px';
  };

  return (
    <div className="bg-gray-200 rounded-3xl w-9/12 max-h-80-percent overflow-y-auto custom-scrollbar">
      <div className="py-8 flex items-center justify-center">
        <div
          id="white-container"
          className="bg-white rounded-xl px-0 py-0 w-11/12 h-9/12 overflow-y-auto custom-scrollbar border-3 border-gray-700 flex"
        >
          {imageSrc && (
            <img
              src={imageSrc}
              alt="Thumbnail"
              className="h-full"
              style={{ width: calculateThumbnailWidth(), objectFit: 'fill' }}
            />
          )}
          <div className="ml-4 flex flex-col py-5 px-4">
            <div className="text-gray-500 font-semibold">{urlName}</div>
            <h2 className="text-black font-semibold text-2xl mt-2">Dancing tutorial 101</h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed, aliquid sit adipisci officiis
              excepturi sint ipsa, amet commodi officia doloremque earum optio fugit repellendus et expedita temporibus
              omnis. Ipsa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
