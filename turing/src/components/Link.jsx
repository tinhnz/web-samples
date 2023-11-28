/* eslint-disable react/prop-types */
const Link = ({ children, type, className }) => {
  let textStyle = 'text-[--color-text]';
  let lineStyle = 'h-1 bg-[--color-text]';
  if (type === 'footer') {
    textStyle = 'text-[--color-placeholder]';
    lineStyle = 'h-0.5 bg-[--color-placeholder]';
  } else if (type === 'body') {
    textStyle = 'text-[--color-link]';
    lineStyle = 'h-0.5 bg-[--color-link]';
  }

  return (
    <a href='#' className={`group transition duration-300 ${textStyle} ${className}`}>
      {children}
      <span
        className={`block max-w-0 group-hover:max-w-full transition-all duration-300 ${lineStyle}`}
      ></span>
    </a>
  );
};

export default Link;
