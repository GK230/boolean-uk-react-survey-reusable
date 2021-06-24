function Checkbox({ children, handleChange, value, ...props }) {
  return (
    <label>
      <input {...props} name={name} type="checkbox" value={value} onChange={handleChange}/>
      {children}
    </label>
  );
}

export default Checkbox;
