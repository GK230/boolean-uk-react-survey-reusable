function Checkbox({ children, ...props }) {
  return (
    <label>
      <input {...props} name="bestFeatures" type="checkbox" value="colour" />
      {children}
    </label>
  );
}

export default Checkbox;
