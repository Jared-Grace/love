export function hebrew_cantillation_strip(word) {
  "Removes the cantillation marks from pointed Hebrew and keeps the vowel points, so a word reads the way a speech voice expects: the reading marks say how to chant a verse, not how to say a word.";
  "The paqeq, sof pasuq and nun hafukha go too.";
  let stripped = word.replace(/[֑-ֽ֯׀׃׆]/g, "");
  return stripped;
}
