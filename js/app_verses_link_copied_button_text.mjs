export function app_verses_link_copied_button_text(copied) {
  "$plain copied";
  "the answer says whether a link is being copied under the verses now. It is a yes or a no to read and nothing that runs.";
  "What the button offering the link should say, worded as what pressing it does rather than as where the reader already is.";
  "A control that names the state it is in reads as a label, and a control that names what it does reads as an offer. Somebody meeting this page for the first time has no second state to compare a label against, so the label would tell them nothing.";
  "It says what the person they are writing to gets, not what the setting is called. Nobody sending a verse to a friend is thinking about a setting; they are thinking about what will turn up on the friend's screen.";
  if (copied) {
    let r = "Copy the verses on their own";
    return r;
  }
  let r2 = "Also copy a link, so they can get their own";
  return r2;
}
