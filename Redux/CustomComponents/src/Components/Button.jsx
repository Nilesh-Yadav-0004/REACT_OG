export const Button = ({ value }) => {
    console.log(' ` value:', value);
  return (
    <>
      <Button style={value.style}>{value.name}</Button>
    </>
  );
};

