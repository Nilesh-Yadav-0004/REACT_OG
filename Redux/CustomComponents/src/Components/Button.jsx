export const Button = ({ value }) => {
    console.log(' ` value:', value);
  return (
    <>
      <button
      ClassName="custom-btn"
      style={value.style}
        >
            {value.name}
        </button>
    </>
  );
};

