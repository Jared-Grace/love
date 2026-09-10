export function app_code_above_shown_button_text(shown) {
  "$plain shown";
  "the answer says whether the telling is above the examples now. It is a yes or a no to read and nothing that runs.";
  "What the button offering the telling should say, worded as what pressing it does rather than as where the learner already is.";
  "A control that names the state it is in reads as a label, and a control that names what it does reads as an offer. A learner opening a lesson for the first time has no second state to compare a label against, so the label would tell them nothing.";
  "It says how this works rather than the explanation, because a learner who is stuck is not looking for a noun - they are asking to be told how the thing in front of them works, and the button should be the words they would have said.";
  if (shown) {
    let r = "Hide how this works";
    return r;
  }
  let r2 = "Show me how this works";
  return r2;
}
