export function app_emoji_bible_key_shown_button_text(shown) {
  "$plain shown";
  "the answer says whether the original is under each verse now. It is a yes or a no to read and nothing that runs.";
  "What the button offering the original should say, worded as what pressing it does rather than as where the reader already is.";
  "A control that names the state it is in reads as a label, and a control that names what it does reads as an offer. A reader meeting this page for the first time has no second state to compare a label against, so the label would tell them nothing.";
  "IT NAMES THE ORIGINAL, the verse in the language it was written in, and the button beside it names the English, so each button names the one line it puts under the verse and the two can be had together or apart. Rejected: the key, which named what the lines are for rather than what they are, and stood for a stack of every line at once, so a reader could not tell from the button that the English beside it was a part of the same stack.";
  if (shown) {
    let r = "Hide original";
    return r;
  }
  let r2 = "Show original";
  return r2;
}
