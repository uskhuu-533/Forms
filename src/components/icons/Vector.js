const Foward = (props) => {
  const { color } = props;
  return (
    <svg
      width="9"
      height="12"
      viewBox="0 0 9 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.20504 0L0.795044 1.41L5.37504 6L0.795044 10.59L2.20504 12L8.20505 6L2.20504 0Z"
        fill={color}
      />
    </svg>
  );
};
export default Foward;
