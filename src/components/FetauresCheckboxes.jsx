import Checkbox from "./Checkbox";

function FeaturesCheckboxes({ children,value, ...props }) {
  return (
    // <!-- This is a checkboxes group -->
    <ul {...props}>
      <li>
        <Checkbox value={"colour"} />
        It's yellow!
      </li>
      <li>
        <Checkbox value={"sound"} />
        It squeaks!
      </li>
      <li>
        <Checkbox value={"logo"} />
        It has a logo!
      </li>
      <li>
        <Checkbox value={"size"} />
        Its big!
      </li>
    </ul>
  );
}

export default FeaturesCheckboxes;
