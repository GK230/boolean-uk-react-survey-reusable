function Checkbox({ children, handleChange, ...props }) {
  return (
    <label>
      <input {...props} name="bestFeatures" type="checkbox" value="colour" onChange={handleChange}/>
      {children}
    </label>
  );
}

export default Checkbox;
