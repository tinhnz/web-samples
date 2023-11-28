/* eslint-disable react/prop-types */
const LinkButton = ({ to, color, variant, size, children, className }) => {
  let btnVariant = '';

  switch (variant) {
    case 'outline':
      btnVariant =
        color === 'secondary'
          ? 'border border-secondary text-secondary'
          : 'border border-primary text-primary';
      break;
    default:
      btnVariant = color === 'secondary' ? 'bg-white text-primary' : 'bg-primary text-white';
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
    <a
      href={to}
      className={`group ${btnVariant} ${btnSize} items-center rounded-md font-medium inline-flex cursor-pointer select-none ${className}`}
    >
      {children}

      <span className='w-0 group-hover:ml-2 group-hover:w-4 transition-all duration-300'>
        <svg
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='3'
            d='M14 5l7 7m0 0l-7 7m7-7H3'
          ></path>
        </svg>
      </span>
    </a>
  );
};
export default LinkButton;
