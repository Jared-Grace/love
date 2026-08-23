import { arguments_assert } from "./arguments_assert.mjs";
import { bible_strong_glosses } from "./bible_strong_glosses.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
export async function bible_strong_gloss_wordings(strong, testament_name) {
  arguments_assert(arguments, 2);
  ("Every English wording the interlinear gives ONE Strong's number inside one testament, commonest first and counted.");
  ("$plain strong");
  ("the number is a word's own, spelled as the interlinear spells it. It names a word to look up and nothing that runs.");
  ("$plain testament_name");
  ("the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to read and nothing that runs.");
  ("THIS IS THE INSTRUMENT THAT DECIDES WHETHER A WORD MAY BE SEATED ON A PICTURE, and the root table's own prose has been describing it since before it existed. The staff was refused because the interlinear glosses it of the tribe thirty six times against the staff far fewer; the multitude was refused because the glosses say army more often than crowd; the bread and the sword were taken because every wording given them says bread and says sword. Each of those is this reading, done by hand, by somebody who then wrote the number down.");
  ("A SINGLE WORDING COVERING NEARLY EVERY PLACE IS WHAT MAKES A SEAT HONEST. A number split evenly between two unrelated wordings has two meanings under one key, and a picture on it draws one of them and lies about the other - which is the whole of what the staff would have done. So the counts travel with the wordings and are not summarized away: the shape of the split is the answer, and the top wording alone would hide it.");
  ("It asks the whole testament rather than a chapter, because the question is what the word means and not what it means here. A word can be glossed unusually in one place and that says nothing about the picture it should carry everywhere.");
  ("A number the testament never gives comes back as an empty list rather than as an absence, so a caller measuring several words gets the same shape from all of them and an unmeasurable word reads as measured and empty rather than as a hole.");
  let ranked = await bible_strong_glosses(testament_name);
  let found = property_get_or_null(ranked, strong);
  let none = null_is(found);
  if (none) {
    let r = [];
    return r;
  }
  return found;
}
