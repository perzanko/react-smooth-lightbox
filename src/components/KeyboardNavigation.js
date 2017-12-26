import React from 'react';


/**
 * Renders arrow navigation. It comunicates with parent main component.
 * 
 * @class KeyboardNavigation
 * @extends {React.Component}
 */
export default class KeyboardNavigation extends React.Component {


  /**
   * Pin keyboard listener after component mounted.
   * 
   * @memberof KeyboardNavigation
   */
  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      const { code } = e;
      switch (code) {
        case 'ArrowLeft':
        case 'ArrowDown':
        case 'Backspace':
          e.preventDefault();
          this.handleChangePrev();
          break;
        case 'ArrowRight':
        case 'ArrowUp':
        case 'Space':
          e.preventDefault();
          this.handleChangeNext();
          break;
        default:
      }
    }, false);
  }


  /**
   * Handle click button prev event
   * 
   * @param {any} e 
   * @memberof KeyboardNavigation
   */
  handleChangePrev(e) {
    const { onChange } = this.props;
    if (onChange) onChange('PREV');
  }


  /**
   * Handle click button next event
   * 
   * @param {any} e
   * @memberof KeyboardNavigation
   */
  handleChangeNext(e) {
    const { onChange } = this.props;
    if (onChange) onChange('NEXT');
  }


  render() {
    return '';
  }
}