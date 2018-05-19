import React from 'react';
import PropTypes from 'prop-types';


const Figure = (props) => {
  const { index, currentSlide, source, onClick } = props;
  return (
    <figure
      onClick={() => onClick(index)}
      className={`smooth-lightbox__thumbnail-navigation__img ${index === currentSlide ? 'active' : ''}`}
    >
      <img
        src={source[index].url}
        style={{ backgroundImage: `url(${source[index].url})` }}
        alt={source[index].title}
      />
    </figure>
  );
}

/**
 * Thumbnail navigation
 * 
 * @class ThumbnailNavigation
 * @extends {React.Component}
 */
class ThumbnailNavigation extends React.Component {


  /**
   * Creates an instance of ThumbnailNavigation.
   * @param {any} props 
   * @memberof ThumbnailNavigation
   */
  constructor(props) {
    super(props);
    this.state = {
      source: props.source,
      currentSlide: props.currentSlide,
    }
    this.handleClick = this.handleClick.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    const { source, currentSlide } = nextProps;
    this.setState({ source, currentSlide });
  }


  handleClick(index) {
    this.props.onChange(index);
  }


  render() {
    const { source, currentSlide } = this.state;
    return (
      <div className="smooth-lightbox__thumbnail-navigation">
        {source[currentSlide - 2] ? <Figure index={currentSlide - 2} source={source} currentSlide={currentSlide} onClick={this.handleClick} /> : null}
        {source[currentSlide - 1] ? <Figure index={currentSlide - 1} source={source} currentSlide={currentSlide} onClick={this.handleClick} /> : null}
        {source[currentSlide] ? <Figure index={currentSlide} source={source} currentSlide={currentSlide} onClick={this.handleClick} /> : null}
        {source[currentSlide + 1] ? <Figure index={currentSlide + 1} source={source} currentSlide={currentSlide} onClick={this.handleClick} /> : null}
        {source[currentSlide + 2] ? <Figure index={currentSlide + 2} source={source} currentSlide={currentSlide} onClick={this.handleClick} /> : null}
      </div>
    );
  }
}


ThumbnailNavigation.propTypes = {
  source: PropTypes.array.isRequired,
  currentSlide: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}


export default ThumbnailNavigation;