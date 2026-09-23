import { app_en_learn_bible_gloss_urdu_word_explains } from "./app_en_learn_bible_gloss_urdu_word_explains.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_en_learn_bible_gloss_urdu_noun_explains } from "./app_en_learn_bible_gloss_urdu_noun_explains.mjs";
import { app_en_learn_bible_gloss_urdu_name_explains } from "./app_en_learn_bible_gloss_urdu_name_explains.mjs";
export function app_en_learn_bible_gloss_urdu_settled_explains() {
  "Every English word the store that teaches English to an Urdu reader has a settled wording for, whatever kind of word it is, in one lookup.";
  "There are three tables behind this and they are kept apart because their reasons are different. One holds the small closed classes - the articles, the joining words, the prepositions, the pronouns - where what the word does in a sentence is the whole of what there is to say and no dictionary work stands behind any of it. One holds the ordinary nouns, where the whole of the entry is the Urdu word for the thing and every line of it is dictionary work. The third holds the names, where the entry is neither of those: it is who the person is, which is read off the passages themselves rather than out of a dictionary, and it goes stale for a different reason than either of the others.";
  "They are joined here rather than in any one of them so that the pass which writes settled wordings over shared labels asks one question and not three, and so that a further kind of word - the verbs are the next - is added by writing another table and one line here.";
  "The merge is the strict one, so a word appearing in both tables is an error rather than a silent choice between two wordings. That is the whole of the check this needs: a word belongs to one kind, and if somebody has written it down twice the two entries will disagree sooner or later and nothing afterwards could say which was meant.";
  let r = {};
  let from2 = app_en_learn_bible_gloss_urdu_word_explains();
  object_merge(r, from2);
  let from3 = app_en_learn_bible_gloss_urdu_noun_explains();
  object_merge(r, from3);
  let from4 = app_en_learn_bible_gloss_urdu_name_explains();
  object_merge(r, from4);
  return r;
}
