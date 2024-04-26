/* eslint-disable react/prop-types */

const Button = ({ btnClick, btnDisable, btnStyle, btnText }) => {
  return (
    <button
      className={` ${
        btnStyle ? btnStyle : "bg-mainBlue"
      }  px-10 py-2 border-2 border-borderColor text-textWhite`}
      disabled={btnDisable}
      onClick={btnClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
