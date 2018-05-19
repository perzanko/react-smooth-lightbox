(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom'), require('prop-types'), require('babel-polyfill')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom', 'prop-types', 'babel-polyfill'], factory) :
	(global.SmoothLightbox = factory(global.React,global.ReactDOM,global.PropTypes));
}(this, (function (React,ReactDOM,PropTypes) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

var source = [{
  url: 'https://picsum.photos/999/1000/?random',
  title: 'Lorem ipsum dolor',
  caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ullam.'
}, {
  url: 'https://picsum.photos/1000/999/?random'
}, {
  url: 'https://picsum.photos/999/999/?random',
  title: 'Lorem ipsum dolor',
  caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, vero.'
}, {
  url: 'https://picsum.photos/1000/998/?random',
  title: 'Lorem ipsum dolor',
  caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, officiis.'
}, {
  url: 'https://picsum.photos/998/1000/?random'
}, {
  url: 'https://picsum.photos/998/998/?random',
  title: 'Lorem ipsum dolor',
  caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, accusamus!'
}, {
  url: 'https://picsum.photos/998/999/?random'
}, {
  url: 'https://picsum.photos/999/998/?random',
  title: 'Lorem ipsum dolor',
  caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, perspiciatis.'
}];

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Img = function (_React$Component) {
  inherits(Img, _React$Component);

  function Img(props) {
    classCallCheck(this, Img);

    var _this = possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).call(this, props));

    _this.state = {
      currentSlide: props.currentSlide,
      index: props.index,
      title: props.title,
      src: props.src,
      caption: props.caption,
      animationDuration: props.animationDuration,
      animationTimingFunction: props.animationTimingFunction,
      spanMaxHeight: 0
    };
    return _this;
  }

  createClass(Img, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var figure = document.getElementById('smooth-lightbox-slide__' + this.state.currentSlide);
      this.setState({ spanMaxHeight: figure.clientHeight });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var currentSlide = nextProps.currentSlide,
          src = nextProps.src,
          title = nextProps.title,
          caption = nextProps.caption,
          index = nextProps.index;

      if (currentSlide !== this.state.currentSlide) this.setState({ currentSlide: currentSlide });
      if (title !== this.state.title) this.setState({ title: title });
      if (src !== this.state.src) this.setState({ src: src });
      if (caption !== this.state.caption) this.setState({ caption: caption });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          currentSlide = _state.currentSlide,
          src = _state.src,
          title = _state.title,
          caption = _state.caption,
          index = _state.index,
          animationDuration = _state.animationDuration,
          animationTimingFunction = _state.animationTimingFunction,
          spanMaxHeight = _state.spanMaxHeight;

      var className = '';
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
      return React.createElement(
        'figure',
        {
          id: 'smooth-lightbox-slide__' + currentSlide,
          className: 'smooth-lightbox__figure' + className,
          style: { transition: 'all ' + animationDuration + 'ms ' + animationTimingFunction }
        },
        React.createElement(
          'span',
          null,
          React.createElement('img', {
            className: 'smooth-lightbox__figure__img',
            src: src,
            alt: (title ? title : '') + ' ' + (caption ? caption : ''),
            style: { maxHeight: spanMaxHeight }
          }),
          title || caption ? React.createElement(
            'figcaption',
            { className: 'smooth-lightbox__figure__figcaption' },
            React.createElement(
              'h5',
              null,
              title
            ),
            React.createElement(
              'p',
              null,
              caption
            )
          ) : null
        )
      );
    }
  }]);
  return Img;
}(React.Component);

var ArrowNavigation = function (_React$Component) {
  inherits(ArrowNavigation, _React$Component);

  /**
   * Creates an instance of ArrowNavigation.
   * @param {any} props 
   * @memberof ArrowNavigation
   */
  function ArrowNavigation(props) {
    classCallCheck(this, ArrowNavigation);

    var _this = possibleConstructorReturn(this, (ArrowNavigation.__proto__ || Object.getPrototypeOf(ArrowNavigation)).call(this, props));

    _this.handleClickNext = _this.handleClickNext.bind(_this);
    _this.handleClickPrev = _this.handleClickPrev.bind(_this);
    return _this;
  }

  /**
   * Handle click button prev event
   * 
   * @param {any} e 
   * @memberof ArrowNavigation
   */


  createClass(ArrowNavigation, [{
    key: 'handleClickPrev',
    value: function handleClickPrev(e) {
      var onChange = this.props.onChange;

      if (onChange) onChange('PREV');
    }

    /**
     * Handle click button next event
     * 
     * @param {any} e 
     * @memberof ArrowNavigation
     */

  }, {
    key: 'handleClickNext',
    value: function handleClickNext(e) {
      var onChange = this.props.onChange;

      if (onChange) onChange('NEXT');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'smooth-lightbox__arrow-navigation' },
        React.createElement(
          'button',
          {
            onClick: this.handleClickPrev,
            className: 'smooth-lightbox__arrow-navigation__button prev'
          },
          React.createElement(
            'span',
            null,
            'Prev'
          )
        ),
        React.createElement(
          'button',
          {
            onClick: this.handleClickNext,
            className: 'smooth-lightbox__arrow-navigation__button next'
          },
          React.createElement(
            'span',
            null,
            'Next'
          )
        )
      );
    }
  }]);
  return ArrowNavigation;
}(React.Component);

