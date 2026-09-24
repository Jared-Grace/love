import { app_en_learn_bible_gloss_urdu_action_verb_explains } from "./app_en_learn_bible_gloss_urdu_action_verb_explains.mjs";
import { app_en_learn_bible_gloss_urdu_plural_noun_explains } from "./app_en_learn_bible_gloss_urdu_plural_noun_explains.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { not } from "./not.mjs";
export function app_en_learn_bible_gloss_urdu_spelling_claims_wrong() {
  "Every sentence in the gloss tables that tells a reader how a word is spelled, checked against the word it was written for. These sentences are generated from a template over a list, so one of them is written for every member alike, and it is false for whichever members are exceptions to the exception it describes.";
  "That is not a guess about what could go wrong. It went wrong: the past form sentence said that in a few old verbs the word itself changes, 'hear' to 'heard', when nothing changes - the spelling adds a plain 'd' and it is the sound that moves. Another told a reader that no '-ed' had been added while printing a word with '-ed' on the end of it. Six live sentences were wrong about two verbs, and they were found by reading one word by hand.";
  "A spelling claim is worth checking because it is the one kind of claim in these tables that can be settled without knowing any Urdu. The sentence names a base and a form, and whether the form is the base plus a suffix is arithmetic on two strings. Nothing else here is decidable that way, which is exactly why this much should never again be left to somebody noticing.";
  "IT COUNTS WHAT IT FOUND AS WELL AS WHAT WAS WRONG, BECAUSE A CHECK THAT LOOKS FOR A SENTENCE FAILS OPEN WHEN THE SENTENCE IS REWORDED. Finding no claims and finding no faults are the same answer to a caller that only reads the fault list, so the caller is given the counts too and holds them to a floor. Reword a claim and the gate goes red asking to be told the new wording, which is the failure that should happen.";
  let verbs = app_en_learn_bible_gloss_urdu_action_verb_explains();
  let plurals = app_en_learn_bible_gloss_urdu_plural_noun_explains();
  let s_form =
    "' کی وہ شکل ہے جو ایک ہی کرنے والے کے ساتھ آتی ہے: آخِر میں 's' لگا ہے۔";
  let ed_form = "یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔";
  let changed = "، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: '";
  let sound =
    "لِکھنے میں صِرف 'd' لگا ہے، مگر بولنے میں آواز بدل جاتی ہے، اِس لیٔے یہ فعل بےقاعدہ گِنا جاتا ہے: '";
  let regular = "، اَور اِس فعل میں بھی یِہی ہُوا ہے: '";
  let plural_plain = "اَور جمع اُس کے آخِر میں 's' لگا کر بنتی ہے۔";
  let no_ed = "، 'ed' لگا کر نہیں۔";
  let three_head = " یہ فعل بےقاعدہ ہے: '";
  let and_word = "' اَور '";
  let head = "فعل '";
  let joiner = "' سے '";
  let singular_head = "واحد '";
  let faults = [];
  let counts = {
    s_form: 0,
    ed_form: 0,
    changed: 0,
    no_ed: 0,
    sound: 0,
    regular: 0,
    plural_plain: 0,
  };
  function quoted_after(said, needle) {
    "The word inside the next pair of single quotes after a needle, or an empty string where the sentence does not run that way. An empty answer never matches a spelling arithmetic, so a sentence this cannot read is reported rather than passed.";
    let at = said.indexOf(needle);
    let absent = less_than(at, 0);
    if (absent) {
      let none = "";
      return none;
    }
    let from = at + needle.length;
    let end = said.indexOf("'", from);
    let unclosed = less_than(end, 0);
    if (unclosed) {
      let none2 = "";
      return none2;
    }
    let word = said.slice(from, end);
    return word;
  }
  function fault_add(spelled, claim, said) {
    let one = {
      word: spelled,
      claim: claim,
      explain: said,
    };
    faults.push(one);
  }
  function regular_spelling_is(base, form) {
    "Whether the form is the base with an ordinary '-ed' on it: the plain suffix, or the bare 'd' where the base already ends in 'e'.";
    let ends_e = base.endsWith("e");
    let e_and_d = ends_e && equal(form, base + "d");
    let plain = equal(form, base + "ed");
    let yes = e_and_d || plain;
    return yes;
  }
  function pair_read(said, needle) {
    "The base and the form a clause names, as one object. Both clauses that name a pair write it the same way - the needle, the base, the word for 'from', the form - so one reader serves them both.";
    let base = quoted_after(said, needle);
    let form = quoted_after(said, needle + base + joiner);
    let r2 = {
      base: base,
      form: form,
    };
    return r2;
  }
  for (let spelled of object_property_names(verbs)) {
    let said = verbs[spelled];
    let claims_s = said.includes(s_form);
    if (claims_s) {
      counts.s_form = counts.s_form + 1;
      let base = quoted_after(said, head);
      let right = equal(spelled, base + "s");
      if (not(right)) {
        fault_add(spelled, "s_form", said);
      }
    }
    let claims_ed = said.includes(ed_form);
    if (claims_ed) {
      counts.ed_form = counts.ed_form + 1;
      let base2 = quoted_after(said, head);
      let ends_y = base2.endsWith("y");
      let y_ied = ends_y && equal(spelled, base2.slice(0, -1) + "ied");
      let right2 = regular_spelling_is(base2, spelled) || y_ied;
      if (not(right2)) {
        fault_add(spelled, "ed_form", said);
      }
    }
    let claims_changed = said.includes(changed);
    if (claims_changed) {
      counts.changed = counts.changed + 1;
      let pair = pair_read(said, changed);
      let bare_d = equal(pair.form, pair.base + "d");
      let still_regular = regular_spelling_is(pair.base, pair.form) || bare_d;
      if (still_regular) {
        fault_add(spelled, "changed", said);
      }
    }
    let claims_no_ed = said.includes(no_ed);
    if (claims_no_ed) {
      counts.no_ed = counts.no_ed + 1;
      let base3 = quoted_after(said, three_head);
      let past = quoted_after(said, three_head + base3 + joiner);
      let done = quoted_after(
        said,
        three_head + base3 + joiner + past + and_word,
      );
      let past_regular = regular_spelling_is(base3, past);
      let done_regular = regular_spelling_is(base3, done);
      let past_d = equal(past, base3 + "d");
      let done_d = equal(done, base3 + "d");
      let some_ed = past_regular || done_regular || past_d || done_d;
      if (some_ed) {
        fault_add(spelled, "no_ed", said);
      }
    }
    let claims_sound = said.includes(sound);
    if (claims_sound) {
      counts.sound = counts.sound + 1;
      let pair2 = pair_read(said, sound);
      let ends_e2 = pair2.base.endsWith("e");
      let right3 = equal(pair2.form, pair2.base + "d") && not(ends_e2);
      if (not(right3)) {
        fault_add(spelled, "sound", said);
      }
    }
    let claims_regular = said.includes(regular);
    if (claims_regular) {
      counts.regular = counts.regular + 1;
      let pair3 = pair_read(said, regular);
      let right4 = regular_spelling_is(pair3.base, pair3.form);
      if (not(right4)) {
        fault_add(spelled, "regular", said);
      }
    }
  }
  for (let word of object_property_names(plurals)) {
    let said2 = plurals[word];
    let claims_plain = said2.endsWith(plural_plain);
    if (claims_plain) {
      counts.plural_plain = counts.plural_plain + 1;
      let one2 = quoted_after(said2, singular_head);
      let right5 = equal(word, one2 + "s");
      if (not(right5)) {
        fault_add(word, "plural_plain", said2);
      }
    }
  }
  let r = {
    faults: faults,
    counts: counts,
  };
  return r;
}
