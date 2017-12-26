import React from 'react';


/**
 * Renders a figure element.
 * 
 * @export
 * @param {object} props
 * @returns 
 */
export default class Img extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: props.currentSlide,
      index: props.index,
      title: props.title,
      src: props.src,
      caption: props.caption,
      animationDuration: props.animationDuration,
      animationTimingFunction: props.animationTimingFunction,
      spanMaxHeight: 0,
    }
  }


  componentDidMount() {
    const figure = document.getElementById(`smooth-lightbox-slide__${this.state.currentSlide}`);
    this.setState({ spanMaxHeight:  figure.clientHeight })
  }


  componentWillReceiveProps(nextProps) {
    const { currentSlide, src, title, caption, index } = nextProps;
    if (currentSlide !== this.state.currentSlide) this.setState({ currentSlide });
    if (title !== this.state.title) this.setState({ title });
    if (src !== this.state.src) this.setState({ src });
    if (caption !== this.state.caption) this.setState({ caption });
  }


  render() {
    const { currentSlide, src, title, caption, index, animationDuration, animationTimingFunction, spanMaxHeight } = this.state;
    let className = '';
    switch (index) {
      case currentSlide:
        className = ' active';
        break;
      case currentSlide - 1:
        className = ' before';
        break;
      case currentSlide + 1:
        className = ' after';
        break;
      default:
        className = '';
    }
    return (
      <figure
        id={`smooth-lightbox-slide__${currentSlide}`}
        className={`smooth-lightbox__figure${className}`}
        style={{ transition: `all ${animationDuration}ms ${animationTimingFunction}` }}
      >
        <span>
          <img
            className="smooth-lightbox__figure__img"
            src={src}
            alt={`${title ? title : ''} ${caption ? caption : ''}`}
            style={{ maxHeight: spanMaxHeight }}
          />
          {title || caption ? 
            <figcaption className="smooth-lightbox__figure__figcaption">
              <h5>{title}</h5>
              <p>{caption}</p>
            </figcaption>
          : null}
        </span>
      </figure>
    );
  }
}