var KeyboardNavigation = function (_React$Component) {
  inherits(KeyboardNavigation, _React$Component);

  function KeyboardNavigation() {
    classCallCheck(this, KeyboardNavigation);
    return possibleConstructorReturn(this, (KeyboardNavigation.__proto__ || Object.getPrototypeOf(KeyboardNavigation)).apply(this, arguments));
  }

  createClass(KeyboardNavigation, [{
    key: 'componentDidMount',


    /**
     * Pin keyboard listener after component mounted.
     * 
     * @memberof KeyboardNavigation
     */
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('keydown', function (e) {
        var code = e.code;

        switch (code) {
          case 'ArrowLeft':
          case 'ArrowDown':
          case 'Backspace':
            e.preventDefault();
            _this2.handleChangePrev();
            break;
          case 'ArrowRight':
          case 'ArrowUp':
          case 'Space':
            e.preventDefault();
            _this2.handleChangeNext();
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

  }, {
    key: 'handleChangePrev',
    value: function handleChangePrev(e) {
      var onChange = this.props.onChange;

      if (onChange) onChange('PREV');
    }

    /**
     * Handle click button next event
     * 
     * @param {any} e
     * @memberof KeyboardNavigation
     */

  }, {
    key: 'handleChangeNext',
    value: function handleChangeNext(e) {
      var onChange = this.props.onChange;

      if (onChange) onChange('NEXT');
    }
  }, {
    key: 'render',
    value: function render() {
      return '';
    }
  }]);
  return KeyboardNavigation;
}(React.Component);

var Figure = function Figure(props) {
  var index = props.index,
      currentSlide = props.currentSlide,
      source = props.source,
      _onClick = props.onClick;

  return React.createElement(
    'figure',
    {
      onClick: function onClick() {
        return _onClick(index);
      },
      className: 'smooth-lightbox__thumbnail-navigation__img ' + (index === currentSlide ? 'active' : '')
    },
    React.createElement('img', {
      src: source[index].url,
      style: { backgroundImage: 'url(' + source[index].url + ')' },
      alt: source[index].title
    })
  );
};

/**
 * Thumbnail navigation
 * 
 * @class ThumbnailNavigation
 * @extends {React.Component}
 */

var ThumbnailNavigation = function (_React$Component) {
  inherits(ThumbnailNavigation, _React$Component);

  /**
   * Creates an instance of ThumbnailNavigation.
   * @param {any} props 
   * @memberof ThumbnailNavigation
   */
  function ThumbnailNavigation(props) {
    classCallCheck(this, ThumbnailNavigation);

    var _this = possibleConstructorReturn(this, (ThumbnailNavigation.__proto__ || Object.getPrototypeOf(ThumbnailNavigation)).call(this, props));

    _this.state = {
      source: props.source,
      currentSlide: props.currentSlide
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(ThumbnailNavigation, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var source = nextProps.source,
          currentSlide = nextProps.currentSlide;

      this.setState({ source: source, currentSlide: currentSlide });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(index) {
      this.props.onChange(index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          source = _state.source,
          currentSlide = _state.currentSlide;

      return React.createElement(
        'div',
        { className: 'smooth-lightbox__thumbnail-navigation' },
        source[currentSlide - 2] ? React.createElement(Figure, { index: currentSlide - 2, source: source, currentSlide: currentSlide, onClick: this.handleClick }) : null,
        source[currentSlide - 1] ? React.createElement(Figure, { index: currentSlide - 1, source: source, currentSlide: currentSlide, onClick: this.handleClick }) : null,
        source[currentSlide] ? React.createElement(Figure, { index: currentSlide, source: source, currentSlide: currentSlide, onClick: this.handleClick }) : null,
        source[currentSlide + 1] ? React.createElement(Figure, { index: currentSlide + 1, source: source, currentSlide: currentSlide, onClick: this.handleClick }) : null,
        source[currentSlide + 2] ? React.createElement(Figure, { index: currentSlide + 2, source: source, currentSlide: currentSlide, onClick: this.handleClick }) : null
      );
    }
  }]);
  return ThumbnailNavigation;
}(React.Component);

ThumbnailNavigation.propTypes = {
  source: PropTypes.array.isRequired,
  currentSlide: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

// example data
// styles
// components
/**
 * 
 * 
 * @class SmoothLightbox
 * @author perzanko - Kacper Perzankowski
 * @extends {React.Component}
 */

var SmoothLightbox = function (_React$Component) {
  inherits(SmoothLightbox, _React$Component);

  /**
   * Creates an instance of SmoothLightbox.
   * @param {object} props 
   * @author perzanko - Kacper Perzankowski
   * @memberof SmoothLightbox
   */
  function SmoothLightbox(props) {
    var _this$state;

    classCallCheck(this, SmoothLightbox);

    var _this = possibleConstructorReturn(this, (SmoothLightbox.__proto__ || Object.getPrototypeOf(SmoothLightbox)).call(this, props));

    _this.state = (_this$state = {
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
      onPrevChange: props.onPrevChange
    }, defineProperty(_this$state, 'onOpen', props.onOpen), defineProperty(_this$state, 'currentSlide', typeof props.startIndex !== 'undefined' ? props.startIndex : 0), _this$state);
    _this.handleChangeSlide = _this.handleChangeSlide.bind(_this);
    _this.goToSlide = _this.goToSlide.bind(_this);
    return _this;
  }

  createClass(SmoothLightbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var isAutoplay = this.state.isAutoplay;

      if (isAutoplay) this.handleAutoplay();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var isOpen = nextProps.isOpen;

      if (isOpen !== this.state.isOpen) this.setState({ isOpen: isOpen });
    }

    /**
     * Handle change slide event.
     * 
     * @param {any} direction 
     * @memberof SmoothLightbox
     */

  }, {
    key: 'handleChangeSlide',
    value: function handleChangeSlide(direction) {
      var _state = this.state,
          currentSlide = _state.currentSlide,
          source$$1 = _state.source,
          isInfinite = _state.isInfinite;

      var newCurrentSlide = currentSlide;
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
        newCurrentSlide = newCurrentSlide < 0 ? source$$1.length - 1 : newCurrentSlide;
        newCurrentSlide = newCurrentSlide >= source$$1.length ? 0 : newCurrentSlide;
      } else {
        newCurrentSlide = newCurrentSlide <= 0 ? 0 : newCurrentSlide;
        newCurrentSlide = newCurrentSlide >= source$$1.length - 1 ? source$$1.length - 1 : newCurrentSlide;
      }

      this.setState({ currentSlide: newCurrentSlide });
    }

    /**
     * Change slide to specified index.
     * 
     * @param {number} index 
     * @memberof SmoothLightbox
     */

  }, {
    key: 'goToSlide',
    value: function goToSlide(index) {
      if (index >= 0 && index < this.state.source.length) {
        this.setState({ currentSlide: index });
      }
    }

    /**
     * Handle autoplay slide
     * 
     * @memberof SmoothLightbox
     */

  }, {
    key: 'handleAutoplay',
    value: function handleAutoplay() {
      var _this2 = this;

      var interval = setInterval(function () {
        return _this2.handleChangeSlide('NEXT');
      }, this.state.autoplayDuration);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          source$$1 = _state2.source,
          isArrowNavigation = _state2.isArrowNavigation,
          isKeyboardNavigation = _state2.isKeyboardNavigation,
          isThumbnailNavigation = _state2.isThumbnailNavigation,
          isOpen = _state2.isOpen,
          currentSlide = _state2.currentSlide,
          animationType = _state2.animationType,
          animationDuration = _state2.animationDuration,
          animationTimingFunction = _state2.animationTimingFunction;

      if (!isOpen) return '';
      return React.createElement(
        'div',
        { className: 'smooth-lightbox ' + animationType },
        React.createElement(
          'div',
          { className: 'smooth-lightbox__wrapper' },
          source$$1.length ? source$$1.map(function (image) {
            return React.createElement(Img, {
              animationDuration: animationDuration,
              animationTimingFunction: animationTimingFunction,
              index: source$$1.indexOf(image),
              currentSlide: currentSlide,
              key: source$$1.indexOf(image),
              src: image.url,
              title: image.title,
              caption: image.caption
            });
          }) : null,
          isArrowNavigation ? React.createElement(ArrowNavigation, { onChange: this.handleChangeSlide }) : null
        ),
        isKeyboardNavigation ? React.createElement(KeyboardNavigation, { onChange: this.handleChangeSlide }) : null,
        isThumbnailNavigation ? React.createElement(ThumbnailNavigation, {
          source: source$$1,
          onChange: this.goToSlide,
          currentSlide: currentSlide
        }) : null
      );
    }
  }]);
  return SmoothLightbox;
}(React.Component);

SmoothLightbox.propTypes = defineProperty({
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
  onPrevChange: PropTypes.func
}, 'onOpen', PropTypes.func);

document.getElementById('openclose').addEventListener('click', function () {
  ReactDOM.render(React.createElement(SmoothLightbox, {
    source: source,
    isInfinite: true,
    isAutoplay: false
  }), document.getElementById('root'));
}, false);

return SmoothLightbox;

})));
//# sourceMappingURL=SmoothLightbox.js.map
