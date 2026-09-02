export function text_letters_is(str) {
  "Whether a piece of writing is made of nothing but letters of the Latin alphabet, a to z in either case, and has at least one of them.";
  "Letters of every other alphabet answer no. The name says letters and means these letters, which is worth saying out loud rather than leaving in the pattern: everything that asks this question today is asking about writing this repo authored - the name of a function, a word standing alone inside a piece of code, a name given to somebody in the game - and all of that is written in this one alphabet. Point it at a language that is not and it will say the writing has no letters in it at all.";
  let r = new RegExp("^[A-Za-z]+$");
  let li = r.test(str);
  return li;
}
