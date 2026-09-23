import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function app_en_learn_bible_gloss_urdu_adjective_explains() {
  "The settled wording for each describing word in these passages, for the store that explains English words to an Urdu reader.";
  "The store was handing every one of these the single word ‘adjective’, which tells a reader the one thing they cannot use. A beginner meeting ‘wicked’ does not need to be told it describes; they need to be told what it says about the man it describes, and whether it is the same as ‘bad’ or something harder.";
  "So each wording gives the Urdu word first and stops there where the Urdu word is the whole of it. ‘red’ is لال and there is nothing else to say; a sentence explaining that red is a colour would be filling space. Where the English word carries something the one Urdu word does not, a second sentence says that and no more: ‘old’ is پُرانا for a thing and بُوڑھا for a person, and a reader handed only one of those will read half the verses wrong.";
  "Opposites are written in by rule rather than by hand, and that is why they are a separate table below. Four pairs in these passages stand against each other - good and bad, large and small, new and old, righteous and wicked - and a learner who is given both ends at once holds two words for the price of one. Writing the clause by hand would have meant saying it eight times and getting it right eight times; the loop says it once.";
  "A word is written here only if the passages actually use it as a describing word. ‘all’ is not here although the store filed it under the same label, because it already has a settled wording of its own that says what it really does, which is to say how many. Two wordings for one word is the one thing the strict merge that assembles these tables refuses outright, so the check is the build itself rather than a promise made here.";
  let meaning = {
    good: "اچّھا",
    bad: "بُرا",
    evil: "بُرا",
    wicked: "شرِیر",
    righteous: "راستباز",
    worthy: "لایٔق",
    large: "بڑا",
    small: "چھوٹا",
    little: "تھوڑا، چھوٹا",
    new: "نیا",
    old: "پُرانا",
    young: "جوان",
    rich: "دَولتمند",
    strong: "مضبُوط، طاقتور",
    blind: "اندھا",
    red: "لال",
    far: "دُور",
    other: "دُوسرا",
  };
  let more = {
    evil: "یہ اُس کام یا اُس رُوح کے لیٔے آتا ہے جو بھلایٔی کے خِلاف ہے۔",
    wicked: "یہ اُس آدمی کے لیٔے آتا ہے جو جان بُوجھ کر بُرا کام کرتا ہے۔",
    righteous: "یعنی جو ٹھیک کام کرتا ہے اَور خُدا کے نزدیک ٹھیک ہے۔",
    worthy: "یعنی جو کِسی چیز کے قابل ہے۔",
    old: "چیز کے لیٔے پُرانا، اَور آدمی کے لیٔے بُوڑھا۔",
    little: "یہ بتاتا ہے کہ چیز بڑی نہیں، یا تھوڑی سی ہے۔",
    blind: "یعنی جِسے نظر نہیں آتا۔",
    far: "یہ فاصلہ بتاتا ہے: جو پاس نہیں۔",
    other: "یعنی وُہی نہیں جو اُوپر آیا، بلکہ کویٔی اَور۔",
  };
  let opposites = [
    ["good", "bad"],
    ["large", "small"],
    ["new", "old"],
    ["righteous", "wicked"],
  ];
  let r = {};
  function meaning_write(word) {
    let urdu = property_get(meaning, word);
    property_set(r, word, "صِفت ہے: " + urdu + "۔");
  }
  let list = object_property_names(meaning);
  list_map(list, meaning_write);
  function more_write(word) {
    let said = property_get(r, word);
    let extra = property_get(more, word);
    property_set(r, word, said + " " + extra);
  }
  let list2 = object_property_names(more);
  list_map(list2, more_write);
  function opposite_write(word, word_other) {
    let said = property_get(r, word);
    let whole = said + " اِس کا اُلٹ '" + word_other + "' ہے۔";
    property_set(r, word, whole);
  }
  function pair_write(pair) {
    opposite_write(pair[0], pair[1]);
    opposite_write(pair[1], pair[0]);
  }
  list_map(opposites, pair_write);
  return r;
}
