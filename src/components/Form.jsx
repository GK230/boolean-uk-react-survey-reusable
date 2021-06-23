import Checkboxes from "./FetauresCheckboxes";
import RadioButtons from "./RadioButtons";

function Form() {
  return (
    <form className="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group">
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        {/* <!-- checkboxes go here --> */}
        <Checkboxes name={"bestFeatures"} />
      </div>
      <div className="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        {/* <!-- Checkboxes go here --> */}
        <Checkboxes name={"worstFeatures"} />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        {/* <!-- radio buttons go here --> */}
        <RadioButtons name="consistency" />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        {/* <!-- Radio inputs go here --> */}
        <RadioButtons name="colour" />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        {/* <!-- radio inputs go here --> */}
        <RadioButtons name="logo" />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        {/* <!-- checkboxes go here --> */}
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10"></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value="" />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value="" />
      </label>
      <input
        className="form__submit"
        type="submit"
        value="Submit Survey!"
      />
    </form>
  );
}

export default Form;
