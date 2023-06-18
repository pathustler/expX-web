import React, { useEffect, useState } from 'react';

const Redirect = () => {
  const url = 'https://www.youtube.com/watch?v=uoJwt9l-XhQ';
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
    
    <div className="bg-gray-100 rounded-3xl w-7/12 max-h-80-percent overflow-y-auto custom-scrollbar">
      <div className="py-8 flex items-center justify-center">
        <a href={url}
        target='__blank'
          id="white-container"
          className="bg-white rounded-2xl px-0 py-0 w-11/12 h-9/12 border-2 border-gray-200 flex"
        >
            {imageSrc && (
            <img
              src={imageSrc}
              alt="Thumbnail"
              className='cover-image rounded-l-2xl'
              style={{ width: calculateThumbnailWidth(), objectFit: 'cover' }}
            />
          )}
  
          
          <div className="ml-4 flex flex-col py-8 px-6 gap-2">
            <div className="text-gray-400 text-sm font-semibold">{urlName}</div>
            <h2 className="text-black font-semibold text-2xl mt-2">Dancing tutorial 101</h2>
            <p className="text-gray-400 text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed, aliquid sit adipisci officiis
              excepturi sint ipsa, amet commodi officia doloremque earum optio fugit repellendus et expedita temporibus
              omnis. Ipsa.
            </p>
          </div>
        </a>
      </div>
    </div>
    
  );
};

export default Redirect;
