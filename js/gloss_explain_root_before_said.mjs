import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
export function gloss_explain_root_before_said(explain) {
  "The quoted word standing immediately in front of the words is the root in an explanation, or nothing where the sentence does not put one there.";
  "★ THIS IS THE HALF OF THE SENTENCE THE ROOT READERS DO NOT LOOK AT, AND IN THIS SHAPE IT IS THE HALF THAT HOLDS THE ROOT. Both readers match the words the root and take the quoted piece that comes after them, which is right for it is built from the root ‘tunay’ and wrong for ‘awit’ is the root ‘to sing’ - the same three words, with the root in front of them in one and behind them in the other. In the second shape what follows is the English meaning, and the reader hands that back as the Cebuano root without anything anywhere noticing.";
  "It answers nothing rather than guessing wherever the sentence does not put a quoted word in that position, because the shape is what is being recognised and a sentence not in the shape has not been misread by this route.";
  "A quoted piece has to follow the phrase as well as stand in front of it, and that second demand is not decoration. Without it the words is the root’s satisfy the reading - the mark that ends a quotation and the mark that makes a possessive are the same character - and it answers with a word from a sentence that never named a root at all. It is the misread being reported here, made once more one line further down.";
  "It is deliberately only a reading and changes no reader. What the root readers should do with a sentence in this shape is a decision about text a person will see, and the point of having this separately is to be able to say how many sentences that decision is worth before anybody takes it.";
  "$plain explain";
  "the sentence to read. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let pattern = new RegExp("‘([^‘’]+)’\\s+is\\s+the\\s+root\\s+‘[^‘’]+’");
  let found = pattern.exec(explain);
  let none = null_is(found);
  if (none) {
    return null;
  }
  let said = found[1];
  return said;
}
