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
