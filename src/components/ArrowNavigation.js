import React from 'react';


/**
 * Renders arrow navigation. It comunicates with parent main component.
 * 
 * @class ArrowNavigation
 * @extends {React.Component}
 */
export default class ArrowNavigation extends React.Component {


  /**
   * Creates an instance of ArrowNavigation.
   * @param {any} props 
   * @memberof ArrowNavigation
   */
  constructor(props) {
    super(props);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
  }


  /**
   * Handle click button prev event
   * 
   * @param {any} e 
   * @memberof ArrowNavigation
   */
  handleClickPrev(e) {
    const { onChange } = this.props;
    if (onChange) onChange('PREV');
  }


  /**
   * Handle click button next event
   * 
   * @param {any} e 
   * @memberof ArrowNavigation
   */
  handleClickNext(e) {
    const { onChange } = this.props;
    if (onChange) onChange('NEXT');
  }


  render() {
    return (
      <div className="smooth-lightbox__arrow-navigation">
        <button
          onClick={this.handleClickPrev}
          className="smooth-lightbox__arrow-navigation__button prev"
        >
          <span>Prev</span>
        </button>
        <button
          onClick={this.handleClickNext}
          className="smooth-lightbox__arrow-navigation__button next"
        >
          <span>Next</span>
        </button>
      </div>
    );
  }
}