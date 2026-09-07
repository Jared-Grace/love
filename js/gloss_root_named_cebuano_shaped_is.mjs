import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_size } from "./text_size.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_root_named_cebuano_shaped_is(root) {
  "Whether something read out of an explanation as a root could be a Cebuano word at all, which is settled by its holding no space and being longer than one letter.";
  "★ THIS IS A FLOOR AND NOT A TEST, AND THE DIFFERENCE IS THE WHOLE OF WHAT IT MAY BE USED FOR. Both marks rule things out and neither rules anything in: a meaning written as a single English word of two letters or more is spelled no differently from a root and passes here. So a true answer means only that nothing has ruled the thing out, and a false one is certain.";
  "It exists because widening a reader to the shapes a sentence can take let in a kind of answer the narrow one never saw. A sentence of the shape word is X quotes X whether X is the root or the English meaning, and to him arrived as a root 101 times in one store because of it. The word root written out first is what kept the narrow reader safe, and no shape carries that.";
  "The second mark was added after reading the whole flagged list rather than guessing at it. Cebuano writes no word of one letter, and the English I was arriving as the root of ko, ako and nako 76 times - a fifteenth of the entire wrong class, from one letter. It is the one part of that class that costs nothing to refuse, because there is no Cebuano root it could take with it.";
  "The other mark tried for this was whether the answer is spelled inside the word built from it, and it is not used here because it is not free. Over the one shape where it applies it flags 799 sightings, of which 764 are English and 35 are real roots whose spelling shifted - dala under dad-on, dumdom under nahinumdom. Refusing those 35 to catch the 764 is a trade somebody has to choose, and a floor is the wrong place to make a choice.";
  "$plain root";
  "it names the text read out of an explanation, never anything that runs.";
  arguments_assert(arguments, 1);
  let spaced = text_includes(root, " ");
  if (spaced) {
    return false;
  }
  let size = text_size(root);
  let r = greater_than(size, 1);
  return r;
}
