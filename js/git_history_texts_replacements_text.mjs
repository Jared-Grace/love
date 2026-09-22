import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function git_history_texts_replacements_text(words) {
  arguments_assert(arguments, 1);
  ("The instructions a history rewrite reads to take a list of words out of everything a repository has ever held - one line per word, in the form the rewriting tool reads, asking for each word wherever it stands on its own.");
  ("EACH WORD IS ASKED FOR AS A WHOLE WORD AND NEVER AS LETTERS INSIDE A LONGER ONE, and that is the whole reason this is written down rather than handed over as it arrived. The words worth taking out are short, and a short word is a run of letters in the middle of many innocent ones: one of them sat inside the name of a drawing function in three files that have nothing to do with it, and a plain sweep would have rewritten those in every commit since they were written, quietly, with no way back. A mark at the start says the word has to begin where it begins, and a letter standing in front of it takes the match away. Past the start the name is allowed to run on, because the names worth taking out come in families sharing a beginning - one beginning here had eleven endings - and marking the far end too would mean writing every ending down, where the one that gets forgotten is the one nobody will look for again.");
  ("A word is refused unless it is made of letters, digits and the mark between parts. That is not fussiness about input: everything else - a dot, a slash, a bracket - means something of its own to the thing reading these lines, so a path or a phrase handed in here would quietly ask for something other than itself. Refusing is also what makes the mark at the start mean anything, because it stands between a letter and something that is not one.");
  ("What each word is replaced by is left to the rewriting tool's own word for it. Choosing one here would be one more thing to agree about across two commands and a rewrite, to say the same thing the tool already says.");
  function lambda(word) {
    let plain = /^[A-Za-z0-9_]+$/.test(word);
    assert_json(plain, {
      hint: "this is not one plain word of letters, digits and underscores, and everything else means something of its own to the rewriting tool - would you like to name the word itself rather than a path or a phrase holding it?",
      word,
    });
    let line = "regex:\\b" + word + "\\w*";
    return line;
  }
  let lines = list_map(words, lambda);
  let text = list_join_newline(lines);
  return text;
}
