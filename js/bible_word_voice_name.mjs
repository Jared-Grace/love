export function bible_word_voice_name(text) {
  "$plain text";
  "The voice that says one Bible word, chosen from the letters the word is written in: Hebrew letters get the Hebrew voice, anything else gets the Greek one.";
  "THE LETTERS DECIDE RATHER THAN THE PAGE, because one screen can show both languages and a reader tapping a word has told us nothing except which word; the word itself is the only thing present at the moment of the tap that knows what language it is.";
  "Greek is the fallback rather than a third test, because the two testaments are the whole of what this reads and a word that is not Hebrew is Greek.";
  let hebrew = /[֐-׿]/.test(text);
  if (hebrew) {
    let r = "he-IL-Wavenet-D";
    return r;
  }
  let r2 = "el-GR-Wavenet-B";
  return r2;
}
