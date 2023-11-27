/* eslint-disable react/prop-types */
const Button = ({ size, children, className }) => {
  return size === 'large' ? (
    <button className={`border rounded-md py-4 px-6 font-medium ${className}`}>{children}</button>
  ) : (
    <button className={`border rounded-md py-3 px-6 font-medium text-sm ${className}`}>
      {children}
    </button>
  );
};

export default Button;
