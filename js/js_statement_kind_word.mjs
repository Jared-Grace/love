import { arguments_assert } from "./arguments_assert.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function js_statement_kind_word(kind) {
  "$plain kind";
  "What a statement of one kind is called in a sentence a person reads, rather than in the word the parser files it under.";
  "THE NAME OF AN EDIT IS READ BY SOMEBODY. In a nested function, one statement added is a sentence; in a ForOfStatement, one statement added is a machine talking to itself, and every reader of it has to translate the same word back the same way every time.";
  "THE FIVE KINDS OF LOOP ARE ONE WORD HERE. Which of them a run sits in changes nothing about the edit that happened inside it, and telling them apart would split one bucket five ways for a distinction the name never uses.";
  "A KIND NOBODY GAVE A WORD TO KEEPS THE PARSER'S. It is wrong rather than missing, and reading it back is what says which word to add.";
  arguments_assert(arguments, 1);
  let words = {
    IfStatement: "an if",
    ForStatement: "a loop",
    ForInStatement: "a loop",
    ForOfStatement: "a loop",
    WhileStatement: "a loop",
    DoWhileStatement: "a loop",
    TryStatement: "a try",
    BlockStatement: "a block",
    LabeledStatement: "a labelled block",
  };
  let word = property_or_null(words, kind);
  let unknown = null_is(word);
  if (unknown) {
    return kind;
  }
  return word;
}
