export function app_emoji_bible_key_shown_button_text(shown) {
  "$plain shown";
  "the answer says whether the key is under each verse now. It is a yes or a no to read and nothing that runs.";
  "What the button offering the key should say, worded as what pressing it does rather than as where the reader already is.";
  "A control that names the state it is in reads as a label, and a control that names what it does reads as an offer. A reader meeting this page for the first time has no second state to compare a label against, so the label would tell them nothing.";
  "It is called the KEY rather than the translation, because that is what it is for. Under each verse are the same words in the language they were written in and word for word in English, and a reader uses them to work the pictures out - which is a key. Calling it a translation would invite a reader to read the English and skip the pictures, which is the one way to use this page that teaches nobody anything.";
  if (shown) {
    return "Hide the key";
  }
  return "Show the key";
}
