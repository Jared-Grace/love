import { app_en_learn_bible_gloss_urdu_words_ranked } from "./app_en_learn_bible_gloss_urdu_words_ranked.mjs";
import { app_en_learn_bible_gloss_urdu_settled_explains } from "./app_en_learn_bible_gloss_urdu_settled_explains.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
export async function app_en_learn_bible_gloss_urdu_explains_prefix_stale() {
  "Every wording in the store that is a strict prefix of what the settled tables say for that same word today, with how many entries carry it. Each one is an older build of that one sentence: a clause was appended to the table and what stood before it was never retired.";
  "It is decidable from the two strings alone, which is the whole point of it. A wording that merely differs from the table's is usually a per-verse gloss doing its job, and counting those gives a number in the thousands that names no fault at all. A wording the table's own sentence begins with cannot be a second opinion about the word - it is the same sentence one clause short, and the only question is how it survived.";
  "It survived because retiring is a step somebody has to remember. The list of superseded wordings is written by hand as each round of rewriting lands, so it holds what that round's author thought to write down, and a word nobody was thinking about at the time keeps its old sentence forever. This asks the store instead, so it finds the words the author was not thinking about - which, by construction, are the only ones still broken.";
  "It takes no arguments because there is nothing to choose. The store names itself, the tables name themselves, and being asked which of them to compare is one more thing to get right at the moment somebody just wants to know what is stale.";
  "IT IS BLIND TO THE CAPITALISED COPY OF EVERY WORDING IT FINDS, AND THAT IS NOT FIXABLE FROM THIS SIDE. A word met at the start of a sentence gets its own entry, whose wording is the ordinary one with a sentence about the capital letter joined onto the end. Both the stale wording and the current one carry that same tail, so the stale one is no longer a prefix of the current one - the two differ in the middle and agree at the end, which is the one arrangement this test cannot see.";
  "Nothing is lost by that, because the retired list covers it from the other side. Writing a word down there retires its wording and, for an ordinary lowercase word, the capitalised form of that wording as well, derived rather than typed. So a round found by this test still sweeps up the capitalised copies it never reported. It shows as a sweep rewriting more entries than the prediction said: three more, the first time this was used, and that was the whole of the difference.";
  "The rows are what a round of retiring needs: the word, the wording to put on the superseded list, and the entry count to predict the sweep with. Predicting first and matching the delivered count afterwards is what proves the sweep touched everything it should have and nothing else.";
  let ranked = await app_en_learn_bible_gloss_urdu_words_ranked();
  let settled = app_en_learn_bible_gloss_urdu_settled_explains();
  let rows = [];
  let entries = 0;
  for (let ranked_row of ranked.ranked) {
    let word = ranked_row.word;
    let now = settled[word];
    let unsettled = equal(now, undefined);
    if (unsettled) {
      continue;
    }
    for (let carried of ranked_row.explains) {
      let was = carried.explain;
      let current = equal(was, now);
      if (current) {
        continue;
      }
      let older = now.startsWith(was);
      if (not(older)) {
        continue;
      }
      rows.push({
        word: word,
        explain: was,
        entries: carried.entries,
      });
      entries = entries + carried.entries;
    }
  }
  function lambda(left, right) {
    let difference = subtract(right.entries, left.entries);
    return difference;
  }
  rows.sort(lambda);
  function lambda2(row) {
    let r2 = row.word;
    return r2;
  }
  let v = rows.map(lambda2);
  let words = new Set(v);
  let r = {
    wordings: rows.length,
    entries: entries,
    words: words.size,
    rows: rows,
  };
  return r;
}
