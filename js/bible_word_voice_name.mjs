export function bible_word_voice_name(text) {
  "$plain text";
  "The voice that says one Bible word, chosen from the letters the word is written in: Hebrew letters get the Hebrew voice, anything else gets the Greek one.";
  "THE LETTERS DECIDE RATHER THAN THE PAGE, because one screen can show both languages and a reader tapping a word has told us nothing except which word; the word itself is the only thing present at the moment of the tap that knows what language it is.";
  "Greek is the fallback rather than a third test, because the two testaments are the whole of what this reads and a word that is not Hebrew is Greek.";
  "★ HEBREW IS GEMINI'S SADALTAGER, because in Genesis 1 it was marked best on 24 of 25 words against three other Gemini voices, which had themselves beaten WaveNet and Chirp; the Flash model, because Pro tied it 10 to 10 blind at twice the price. The earlier WaveNet clips stay in their own folder, since a clip's address holds its voice.";
  let hebrew = /[֐-׿]/.test(text);
  if (hebrew) {
    let r = "he-IL-Sadaltager";
    return r;
  }
  let r2 = "el-GR-Wavenet-B";
  return r2;
}
