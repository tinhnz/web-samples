/* eslint-disable react/prop-types */
const Button = ({ color, variant, size, children, className }) => {
  let btnVariant = '';

  switch (variant) {
    case 'outline':
      btnVariant =
        color === 'secondary'
          ? 'border border-secondary text-secondary hover:bg-primaryDark'
          : 'border border-primary text-primary hover:bg-primaryLight';
      break;
    default:
      btnVariant =
        color === 'secondary'
          ? 'bg-white text-primary hover:bg-primaryLight'
          : 'bg-primary text-white hover:bg-primaryDark';
      break;
  }

  let btnSize = '';
  switch (size) {
    case 'large':
      btnSize = 'py-4 px-7';
      break;
    default:
      btnSize = 'py-3 px-6 text-sm';
      break;
  }

  return (
    <button className={`${btnVariant} ${btnSize} rounded-md font-medium ${className}`}>
      {children}
    </button>
  );
};

export default Button;
