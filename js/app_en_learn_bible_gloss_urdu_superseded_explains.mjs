import { app_en_learn_bible_gloss_urdu_reverent_words } from "./app_en_learn_bible_gloss_urdu_reverent_words.mjs";
import { app_en_learn_bible_gloss_urdu_capital_tail } from "./app_en_learn_bible_gloss_urdu_capital_tail.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { text_lower_is } from "./text_lower_is.mjs";
import { list_map } from "./list_map.mjs";
export function app_en_learn_bible_gloss_urdu_superseded_explains() {
  "Every wording that was once the settled explanation of an English word in the store that teaches English to an Urdu reader, and has since been replaced by a better one, in the small-letter form it was written in and in the capitalised form the table derived from it.";
  "Retiring a wording strands the entries carrying it. The sweep that writes a settled wording over a stale one recognises a stale one by finding it in the table, so the moment a wording leaves the table the entries holding it become invisible to the only thing that could mend them. They then sit in the store forever, saying something true and out of date, and no reading of the table can see them.";
  "So a wording leaves the table by being written down here in the same commit. Nothing else about it changes: it is still a sentence somebody wrote for a whole word rather than for the verse it sits in, which is the one property that makes it safe to write over. A reader of this list is looking at the history of the settled wordings, which is the only place that history is kept.";
  "THE WORD IS NAMED BESIDE EACH WORDING AND THE CAPITAL FORM IS BUILT RATHER THAN TYPED. The settled table does not hold a capitalised entry, it derives one by adding a sentence about the capital to the small-letter wording; so retiring a wording strands its capital form too, and that form was never written anywhere to be copied from. Measured at the moment this was found: one hundred and eighty-nine places carrying the retired wording for 'The' alone, invisible to a sweep that knew only the nine small-letter strings.";
  "A WORD THAT IS ALREADY WRITTEN WITH A CAPITAL GETS NO DERIVED FORM EITHER. The capital pass builds a capitalised entry by taking a small-letter wording and adding a sentence about the sentence start, so it only ever runs on a word that is written in small letters. A word that carries its capital always, a name, is spelled with the capital in the table itself and the table adds a different sentence about the capital to it, one about names rather than about sentence starts. Building the sentence-start form for such a word here would name a sentence nothing in the table ever wrote, which is the same fault this list exists to avoid. Every word on the list today is written in small letters, so asking costs nothing now and holds the moment a name is retired.";
  "The word is what the list needs beyond the string, because the capital form exists only for words the capital pass would capitalise. The words whose capital has two possible reasons get no capitalised entry at all, so building one for them here would name a sentence the table never wrote and hand the sweep permission to overwrite something a person authored. Asking the same list the capital pass asks is what makes the two agree by construction rather than by luck.";
  "THE TWO NAME WORDINGS WERE FOUND BY LOOKING FOR THE FAULT RATHER THAN BY REMEMBERING IT. A wording for a name is built by the name table and ends in the one sentence that table joins onto every one of its wordings, and nothing else in the store writes that sentence. So every place holding a wording that ends in it and is not the wording the table says today is a wording that was replaced without being written down here, and the store can simply be asked for them. Asked once, it answered with exactly two shapes over four hundred and twelve places, both of them the same word's, both retired on one day when the table was told to stop spelling the name inside the wording.";
  "The rule that retired them is worth keeping beside them, because a reader meeting the old wording will think it the better one. It says the name, and the new one does not. The name table's own reason is that our spelling of the name is already standing beside the wording in the short Urdu written for the word, so a wording that spelled it again would put the same name twice on one line and give two spellings the chance to drift apart when somebody rules on how the name should be written. The new wording is shorter because the line as a whole already says the thing.";
  "Word for word, and never trimmed. A wording here costs one string and one comparison; a wording left out costs entries nobody will ever find again.";
  "THE FIFTY IRREGULAR PAST FORMS WERE COPIED OUT BEFORE THE GENERATOR THAT WROTE THEM WAS CHANGED, AND THAT ORDER IS THE RULE RATHER THAN THE HABIT. They were never typed anywhere: a loop over the map of irregular verbs built each one by joining a head to a tail, so the only place the old sentence ever existed as a string was in the answer that loop returned. Change the loop first and the old string is gone from the running repo entirely, and a list built afterwards by asking the same loop hands back the new sentence under fifty keys, which retires nothing and quietly tells the sweep that the new wording is stale. So the old answer was read out of the live table and pasted here as plain text, and only then was the generator touched.";
  "A WORD ALREADY WRITTEN IN CAPITALS IS NAMED HERE IN CAPITALS AND GETS NOTHING DERIVED, WHICH IS WHY THE LIST ASKS THE WORD RATHER THAN THE WORDING. 'IS' is the first such word on the list. Its retired wording is the retired wording for 'is' with one more sentence joined on, about the word being written in capitals throughout - so the two strings are nearly the same and only the word beside them says which is which. Read from the wording alone there would be no way to know that one of them must not be capitalised again.";
  "That is why everything on this list is a literal string even where a generator could produce it. This list is a record of what was in front of readers, and a record that recomputes itself is not a record. The capital forms are the single exception and they are safe for the opposite reason: they are derived from a literal already on the list, by the same rule the settled table uses, so they follow the retired wording rather than the current one.";
  "SOME KEYS ARE NOW ON THIS LIST TWICE AND SOME THREE TIMES, IN AS MANY DIFFERENT WORDINGS, AND THAT IS THE LIST WORKING RATHER THAN THE LIST ROTTING. All of it happened on one day, in three rounds: the terse sentence was replaced by a long one; then measuring which of two near-identical long sentences the store already used showed the wrong one had been picked, so it was replaced again; then the clause naming the third form was made to say what that form is for rather than only where it appears, which moved a further forty nine. A list of what readers were shown has to hold every wording that reached them, not the last one, because a chapter written between two of those changes carries the middle version and nothing else would ever rewrite it. Retiring only the most recent would leave those entries frozen with no name to catch them.";
  "So the list is not the history of a decision and it is not sorted, and nothing about it should be read as a sequence. It is a set of strings nobody should still be reading, and being on it twice or three times for one word costs nothing at all - the sweep asks each entry only whether its wording is in the set.";
  "The third round is also why the newest block is not the same fifty words as the block above it. What moved was every entry carrying the clause about 'have' and 'be', and that clause sits on regular verbs like 'named' and 'filled' as well as on irregular ones, while a past form that is only a past form - 'wore', 'ran', 'went' - never carried it at all. The two blocks overlap and neither contains the other. That is the ordinary case: a round retires whatever its own change displaced, which is a set defined by the clause being replaced and never by a word list somebody keeps in step by hand.";
  let retired = [
    [
      "be",
      "فعل ہے: ہونا۔ یہ 'be' کی بُنیادی شکل ہے، اَور اِس کی باقی شکلیں بےقاعدہ ہیں: be → was → been۔",
    ],
    [
      "are",
      "فعل 'be' کی وہ شکل ہے جو اِس وقت کے لیٔے، ایک سے زیادہ کے ساتھ اَور 'you' کے ساتھ آتی ہے: ہیں۔",
    ],
    ["because", "یہ لفظ وجہ بتاتا ہے: 'کیونکہ'۔"],
    ["is", "فعل 'be' کی وہ شکل ہے جو اِس وقت کے لیٔے، ایک کے ساتھ آتی ہے: ہے۔"],
    [
      "IS",
      "فعل 'be' کی وہ شکل ہے جو اِس وقت کے لیٔے، ایک کے ساتھ آتی ہے: ہے۔ یہاں یہ پُورا بڑے حرفوں میں لِکھا گیا ہے۔",
    ],
    [
      "am",
      "فعل 'be' کی وہ شکل ہے جو اِس وقت کے لیٔے، صِرف 'I' کے ساتھ آتی ہے: ہُوں۔",
    ],
    [
      "was",
      "فعل 'be' کی وہ شکل ہے جو گُزرے ہوئے وقت کے لیٔے، ایک کے ساتھ آتی ہے: تھا، تھی۔",
    ],
    [
      "were",
      "فعل 'be' کی وہ شکل ہے جو گُزرے ہوئے وقت کے لیٔے، ایک سے زیادہ کے ساتھ اَور 'you' کے ساتھ آتی ہے: تھے، تھیں۔",
    ],
    [
      "are",
      "فعل 'be' یعنی 'ہونا' کی حال کی شکل ہے — حال یعنی وہ وقت جو گُزرا نہیں۔ یہ شکل تب آتی ہے جب بات ایک سے زیادہ کی ہو، یا جب 'you' کے ساتھ آٔے — چاہے 'you' ایک ہی شخص ہو۔ 'be' اِکلوتا انگریزی فعل ہے جس کی حال میں تین شکلیں ہیں: 'am'، 'is' اَور 'are'۔",
    ],
    [
      "ate",
      "فعل 'eat' یعنی 'کھانا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'eat' سے 'ate' اَور 'eaten' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "brought",
      "فعل 'bring' یعنی 'لانا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'bring' سے 'brought' اَور 'brought' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "built",
      "فعل 'build' یعنی 'تعمِیر کرنا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'build' سے 'built' اَور 'built' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "came",
      "فعل 'come' یعنی 'آنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'come' سے 'came' اَور 'come' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "drank",
      "فعل 'drink' یعنی 'پِینا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'drink' سے 'drank' اَور 'drunk' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "driven",
      "فعل 'drive' یعنی 'نِکالنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'drive' سے 'drove' اَور 'driven' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "drove",
      "فعل 'drive' یعنی 'نِکالنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'drive' سے 'drove' اَور 'driven' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "drunk",
      "فعل 'drink' یعنی 'پِینا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'drink' سے 'drank' اَور 'drunk' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "eaten",
      "فعل 'eat' یعنی 'کھانا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'eat' سے 'ate' اَور 'eaten' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "fallen",
      "فعل 'fall' یعنی 'گِرنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'fall' سے 'fell' اَور 'fallen' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "fell",
      "فعل 'fall' یعنی 'گِرنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'fall' سے 'fell' اَور 'fallen' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "found",
      "فعل 'find' یعنی 'ڈھُونڈ نِکالنا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'find' سے 'found' اَور 'found' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "gave",
      "فعل 'give' یعنی 'دینا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'give' سے 'gave' اَور 'given' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "given",
      "فعل 'give' یعنی 'دینا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'give' سے 'gave' اَور 'given' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "gone",
      "فعل 'go' یعنی 'جانا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'go' سے 'went' اَور 'gone' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "got",
      "فعل 'get' یعنی 'حاصِل کرنا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'get' سے 'got' اَور 'got' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "heard",
      "فعل 'hear' یعنی 'سُننا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'hear' سے 'heard' اَور 'heard' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "knew",
      "فعل 'know' یعنی 'جاننا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'know' سے 'knew' اَور 'known' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "known",
      "فعل 'know' یعنی 'جاننا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'know' سے 'knew' اَور 'known' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "laid",
      "فعل 'lay' یعنی 'رکھ دینا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'lay' سے 'laid' اَور 'laid' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "left",
      "فعل 'leave' یعنی 'چھوڑنا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'leave' سے 'left' اَور 'left' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "lent",
      "فعل 'lend' یعنی 'اُدھار دینا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'lend' سے 'lent' اَور 'lent' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "made",
      "فعل 'make' یعنی 'بنانا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'make' سے 'made' اَور 'made' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "paid",
      "فعل 'pay' یعنی 'ادا کرنا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'pay' سے 'paid' اَور 'paid' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "ran",
      "فعل 'run' یعنی 'دَوڑنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'run' سے 'ran' اَور 'run' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "said",
      "فعل 'say' یعنی 'کہنا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'say' سے 'said' اَور 'said' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "sat",
      "فعل 'sit' یعنی 'بیٹھنا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'sit' سے 'sat' اَور 'sat' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "saw",
      "فعل 'see' یعنی 'دیکھنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'see' سے 'saw' اَور 'seen' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "seen",
      "فعل 'see' یعنی 'دیکھنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'see' سے 'saw' اَور 'seen' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "sent",
      "فعل 'send' یعنی 'بھیجنا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'send' سے 'sent' اَور 'sent' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "slept",
      "فعل 'sleep' یعنی 'سونا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'sleep' سے 'slept' اَور 'slept' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "sowed",
      "فعل 'sow' یعنی 'بونا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'sow' سے 'sowed' اَور 'sown' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "sown",
      "فعل 'sow' یعنی 'بونا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'sow' سے 'sowed' اَور 'sown' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "spoke",
      "فعل 'speak' یعنی 'بولنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'speak' سے 'spoke' اَور 'spoken' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "spoken",
      "فعل 'speak' یعنی 'بولنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'speak' سے 'spoke' اَور 'spoken' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "stood",
      "فعل 'stand' یعنی 'کھڑا ہونا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'stand' سے 'stood' اَور 'stood' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "taken",
      "فعل 'take' یعنی 'لینا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'take' سے 'took' اَور 'taken' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "taught",
      "فعل 'teach' یعنی 'سِکھانا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'teach' سے 'taught' اَور 'taught' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "thought",
      "فعل 'think' یعنی 'سوچنا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'think' سے 'thought' اَور 'thought' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "threw",
      "فعل 'throw' یعنی 'پھینکنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'throw' سے 'threw' اَور 'thrown' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "thrown",
      "فعل 'throw' یعنی 'پھینکنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'throw' سے 'threw' اَور 'thrown' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "told",
      "فعل 'tell' یعنی 'بتانا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'tell' سے 'told' اَور 'told' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "took",
      "فعل 'take' یعنی 'لینا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'take' سے 'took' اَور 'taken' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "understood",
      "فعل 'understand' یعنی 'سمجھنا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'understand' سے 'understood' اَور 'understood' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "went",
      "فعل 'go' یعنی 'جانا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'go' سے 'went' اَور 'gone' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "wept",
      "فعل 'weep' یعنی 'رونا' کی گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔ یہ فعل بےقاعدہ ہے: 'weep' سے 'wept' اَور 'wept' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "wore",
      "فعل 'wear' یعنی 'پہننا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'wear' سے 'wore' اَور 'worn' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "worn",
      "فعل 'wear' یعنی 'پہننا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'wear' سے 'wore' اَور 'worn' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "written",
      "فعل 'write' یعنی 'لِکھنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ یہ فعل بےقاعدہ ہے: 'write' سے 'wrote' اَور 'written' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "wrote",
      "فعل 'write' یعنی 'لِکھنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل بےقاعدہ ہے: 'write' سے 'wrote' اَور 'written' بنتا ہے، 'ed' لگا کر نہیں۔",
    ],
    [
      "ate",
      "فعل 'eat' یعنی 'کھانا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'eat' سے 'ate'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "brought",
      "فعل 'bring' یعنی 'لانا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'bring' سے 'brought'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "built",
      "فعل 'build' یعنی 'تعمِیر کرنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'build' سے 'built'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "came",
      "فعل 'come' یعنی 'آنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'come' سے 'came'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "drank",
      "فعل 'drink' یعنی 'پِینا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'drink' سے 'drank'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "driven",
      "فعل 'drive' یعنی 'نِکالنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'drive' سے 'driven'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "drove",
      "فعل 'drive' یعنی 'نِکالنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'drive' سے 'drove'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "drunk",
      "فعل 'drink' یعنی 'پِینا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'drink' سے 'drunk'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "eaten",
      "فعل 'eat' یعنی 'کھانا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'eat' سے 'eaten'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "fallen",
      "فعل 'fall' یعنی 'گِرنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'fall' سے 'fallen'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "fell",
      "فعل 'fall' یعنی 'گِرنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'fall' سے 'fell'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "found",
      "فعل 'find' یعنی 'ڈھُونڈ نِکالنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'find' سے 'found'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "gave",
      "فعل 'give' یعنی 'دینا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'give' سے 'gave'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "given",
      "فعل 'give' یعنی 'دینا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'give' سے 'given'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "gone",
      "فعل 'go' یعنی 'جانا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'go' سے 'gone'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "got",
      "فعل 'get' یعنی 'حاصِل کرنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'get' سے 'got'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "heard",
      "فعل 'hear' یعنی 'سُننا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'hear' سے 'heard'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "knew",
      "فعل 'know' یعنی 'جاننا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'know' سے 'knew'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "known",
      "فعل 'know' یعنی 'جاننا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'know' سے 'known'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "laid",
      "فعل 'lay' یعنی 'رکھ دینا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'lay' سے 'laid'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "left",
      "فعل 'leave' یعنی 'چھوڑنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'leave' سے 'left'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "lent",
      "فعل 'lend' یعنی 'اُدھار دینا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'lend' سے 'lent'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "made",
      "فعل 'make' یعنی 'بنانا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'make' سے 'made'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "paid",
      "فعل 'pay' یعنی 'ادا کرنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'pay' سے 'paid'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "ran",
      "فعل 'run' یعنی 'دَوڑنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'run' سے 'ran'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "said",
      "فعل 'say' یعنی 'کہنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'say' سے 'said'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "sat",
      "فعل 'sit' یعنی 'بیٹھنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'sit' سے 'sat'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "saw",
      "فعل 'see' یعنی 'دیکھنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'see' سے 'saw'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "seen",
      "فعل 'see' یعنی 'دیکھنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'see' سے 'seen'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "sent",
      "فعل 'send' یعنی 'بھیجنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'send' سے 'sent'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "slept",
      "فعل 'sleep' یعنی 'سونا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'sleep' سے 'slept'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "sowed",
      "فعل 'sow' یعنی 'بونا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'sow' سے 'sowed'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "sown",
      "فعل 'sow' یعنی 'بونا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'sow' سے 'sown'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "spoke",
      "فعل 'speak' یعنی 'بولنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'speak' سے 'spoke'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "spoken",
      "فعل 'speak' یعنی 'بولنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'speak' سے 'spoken'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "stood",
      "فعل 'stand' یعنی 'کھڑا ہونا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'stand' سے 'stood'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "taken",
      "فعل 'take' یعنی 'لینا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'take' سے 'taken'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "taught",
      "فعل 'teach' یعنی 'سِکھانا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'teach' سے 'taught'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "thought",
      "فعل 'think' یعنی 'سوچنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'think' سے 'thought'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "threw",
      "فعل 'throw' یعنی 'پھینکنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'throw' سے 'threw'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "thrown",
      "فعل 'throw' یعنی 'پھینکنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'throw' سے 'thrown'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "told",
      "فعل 'tell' یعنی 'بتانا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'tell' سے 'told'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "took",
      "فعل 'take' یعنی 'لینا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'take' سے 'took'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "understood",
      "فعل 'understand' یعنی 'سمجھنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'understand' سے 'understood'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "went",
      "فعل 'go' یعنی 'جانا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'go' سے 'went'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "wept",
      "فعل 'weep' یعنی 'رونا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'weep' سے 'wept'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "wore",
      "فعل 'wear' یعنی 'پہننا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'wear' سے 'wore'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "worn",
      "فعل 'wear' یعنی 'پہننا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'wear' سے 'worn'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "written",
      "فعل 'write' یعنی 'لِکھنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہ شکل بھی فعل کے آخر میں '-ed' لگا کر بنتی ہے، مگر یہ فعل بےقاعدہ ہے: 'write' سے 'written'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "wrote",
      "فعل 'write' یعنی 'لِکھنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً فعل کے آخر میں '-ed' لگا کر ماضی بنایا جاتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'write' سے 'wrote'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "been",
      "فعل 'be' کی وہ شکل ہے جو ہمیشہ 'have'، 'has' یا 'had' کے پِیچھے آتی ہے، اکیلی نہیں۔",
    ],
    [
      "being",
      "فعل 'be' کی وہ شکل ہے جو چلتے ہوئے کام کے لیٔے آتی ہے۔ ہر ایسی شکل کے آخِر میں ing لگتا ہے۔",
    ],
    [
      "done",
      "فعل 'do' کی وہ شکل ہے جو 'have'، 'has' یا 'had' کے پِیچھے آتی ہے۔",
    ],
    ["having", "فعل 'have' کی وہ شکل ہے جو چلتے ہوئے کام کے لیٔے آتی ہے۔"],
    [
      "astonished",
      "فعل 'astonish' یعنی 'حَیران کرنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "baptized",
      "فعل 'baptize' یعنی 'بپتِسمہ دینا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ اِس کی بُنیادی شکل 'baptize' کے آخِر میں پہلے ہی 'e' ہے، اِس لیٔے صِرف 'd' لگا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "brought",
      "فعل 'bring' یعنی 'لانا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'bring' سے 'brought'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "built",
      "فعل 'build' یعنی 'تعمِیر کرنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'build' سے 'built'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "driven",
      "فعل 'drive' یعنی 'نِکالنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'drive' سے 'driven'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "drunk",
      "فعل 'drink' یعنی 'پِینا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'drink' سے 'drunk'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "eaten",
      "فعل 'eat' یعنی 'کھانا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'eat' سے 'eaten'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "ended",
      "فعل 'end' یعنی 'ختم ہونا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "fallen",
      "فعل 'fall' یعنی 'گِرنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'fall' سے 'fallen'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "filled",
      "فعل 'fill' یعنی 'بھر دینا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "finished",
      "فعل 'finish' یعنی 'ختم کرنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "found",
      "فعل 'find' یعنی 'ڈھُونڈ نِکالنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'find' سے 'found'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "given",
      "فعل 'give' یعنی 'دینا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'give' سے 'given'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "gone",
      "فعل 'go' یعنی 'جانا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'go' سے 'gone'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "got",
      "فعل 'get' یعنی 'حاصِل کرنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'get' سے 'got'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "handed",
      "فعل 'hand' یعنی 'سَونپنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "happened",
      "فعل 'happen' یعنی 'پیش آنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "heard",
      "فعل 'hear' یعنی 'سُننا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'hear' سے 'heard'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "known",
      "فعل 'know' یعنی 'جاننا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'know' سے 'known'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "laid",
      "فعل 'lay' یعنی 'رکھ دینا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'lay' سے 'laid'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "left",
      "فعل 'leave' یعنی 'چھوڑنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'leave' سے 'left'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "lent",
      "فعل 'lend' یعنی 'اُدھار دینا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'lend' سے 'lent'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "made",
      "فعل 'make' یعنی 'بنانا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'make' سے 'made'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "married",
      "فعل 'marry' یعنی 'شادی کرنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ لِکھتے وقت 'marry' کا آخِری 'y' بدل کر 'i' ہو گیا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "named",
      "فعل 'name' یعنی 'نام رکھنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ اِس کی بُنیادی شکل 'name' کے آخِر میں پہلے ہی 'e' ہے، اِس لیٔے صِرف 'd' لگا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "opened",
      "فعل 'open' یعنی 'کھولنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "paid",
      "فعل 'pay' یعنی 'ادا کرنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'pay' سے 'paid'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "prepared",
      "فعل 'prepare' یعنی 'تیّار کرنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ اِس کی بُنیادی شکل 'prepare' کے آخِر میں پہلے ہی 'e' ہے، اِس لیٔے صِرف 'd' لگا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "promised",
      "فعل 'promise' یعنی 'وعدہ کرنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ اِس کی بُنیادی شکل 'promise' کے آخِر میں پہلے ہی 'e' ہے، اِس لیٔے صِرف 'd' لگا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "received",
      "فعل 'receive' یعنی 'پانا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ اِس کی بُنیادی شکل 'receive' کے آخِر میں پہلے ہی 'e' ہے، اِس لیٔے صِرف 'd' لگا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "said",
      "فعل 'say' یعنی 'کہنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'say' سے 'said'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "sat",
      "فعل 'sit' یعنی 'بیٹھنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'sit' سے 'sat'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "seen",
      "فعل 'see' یعنی 'دیکھنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'see' سے 'seen'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "sent",
      "فعل 'send' یعنی 'بھیجنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'send' سے 'sent'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "slept",
      "فعل 'sleep' یعنی 'سونا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'sleep' سے 'slept'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "sown",
      "فعل 'sow' یعنی 'بونا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'sow' سے 'sown'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "spoken",
      "فعل 'speak' یعنی 'بولنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'speak' سے 'spoken'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "stayed",
      "فعل 'stay' یعنی 'ٹھہرنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "stood",
      "فعل 'stand' یعنی 'کھڑا ہونا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'stand' سے 'stood'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "taken",
      "فعل 'take' یعنی 'لینا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'take' سے 'taken'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "taught",
      "فعل 'teach' یعنی 'سِکھانا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'teach' سے 'taught'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "thought",
      "فعل 'think' یعنی 'سوچنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'think' سے 'thought'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "thrown",
      "فعل 'throw' یعنی 'پھینکنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'throw' سے 'thrown'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "told",
      "فعل 'tell' یعنی 'بتانا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'tell' سے 'told'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "understood",
      "فعل 'understand' یعنی 'سمجھنا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'understand' سے 'understood'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "wept",
      "فعل 'weep' یعنی 'رونا' کی ماضی کی شکل ہے — ماضی یعنی گُزرا ہُوا وقت۔ انگریزی میں عموماً آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'weep' سے 'wept'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "worked",
      "فعل 'work' یعنی 'کام کرنا' کی گُزرے ہوئے زمانے کی شکل ہے۔ یہ فعل باقاعدہ ہے، یعنی اِس کے آخِر میں 'ed' لگتا ہے۔ یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔",
    ],
    [
      "worn",
      "فعل 'wear' یعنی 'پہننا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'wear' سے 'worn'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "written",
      "فعل 'write' یعنی 'لِکھنا' کی وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔ انگریزی میں عموماً یہاں بھی آخر میں '-ed' لگتا ہے، مگر چند پُرانے فعلوں میں لفظ خود بدل جاتا ہے: 'write' سے 'written'۔ اَیسے فعل یاد کرنے پڑتے ہیں۔",
    ],
    [
      "this",
      "یہ لفظ کِسی پاس کی چیز کی طرف اِشارہ کرتا ہے، جیسے اُردُو میں ’یہ‘۔ دُور کی چیز کے لیٔے ’that‘ آتا ہے۔",
    ],
    [
      "their",
      "یہ لفظ مِلکیّت بتاتا ہے: جو چیز اِس کے بعد آتی ہے وہ ایک سے زیادہ لوگوں کی ہے، جیسے اُردُو میں ’اُن کا‘۔",
    ],
    [
      "its",
      "یہ لفظ مِلکیّت بتاتا ہے: جو چیز اِس کے بعد آتی ہے وہ کِسی چیز یا جانور کی ہے، جیسے اُردُو میں ’اُس کا‘۔",
    ],
    [
      "to",
      "یہ چھوٹا لفظ دو کام کرتا ہے۔ حرفِ جار کے طور پر یہ بتاتا ہے کہ کام کِس طرف یا کِس تک جا رہا ہے، جیسے اُردُو میں ’کی طرف‘ یا ’کو‘۔ اَور کِسی فعل سے پہلے آ کر یہ اُس کی بُنیادی شکل بناتا ہے، اَور تب یہ خُود کویٔی معنی نہیں رکھتا۔",
    ],
    [
      "the",
      "حرفِ تعریف ہے، یعنی وہ چھوٹا لفظ جو نام سے پہلے آ کر بتاتا ہے کہ کویٔی معلوم اَور خاص چیز مُراد ہے۔",
    ],
    [
      "a",
      "حرفِ تعریف ہے، مگر وہ والا جو کِسی ایک اَن جانی چیز کے لیٔے آتا ہے۔",
    ],
    [
      "an",
      "حرفِ تعریف ہے، مگر وہ والا جو کِسی ایک اَن جانی چیز کے لیٔے آتا ہے۔ ’a‘ کی جگہ ’an‘ تب آتا ہے جب اگلا لفظ حرفِ عِلّت کی آواز سے شُروع ہو۔",
    ],
    [
      "Jesus",
      "یِسُوع کا خاص نام ہے، یعنی اُن ہی کا جِن کی خُوشخبری یہ کِتاب سُناتی ہے۔ انگریزی میں ہر خاص نام کا پہلا حرف بڑا لکھا جاتا ہے۔",
    ],
    [
      "JESUS",
      "یِسُوع کا خاص نام ہے۔ یہاں یہ پُورا کا پُورا بڑے حرفوں میں لِکھا گیا ہے، کیونکہ یہ ایک تختی پر لِکھی ہویٔی بات ہے۔ انگریزی میں ہر خاص نام کا پہلا حرف بڑا لکھا جاتا ہے۔",
    ],
  ];
  let reverent = app_en_learn_bible_gloss_urdu_reverent_words();
  let tail = app_en_learn_bible_gloss_urdu_capital_tail();
  let r = [];
  function retired_write(pair) {
    let word = list_first(pair);
    let wording = list_last(pair);
    list_add(r, wording);
    let not_reverent = list_includes_not(reverent, word);
    let small = text_lower_is(word);
    let capitalised = not_reverent && small;
    if (capitalised) {
      let whole = wording + tail;
      list_add(r, whole);
    }
  }
  list_map(retired, retired_write);
  return r;
}
