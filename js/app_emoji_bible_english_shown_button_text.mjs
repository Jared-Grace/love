export function app_emoji_bible_english_shown_button_text(shown) {
  "$plain shown";
  "the answer says whether the English is under each verse now. It is a yes or a no to read and nothing that runs.";
  "What the button offering the English should say, worded as what pressing it does rather than as where the reader already is.";
  "A control that names the state it is in reads as a label, and a control that names what it does reads as an offer. A reader meeting this page for the first time has no second state to compare a label against, so the label would tell them nothing.";
  "It says the English rather than the meaning or the translation, because that is honestly all it is: one of the key's bands on its own, in one language, for a reader who wants to check what a verse says without the whole stack. The pictures are still keyed to the word they were written from and not to this line.";
  if (shown) {
    let r = "Hide the English";
    return r;
  }
  let r2 = "Show the English";
  return r2;
}
