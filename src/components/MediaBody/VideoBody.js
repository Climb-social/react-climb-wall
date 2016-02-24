import React, { PropTypes } from 'react';

const VideoBody = ({
  url,
  }) => {
  return (
    <div className='Climb__Video'>
      <video controls>
        <source src={ url }
                type="video/mp4" />
      </video>
    </div>
  );
};

VideoBody.propTypes = {
  url: PropTypes.string.isRequired
};

export default VideoBody;