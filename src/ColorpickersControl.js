import React from 'react';
import PropTypes from 'prop-types';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';
//const uniqid = require('uniqid');
//const pId = uniqid();

export default class ColorpickersControl extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: {},
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };


  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props;

    const styles = reactCSS({
      'default': {
        color: {
          width: '100%',
          height: '58px',
          borderRadius: '3px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '6px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '3',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
    <div>
      <div id={forID} className={classNameWrapper} style={ styles.swatch } onClick={ this.handleClick }>
        <div style={ styles.color } onFocus={setActiveStyle} onBlur={setInactiveStyle} />
      </div>
      { this.state.displayColorPicker ? <div style={ styles.popover }>
        <div style={ styles.cover } onClick={ this.handleClose }/>
        <SketchPicker color={ this.state.color } value={value || this.state.color} onChange={color => {
          this.handleChange(color)
          return onChange(`${color.hex}`)
        }} />
      </div> : null }

    </div>
    );
  }
}

{/*<input
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
      />*/}
