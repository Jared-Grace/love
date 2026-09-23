import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_word_start_regex } from "./text_word_start_regex.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function git_history_texts_replacements_text(words) {
  arguments_assert(arguments, 1);
  ("The instructions a history rewrite reads to take a list of words out of everything a repository has ever held - one line per word, in the form the rewriting tool reads, asking for each word wherever it stands on its own and reading a capital letter as the same letter as a small one.");
  ("EACH WORD IS ASKED FOR AS A WHOLE WORD AND NEVER AS LETTERS INSIDE A LONGER ONE. The rule itself is spelled in ",
    fn_name("text_word_start_regex"),
    " rather than here, because the command that decides which forgotten files a purge should drop reads its words by the same rule, and two spellings of it could drift into taking a file contents out while leaving its name. The words worth taking out are short, and a short word is a run of letters in the middle of many innocent ones: one of them sat inside the name of a drawing function in three files that have nothing to do with it, and a plain sweep would have rewritten those in every commit since they were written, quietly, with no way back. A mark at the start says the word has to begin where it begins, and a letter standing in front of it takes the match away. Past the start the name is allowed to run on, because the names worth taking out come in families sharing a beginning - one beginning here had eleven endings - and marking the far end too would mean writing every ending down, where the one that gets forgotten is the one nobody will look for again.");
  ("★ A CAPITAL LETTER IS THE SAME LETTER, AND THE MARK AT THE START IS WHAT MAKES THAT SAFE. A word worth taking out of a past is usually a name, and a name is written with a capital wherever it stands in an ordinary sentence - so asked for the small spelling only, a rewrite walks past the very occurrences that read as somebody's name and leaves them there for ever. Setting the letter aside does not widen the match into other words, which is the thing it would be right to fear: the mark at the start still stands between a letter and something that is not one, so a word sitting inside a longer one is left alone exactly as before. Measured on a throwaway, with the letter set aside the word went at the beginning of a line, in the middle of one, and with an ending run on - and the one sitting inside a longer word stayed.");
  ("The instruction to ignore the letter is written here, at the front of the line, rather than into the shared rule, and that is forced rather than chosen. The same pattern is handed to three readers: this tool takes an instruction written into the pattern, the reading that counts what is left refuses to run at all when it finds one and offers a flag of its own instead, and the reader that matches file names in this language cannot be built with one at all. So each reader is told in its own words; what must not differ is that every one of them is told.");
  ("A word is refused unless it is made of letters, digits and the mark between parts. That is not fussiness about input: everything else - a dot, a slash, a bracket - means something of its own to the thing reading these lines, so a path or a phrase handed in here would quietly ask for something other than itself. Refusing is also what makes the mark at the start mean anything, because it stands between a letter and something that is not one.");
  ("What each word is replaced by is left to the rewriting tool's own word for it. Choosing one here would be one more thing to agree about across two commands and a rewrite, to say the same thing the tool already says.");
  function lambda(word) {
    let pattern = text_word_start_regex(word);
    let line = "regex:(?i)" + pattern;
    return line;
  }
  let lines = list_map(words, lambda);
  let text = list_join_newline(lines);
  return text;
}
