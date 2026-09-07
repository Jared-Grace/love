import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
export function gloss_root_named_cebuano_shaped_is(root) {
  "Whether something read out of an explanation as a root could be a Cebuano word at all, which is settled by its holding no space.";
  "★ THIS IS A FLOOR AND NOT A TEST, AND THE DIFFERENCE IS THE WHOLE OF WHAT IT MAY BE USED FOR. A Cebuano root is one word, so an answer holding a space is certainly not one; but a meaning written as a single English word is spelled no differently from a root and passes here. So a true answer means only that nothing has ruled the thing out, and a false one is certain.";
  "It exists because widening a reader to the shapes a sentence can take let in a kind of answer the narrow one never saw. A sentence of the shape word is X quotes X whether X is the root or the English meaning, and to him arrived as a root 101 times in one store because of it. The word root written out first is what kept the narrow reader safe, and no shape carries that.";
  "The other mark tried for this was whether the answer is spelled inside the word built from it, and it was worse. It flagged 2547 sightings and the ones read were sound-shifted roots - katawhan from tawo, gipamatud-an from matuod - so it separates a spelling change from a language rather than a root from a meaning.";
  "$plain root";
  "it names the text read out of an explanation, never anything that runs.";
  arguments_assert(arguments, 1);
  let spaced = text_includes(root, " ");
  let r = not(spaced);
  return r;
}
