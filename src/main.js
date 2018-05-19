import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'babel-polyfill';

// example data
import { source } from './data/source';

// styles
import './styles/main.scss';

// components
import Img from './components/Img';
import ArrowNavigation from './components/ArrowNavigation';
import KeyboardNavigation from './components/KeyboardNavigation';
import ThumbnailNavigation from './components/ThumbnailNavigation';

/**
 * 
 * 
 * @class SmoothLightbox
 * @author perzanko - Kacper Perzankowski
 * @extends {React.Component}
 */
class SmoothLightbox extends React.Component {


  /**
   * Creates an instance of SmoothLightbox.
   * @param {object} props 
   * @author perzanko - Kacper Perzankowski
   * @memberof SmoothLightbox
   */
  constructor(props) {
    super(props);
    this.state = {
      source: props.source,
      isOpen: typeof props.isOpen !== 'undefined' ? props.isOpen : true,
      isAnimation: typeof props.isAnimation !== 'undefined' ? props.isAnimation : true,
      isKeyboardNavigation: typeof props.isKeyboardNavigation !== 'undefined' ? props.isKeyboardNavigation : true,
      isThumbnailNavigation: typeof props.isThumbnailNavigation !== 'undefined' ? props.isThumbnailNavigation : true,
      isArrowNavigation: typeof props.isArrowNavigation !== 'undefined' ? props.isArrowNavigation : true,
      isInfinite: typeof props.isInfinite !== 'undefined' !== 'undefined' ? props.isInfinite : true,
      isAutoplay: typeof props.isAutoplay !== 'undefined' ? props.isAutoplay : false,
      autoplayDuration: typeof props.autoplayDuration !== 'undefined' ? props.autoplayDuration : 5000,
      startIndex: typeof props.startIndex !== 'undefined' ? props.startIndex : 0,
      animationType: typeof props.animationType !== 'undefined' ? props.animationType : 'slide',
      animationDuration: typeof props.animationDuration !== 'undefined' ? props.animationDuration : 320,
      animationTimingFunction: typeof props.animationTimingFunction !== 'undefined' ? props.animationTimingFunction : 'cubic-bezier(.33,.93,.39,.83)',
      onOpen: props.onOpen,
      onClose: props.onClose,
      onChange: props.onChange,
      onNextChange: props.onNextChange,
      onPrevChange: props.onPrevChange,
      onOpen: props.onOpen,
      currentSlide: typeof props.startIndex !== 'undefined' ? props.startIndex : 0,
    };
    this.handleChangeSlide = this.handleChangeSlide.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
  }


  componentDidMount() {
    const { isAutoplay } = this.state;
    if (isAutoplay) this.handleAutoplay();
  }


  componentWillReceiveProps(nextProps) {
    const {
      isOpen,
    } = nextProps;
    if (isOpen !== this.state.isOpen) this.setState({ isOpen });
  }


  /**
   * Handle change slide event.
   * 
   * @param {any} direction 
   * @memberof SmoothLightbox
   */
  handleChangeSlide(direction) {
    const { currentSlide, source, isInfinite } = this.state;
    let newCurrentSlide = currentSlide;
    switch (direction) {
      case 'NEXT':
        newCurrentSlide += 1;
        break;
      case 'PREV':
        newCurrentSlide -= 1;
        break;
      default:
    }
    if (isInfinite) {
      newCurrentSlide = newCurrentSlide < 0 ? source.length - 1 : newCurrentSlide;
      newCurrentSlide = newCurrentSlide >= source.length ? 0 : newCurrentSlide;
    } else {
      newCurrentSlide = newCurrentSlide <= 0 ? 0 : newCurrentSlide;
      newCurrentSlide = newCurrentSlide >= source.length -1 ? source.length - 1 : newCurrentSlide;
    }
    
    this.setState({ currentSlide: newCurrentSlide });
  }


  /**
   * Change slide to specified index.
   * 
   * @param {number} index 
   * @memberof SmoothLightbox
   */
  goToSlide(index) {
    if ( index >= 0 && index < this.state.source.length) {
      this.setState({ currentSlide: index });
    }
  }


  /**
   * Handle autoplay slide
   * 
   * @memberof SmoothLightbox
   */
  handleAutoplay() {
    const interval = setInterval(() => this.handleChangeSlide('NEXT'), this.state.autoplayDuration);
  }


  render() {
    const {
      source,
      isArrowNavigation,
      isKeyboardNavigation,
      isThumbnailNavigation,
      isOpen,
      currentSlide,
      animationType,
      animationDuration,
      animationTimingFunction,
    } = this.state;
    if (!isOpen) return '';
    return (
      <div className={`smooth-lightbox ${animationType}`}>
        <div className="smooth-lightbox__wrapper">
          {source.length ? source.map((image) => (
            <Img
              animationDuration={animationDuration}
              animationTimingFunction={animationTimingFunction}
              index={source.indexOf(image)}
              currentSlide={currentSlide}
              key={source.indexOf(image)}
              src={image.url}
              title={image.title}
              caption={image.caption}
            />
          )) : null}
          {isArrowNavigation ? <ArrowNavigation onChange={this.handleChangeSlide}/> : null}
        </div>
        {isKeyboardNavigation ? <KeyboardNavigation onChange={this.handleChangeSlide}/> : null}
        {isThumbnailNavigation ?
          <ThumbnailNavigation
            source={source}
            onChange={this.goToSlide}
            currentSlide={currentSlide}
          />
        : null}
      </div>
    );
  }
}


SmoothLightbox.propTypes = {
  source: PropTypes.array.isRequired,
  
  isOpen: PropTypes.bool,
  isAnimation: PropTypes.bool,
  isKeyboardNavigation: PropTypes.bool,
  isArrowNavigation: PropTypes.bool,
  isThumbnailNavigation: PropTypes.bool,
  isInfinite: PropTypes.bool,
  isAutoplay: PropTypes.bool,

  autoplayDuration: PropTypes.number,
  startIndex: PropTypes.number,
  animationType: PropTypes.string,
  animationDuration: PropTypes.number,
  animationTimingFunction: PropTypes.string,

  // events
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
  onNextChange: PropTypes.func,
  onPrevChange: PropTypes.func,
  onOpen: PropTypes.func,
}

export default SmoothLightbox;


document.getElementById('openclose').addEventListener('click', () => {
  ReactDOM.render(
    <SmoothLightbox
      source={source}
      isInfinite
      isAutoplay={false}
    />,
    document.getElementById('root')
  )
}, false);