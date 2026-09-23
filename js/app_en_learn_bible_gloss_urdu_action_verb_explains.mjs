import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_map } from "./list_map.mjs";
export function app_en_learn_bible_gloss_urdu_action_verb_explains() {
  "The wording every explanation of an ordinary English verb is given in the store that teaches English to an Urdu reader - the words for doing and saying and going, as against the handful of helping verbs written next door.";
  "The sentence these are built on was not invented here. The store had already written it out by hand for six verbs, once each for ‘see’, ‘come’, ‘say’, ‘tell’, ‘go’ and ‘do’, and it is a good sentence: it names the verb, hands over the Urdu for it, says that the bare form is the one a dictionary lists, and then names the four places English puts that bare form. Writing a different sentence here would have left the store saying the same true thing two ways, which is the exact failure the shared-label note keeps complaining about. So the existing sentence is the template and every verb here is handed it.";
  "The irregular verbs get one clause more, and that clause is why the label reading ‘a verb, irregular’ can be written over at all. A reader told only that a verb is irregular has been told that something is coming which they cannot guess, and not what it is. The clause gives the three forms, so the reader can actually use the word: ‘go’ makes ‘went’ and ‘gone’ rather than ‘goed’.";
  "Where all three forms are the same word the clause says so in those words rather than spelling the word out three times, because ‘from cut comes cut and cut’ reads like a mistake and teaches nothing. That a verb can be irregular by not changing at all is worth a beginner's attention on its own.";
  "A form carrying an ‘s’ is written under its own key rather than left to the base form, for the reason the plural nouns are: the store answers a word by the spelling in front of the reader, so ‘falls’ handed the sentence written for ‘fall’ would lose the one thing its own spelling was telling them.";
  "The past and the third form are written as their own keys off the same map that names them, which is the whole reason that map holds the forms rather than a bare flag saying ‘irregular’. A reader meeting ‘told’ is not meeting ‘tell’ - the store hands them the spelling in front of them and nothing else - and a beginner has no way to walk backwards from ‘told’ to ‘tell’, which is exactly what makes the verb irregular in the first place. So every irregular form gets an entry saying which verb it belongs to, which time it stands for, and the three forms again.";
  "Where the past and the third form are the same word one entry is written and it says both jobs, and where the third form is the base word again - ‘come’ makes ‘came’ and then ‘come’ - no third entry is written at all, because it would overwrite the base entry with a narrower one. Both cases are read off the map rather than listed by hand, so a verb added later cannot be added wrongly.";
  "A capitalised verb is written only where the store actually holds one. For a verb the capital has a single cause - the word stands at the head of what is being said - and that is what its entry says. A name is the harder case and is handled in the name table, because there a capital has two causes and naming only one of them would mislead.";
  let meaning = {
    say: "کہنا",
    tell: "بتانا",
    speak: "بولنا",
    ask: "پُوچھنا",
    listen: "کان لگانا",
    hear: "سُننا",
    see: "دیکھنا",
    look: "نظر ڈالنا",
    know: "جاننا",
    understand: "سمجھنا",
    go: "جانا",
    come: "آنا",
    enter: "داخِل ہونا",
    leave: "چھوڑنا",
    stay: "ٹھہرنا",
    stand: "کھڑا ہونا",
    sit: "بیٹھنا",
    walk: "چلنا",
    turn: "مُڑنا",
    move: "حرکت کرنا",
    leap: "اُچھلنا",
    fall: "گِرنا",
    take: "لینا",
    give: "دینا",
    get: "حاصِل کرنا",
    receive: "پانا",
    accept: "قبُول کرنا",
    bring: "لانا",
    send: "بھیجنا",
    throw: "پھینکنا",
    spread: "پھیلانا",
    pick: "اُٹھانا",
    show: "دِکھانا",
    open: "کھولنا",
    cut: "کاٹنا",
    eat: "کھانا",
    drink: "پِینا",
    pay: "ادا کرنا",
    lend: "اُدھار دینا",
    love: "مُحبّت کرنا",
    fear: "ڈرنا",
    pray: "دُعا کرنا",
    bless: "برکت دینا",
    heal: "شِفا دینا",
    serve: "خِدمت کرنا",
    report: "خبر دینا",
    make: "بنانا",
  };
  let irregular = {
    say: ["said", "said"],
    tell: ["told", "told"],
    speak: ["spoke", "spoken"],
    hear: ["heard", "heard"],
    see: ["saw", "seen"],
    know: ["knew", "known"],
    understand: ["understood", "understood"],
    go: ["went", "gone"],
    come: ["came", "come"],
    leave: ["left", "left"],
    stand: ["stood", "stood"],
    sit: ["sat", "sat"],
    fall: ["fell", "fallen"],
    take: ["took", "taken"],
    give: ["gave", "given"],
    get: ["got", "got"],
    bring: ["brought", "brought"],
    send: ["sent", "sent"],
    throw: ["threw", "thrown"],
    spread: ["spread", "spread"],
    eat: ["ate", "eaten"],
    drink: ["drank", "drunk"],
    pay: ["paid", "paid"],
    lend: ["lent", "lent"],
    cut: ["cut", "cut"],
    make: ["made", "made"],
  };
  let more = {
    listen:
      " 'listen' کان لگانا ہے، اَور 'hear' صِرف آواز کا کانوں تک پہُنچنا۔",
    look: " 'look' نظر ڈالنا ہے، اَور 'see' نظر آنا۔",
    get: " یہ لفظ بہت سے کاموں کے لیٔے آتا ہے: پانا، لینا، اَور ہو جانا بھی۔",
  };
  let s_forms = {
    falls: "fall",
    comes: "come",
    receives: "receive",
  };
  let capitals = {
    Take: "take",
    Bring: "bring",
  };
  let r = {};
  function base_read(word) {
    let urdu = property_get(meaning, word);
    let whole =
      "فعل '" +
      word +
      "' یعنی '" +
      urdu +
      "' کی بُنیادی شکل ہے — یعنی وہ شکل جو لُغت میں مِلتی ہے اَور جِس پر وقت کا کویٔی نشان نہیں۔ انگریزی میں یہی شکل 'to' کے بعد آتی ہے، 'will'، 'can' اَور 'must' جَیسے الفاظ کے بعد بھی، اَور حُکم دیتے وقت بھی۔";
    return whole;
  }
  function irregular_read(word) {
    let parts = property_get_or_null(irregular, word);
    let missing = null_is(parts);
    if (missing) {
      let r2 = "";
      return r2;
    }
    let past = parts[0];
    let done = parts[1];
    let unchanged = equal(past, word);
    if (unchanged) {
      let same =
        " یہ فعل بےقاعدہ ہے: اِس کی تِینوں شکلیں ایک جَیسی ہیں - '" +
        word +
        "'، '" +
        word +
        "'، '" +
        word +
        "'۔";
      return same;
    }
    let told =
      " یہ فعل بےقاعدہ ہے: '" +
      word +
      "' سے '" +
      past +
      "' اَور '" +
      done +
      "' بنتا ہے، 'ed' لگا کر نہیں۔";
    return told;
  }
  function more_read(word) {
    let extra = property_get_or_null(more, word);
    let missing = null_is(extra);
    if (missing) {
      let r3 = "";
      return r3;
    }
    return extra;
  }
  function word_write(word) {
    let whole = base_read(word) + irregular_read(word) + more_read(word);
    property_set(r, word, whole);
  }
  let words = object_property_names(meaning);
  list_map(words, word_write);
  function s_form_write(spelled) {
    let word = property_get(s_forms, spelled);
    let urdu = property_get(meaning, word);
    let whole =
      "فعل '" +
      word +
      "' یعنی '" +
      urdu +
      "' کی وہ شکل ہے جو ایک ہی کرنے والے کے ساتھ آتی ہے: آخِر میں 's' لگا ہے۔" +
      irregular_read(word);
    property_set(r, spelled, whole);
  }
  let spellings = object_property_names(s_forms);
  list_map(spellings, s_form_write);
  function capital_write(spelled) {
    let word = property_get(capitals, spelled);
    let said = property_get(r, word);
    let whole =
      said + " بڑا حرف اِس لیٔے ہے کہ لفظ جُملے کے شُروع میں کھڑا ہے۔";
    property_set(r, spelled, whole);
  }
  let capital_spellings = object_property_names(capitals);
  list_map(capital_spellings, capital_write);
  function past_write(word) {
    let parts = property_get(irregular, word);
    let past = parts[0];
    let done = parts[1];
    let urdu = property_get(meaning, word);
    let head = "فعل '" + word + "' یعنی '" + urdu + "' کی ";
    let unchanged = equal(past, word);
    if (unchanged) {
      return;
    }
    let both = equal(past, done);
    if (both) {
      let one =
        head +
        "گُزرے ہوئے زمانے کی شکل ہے، اَور یِہی شکل 'have' اَور 'be' کے ساتھ بھی آتی ہے۔" +
        irregular_read(word);
      property_set(r, past, one);
      return;
    }
    let told = head + "گُزرے ہوئے زمانے کی شکل ہے۔" + irregular_read(word);
    property_set(r, past, told);
    let same_as_base = equal(done, word);
    if (same_as_base) {
      return;
    }
    let third =
      head +
      "وہ تِیسری شکل ہے جو 'have' اَور 'be' کے ساتھ آتی ہے۔" +
      irregular_read(word);
    property_set(r, done, third);
  }
  let irregular_words = object_property_names(irregular);
  list_map(irregular_words, past_write);
  return r;
}
