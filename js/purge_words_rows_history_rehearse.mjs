import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { purge_words_allowed } from "./purge_words_allowed.mjs";
import { list_size } from "./list_size.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { git_history_texts_replace_rehearse } from "./git_history_texts_replace_rehearse.mjs";
export async function purge_words_rows_history_rehearse(folder, rows_text) {
  "$plain folder";
  "$plain rows_text";
  "Rehearses taking named rows of the list that lives outside every repo out of one folder's whole past - what is inside its files and what its commit messages say alike - and reports what it did without ever spelling the words it did it with.";
  "★ ROWS ARE NAMED AND WORDS ARE NOT, BECAUSE A COMMAND LINE IS AMONG THE MOST TRAVELLED TEXT THERE IS. The half beneath this one takes the words themselves, which is right for it: it is a general tool and a caller may be purging anything. But the words in this particular list are the ones a purge exists to make unfindable, and typing them to run the purge writes them into a shell history, a terminal's scrollback, a session log, and the message anybody sends when they ask what went wrong. The list already has a shape that solves this - it is rows - and the gate that complains about these words already prints a row rather than a word for exactly this reason. So the caller says which rows and the words never leave the file they are kept in.";
  "★ THE ANSWER LEAVES THE WORDS OUT TOO, WHICH TAKES DELIBERATE WORK. What this wraps hands back the list of words it used, as it should - on its own it was told them and has nothing to hide. Passing that straight out would undo the whole point at the last step, so the answer is rebuilt here with the rows put back in their place. Everything else it reports is paths, which are safe to read out and are the part anybody fixing this actually needs.";
  "Any folder, not this one. The list is about words rather than about a repository, and the second place these words are written down is the memory repo, whose own past needs the same treatment. The half this calls was already written to take a folder; nothing here should narrow that.";
  "★ THERE IS NO ACCEPTING TWIN HERE ON PURPOSE. This only ever works on a copy nobody is using and sends nothing anywhere, which is why it is safe to run without asking. Accepting a rewrite is a different kind of act - it forces every address in a real repository onto a new history - and the general command that does it takes a rehearsal and can be handed this one. Writing a row-named shortcut for that would be building a short, safe-looking spelling for the most destructive step in the whole business.";
  arguments_assert(arguments, 2);
  let asked = text_split_comma(rows_text);
  let any = list_empty_not_is(asked);
  assert_json(any, {
    hint: "no rows were named to take out of the history - the rows are the entries of the list outside every repo, counted from zero, and they are passed as one comma-joined word",
    rows_text,
  });
  let rows = await purge_words_allowed();
  let walked = list_size(rows);
  let words = [];
  for (let spelling of asked) {
    let at = number_from_text(spelling);
    let sane = less_than(-1, at);
    assert_json(sane, {
      hint: "a row was named that comes before the start of the list - rows are counted from zero",
      at,
      walked,
    });
    let inside = less_than(at, walked);
    assert_json(inside, {
      hint: "a row was named that the list outside every repo does not have - the count below is how many it holds, and they are counted from zero",
      at,
      walked,
    });
    let row = rows[at];
    list_add(words, row.word);
  }
  let words_text = list_join_comma(words);
  let rehearsed = await git_history_texts_replace_rehearse(folder, words_text);
  let r = {
    clone_folder: rehearsed.clone_folder,
    rows: asked,
    walked,
    commit: rehearsed.commit,
    tree: rehearsed.tree,
    commits_before: rehearsed.commits_before,
    commits_after: rehearsed.commits_after,
    holding: rehearsed.holding,
    changed: rehearsed.changed,
    remaining: rehearsed.remaining,
  };
  return r;
}
