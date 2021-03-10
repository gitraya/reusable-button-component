import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ color, text }) => {
  const buttonClass = `button ft-ns-jp ${color}`;

  return <button className={buttonClass}>{text}</button>;
};

export default Button;
