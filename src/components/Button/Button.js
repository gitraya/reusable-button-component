import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  color,
  text,
  variant,
  disableShadow,
  startIcon,
  endIcon,
}) => {
  const buttonClass = `button ft-ns-jp ${color} ${variant} ${
    disableShadow ? 'disableShadow' : ''
  }`;

  return (
    <button className={buttonClass}>
      {startIcon} {text} {endIcon}
    </button>
  );
};

Button.defaultProps = {
  color: 'default',
  text: 'Submit',
};

export default Button;
