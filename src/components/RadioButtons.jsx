function RadioButtons({children, name, ...props}) {
  return (
    // <!-- This is a radio buttons group -->
    <ul {...props}>
      <li>
        <input id={`${name=name}1`} type="radio" name={name} value="1" />
        <label htmlFor={`${name=name}1`}>1</label>
      </li>
      <li>
        <input id={`${name=name}2`} type="radio" name={name} value="2" />
        <label htmlFor={`${name=name}2`}>2</label>
      </li>
      <li>
        <input id={`${name=name}3`} type="radio" name={name} value="3" />
        <label htmlFor={`${name=name}3`}>3</label>
      </li>
      <li>
        <input id={`${name=name}4`} type="radio" name={name} value="4" />
        <label htmlFor={`${name=name}4`}>4</label>
      </li>
    </ul>
  );
}

export default RadioButtons;
