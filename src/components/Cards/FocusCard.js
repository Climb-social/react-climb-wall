import React, { Component } from 'react';
import Timestamp from './Timestamp/Timestamp';
import TextBody from './TextBody/TextBody';
import MediaBody from './MediaBody/MediaBody';
import Publisher from './Publisher/Publisher';
import { propTypes } from './cardDefaults';


class FocusCard extends Component {

  static propTypes = propTypes;

  getFocusType() {
    const { image, videoUrl: video } = this.props;
    return (image || video) ? 'image' : 'text';
  }

  isImageType() {
    return this.getFocusType() === 'image';
  }

  renderMedia() {
    const { image, videoUrl } = this.props;
    return (
      <div>
        <MediaBody image={image} videoUrl={videoUrl} />
      </div>
    );
  }

  renderText() {
    const { author, message, timestamp, link } = this.props;
    return (
      <div>
        <Publisher
          pic={author.picture}
          displayName={author.name}
          profileLink={author.link}
          username={author.username}
        />
        <TextBody
          text={message}
        />
        <Timestamp
          value={timestamp}
          link={link}
        />
      </div>
    );
  }

  render() {
    const { sourceType } = this.props;

    return (
      <div
        className={`
          Climb__Card
          Climb__Card--${sourceType}
          Climb__Card--focus
          Climb__Card--focus--${this.getFocusType()}
        `}
      >
        <div className="Climb__Card--focus__alpha">
          {this.isImageType() ? this.renderMedia() : this.renderText()}
        </div>

        {this.isImageType() ?
          <div className="Climb__Card--focus__beta">
            {this.renderText()}
          </div>
        : null}
      </div>
    );
  }

}

export default FocusCard;
