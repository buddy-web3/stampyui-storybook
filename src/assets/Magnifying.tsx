
interface MagnifyingProps {
    /**
     * Classname
     */
    classnamme: string;
}

const Magnifying = ({ classnamme }:MagnifyingProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 17"
      className={classnamme}
    >
      <path
        fill="#AFB7C2"
        fillRule="evenodd"
        d="M10.0442 11.2059C9.08701 12.0134 7.85033 12.5 6.5 12.5 3.46243 12.5 1 10.0376 1 7c0-3.03757 2.46243-5.5 5.5-5.5S12 3.96243 12 7c0 1.35033-.4866 2.58701-1.2941 3.5442.0535.0242.1037.0583.1477.1022l3.5 3.5c.1952.1953.1952.5119 0 .7072-.1953.1952-.5119.1952-.7072 0l-3.5-3.5c-.0439-.044-.078-.0942-.1022-.1477ZM11 7c0 2.48528-2.01472 4.5-4.5 4.5S2 9.48528 2 7s2.01472-4.5 4.5-4.5S11 4.51472 11 7Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const MagnifyingIcon = Magnifying;
