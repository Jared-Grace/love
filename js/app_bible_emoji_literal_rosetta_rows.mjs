import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export function app_bible_emoji_literal_rosetta_rows(literal, rows) {
  arguments_assert(arguments, 2);
  ("$plain literal");
  ("$plain rows");
  ("the literal chapter is the chapter drawn in the original's order, verse by verse; the rows are the same chapter as Rosetta verses, each with its original and English lines. Both are data and neither runs.");
  ("The chapter in the original's order with each verse's original and English lines under it: the pictures from the one, the lines from the other, matched by verse number.");
  ("THE PICTURES COME FROM THE ORIGINAL ORDER AND THE LINES FROM THE BUILT CHAPTER, because the lines are kept only beside the built chapter's verses, and the pictures there are in English order. Matching by verse number rather than by place keeps a verse's lines under that verse even if one chapter numbers a verse the other lacks.");
  ("A VERSE THE BUILT CHAPTER LACKS STILL DRAWS ITS PICTURES, with empty lines, because the pictures are the Bible on this page and the lines are only a key to them. Rejected: leaving the verse out, which would hide part of the chapter because its key is missing.");
  let result = [];
  for (let verse of literal.verses) {
    let found = list_find_property_or_null(
      rows,
      "verse_number",
      verse.verse_number,
    );
    let original = "";
    let english = "";
    let b = null_is(found);
    if (not(b)) {
      original = found.original;
      english = found.english;
    }
    let row = {
      verse_number: verse.verse_number,
      words: verse.words,
      originals: verse.originals,
      original,
      english,
    };
    list_add(result, row);
  }
  return result;
}
