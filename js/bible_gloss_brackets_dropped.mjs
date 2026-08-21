export function bible_gloss_brackets_dropped(gloss) {
  "$plain gloss";
  "the wording is one the interlinear printed under a word. It is text to look at and nothing that runs.";
  "One wording the interlinear printed with the marks around a supplied word taken off, so what is left is the English and nothing about how it got there.";
  "THE TABLES PUT SQUARE BRACKETS AND BRACES AROUND A WORD ENGLISH NEEDS AND THE ORIGINAL DOES NOT SAY. He who [is] in you, in [the] flesh has come, test the spirits [to see] whether. It is an honest mark and it is aimed at somebody reading an interlinear, who has been taught what it means.";
  "IT IS NOT AIMED AT A READER OF THE PICTURE BIBLE, and that is the whole reason this exists. That reader is checking a guess against a line of English and has been taught no notation at all, so a bracket is a character in the middle of scripture that they cannot pronounce and cannot ask about. The word inside it is a real English word carrying real meaning and it stays; only the marks go.";
  "WHAT IS GENUINELY LOST IS WHICH WORDS THE TRANSLATOR SUPPLIED, and it is lost to a reader who could not have used it. The band is a whole line of English under a whole line of pictures rather than a word standing under a word, so nothing on the page says which original word a bracketed word would have hung under. A mark that cannot be resolved is not information, it is decoration.";
  "IT IS ONE FUNCTION BECAUSE TWO PLACES WANT IT. The survey that counts how many meanings a word has been given asks for it on the way to stripping the grammar as well, and the band under the pictures wants only this much and none of the rest. Written twice, the day somebody meets a third mark only one of them would learn it.";
  "THE SPACES ARE PUT RIGHT AFTERWARDS. A mark becomes a space rather than nothing, because two words may sit either side of it and joining them would invent a word; and the run of spaces that leaves is squeezed back to one, because a double space in the band is the same unpronounceable nothing a bracket was.";
  let text = gloss;
  text = text.replaceAll(/[\[\]{}]/g, " ");
  text = text.replaceAll(/\s+/g, " ");
  text = text.trim();
  return text;
}
