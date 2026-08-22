export async function word_pictures_undrawn() {
  "The taught words that have a drawing wording written down and no picture drawn from it yet.";
  "IT COUNTS THE FOLDERS AND KEEPS NO TALLY. A word is drawn when there is a picture in its folder and not before, so a draw that failed halfway leaves the word still outstanding rather than marked done - which is the answer a tally would get wrong in the one case anybody cares about.";
  "IT IS SEPARATE FROM DRAWING because it costs nothing and drawing costs money. This is the question to ask before spending, and asking it should never be the thing that spends.";
  let wordings = word_picture_wordings();
  let words = object_property_names(wordings);
  let undrawn = [];
  for (let word of words) {
    let attempts = await folder_attempts_numbered(word_picture_folder(word), ".png");
    let none = list_empty_is(attempts);
    if (none) {
      list_add(undrawn, word);
    }
  }
  return undrawn;
}
