import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_set } from "./property_set.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function app_en_learn_bible_gloss_urdu_plural_noun_explains() {
  "The wording every explanation of a plural English noun is given in the store that teaches English to an Urdu reader.";
  "Plurals are kept apart from the ordinary nouns because what a plural owes the reader is one thing more, and it is the thing the bare label was withholding. Told only that a word is a noun standing for more than one, a reader learns nothing about the word in front of them and nothing about how English got from the one to the many. Both are written here: the Urdu for the thing, and the singular the plural was made from.";
  "How the plural was made is the second half of every entry, because it is the one piece of English grammar a beginner can carry from this word to the next thousand. Three ways are told apart. Most take an s on the end. A few swap a y for ies. A handful change inside and take no s at all, and those are worth saying out loud, because a reader who has learned the s rule will otherwise read them as a different word.";
  "Two words are answered differently again: they stand for more than one and there is no singular behind them at all. Saying that plainly is truer than naming a singular that English does not use, and a reader who goes looking for it is saved the search.";
  "No entry here tries to say what the thing is beyond the Urdu word for it. A reader handed the Urdu has the whole of the meaning already, and a sentence added after it would be a sentence about the world rather than about the word.";
  let many = {
    things: ["چیزیں", "thing"],
    days: ["دِن", "day"],
    disciples: ["شاگِرد", "disciple"],
    words: ["باتیں", "word"],
    spirits: ["رُوحیں", "spirit"],
    sinners: ["گُنہگار", "sinner"],
    sins: ["گُناہ", "sin"],
    years: ["برس", "year"],
    parents: ["ماں باپ", "parent"],
    diseases: ["بِیمارِیاں", "disease"],
    pigs: ["سُوَر", "pig"],
    seeds: ["بِیج", "seed"],
    hands: ["ہاتھ", "hand"],
    brothers: ["بھایٔی", "brother"],
    hearts: ["دِل", "heart"],
    trees: ["درخت", "tree"],
    eyes: ["آنکھیں", "eye"],
    shepherds: ["چرواہے", "shepherd"],
    stones: ["پتّھر", "stone"],
    tears: ["آنسُو", "tear"],
    collectors: ["وصُول کرنے والے", "collector"],
    messengers: ["قاصِد", "messenger"],
    fathers: ["باپ", "father"],
    companions: ["ساتھی", "companion"],
    sons: ["بیٹے", "son"],
    nets: ["جال", "net"],
    towns: ["قصبے", "town"],
    soldiers: ["سِپاہی", "soldier"],
    crowds: ["لوگوں کے ہُجُوم", "crowd"],
    ways: ["راستے", "way"],
    friends: ["دوست", "friend"],
    thoughts: ["خیال", "thought"],
    mothers: ["مائیں", "mother"],
    kings: ["بادشاہ", "king"],
    servants: ["نَوکر", "servant"],
    names: ["نام", "name"],
    pieces: ["ٹُکڑے", "piece"],
    places: ["جگہیں", "place"],
    winds: ["ہوائیں", "wind"],
    waters: ["پانی", "water"],
    parables: ["مِثالیں", "parable"],
    ears: ["کان", "ear"],
    birds: ["پرِندے", "bird"],
    demons: ["بدرُوحیں", "demon"],
    thorns: ["کانٹے", "thorn"],
    experts: ["جاننے والے", "expert"],
    palaces: ["محل", "palace"],
    elders: ["بزُرگ", "elder"],
    grapes: ["انگُور", "grape"],
    figs: ["انجِیر", "fig"],
    prophets: ["نبی", "prophet"],
    scribes: ["شَرِیعت کے عالِم", "scribe"],
    priests: ["کاہِن", "priest"],
    boats: ["کشتِیاں", "boat"],
    kingdoms: ["بادشاہتیں", "kingdom"],
    evils: ["بُرایٔیاں", "evil"],
    sandals: ["جُوتے", "sandal"],
    paths: ["راستے", "path"],
    answers: ["جواب", "answer"],
    questions: ["سوال", "question"],
    pigeons: ["کبُوتر", "pigeon"],
    angels: ["فرِشتے", "angel"],
    cloths: ["کپڑے کے ٹُکڑے", "cloth"],
    enemies: ["دُشمن", "enemy"],
    infirmities: ["کمزورِیاں", "infirmity"],
    feet: ["پاؤں", "foot"],
    men: ["آدمی، مرد", "man"],
    women: ["عورتیں", "woman"],
    children: ["بچّے", "child"],
  };
  let alone = {
    people: "لوگ",
    clothes: "کپڑے",
  };
  let by_ies = ["enemies", "infirmities"];
  let by_change = ["feet", "men", "women", "children"];
  let r = {};
  function many_write(word) {
    let pair = property_get(many, word);
    let urdu = pair[0];
    let one = pair[1];
    let head = "اِسم ہے، جمع میں: " + urdu + "۔ واحد '" + one + "' ہے، ";
    let rule = "اَور جمع اُس کے آخِر میں 's' لگا کر بنتی ہے۔";
    if (list_includes(by_ies, word)) {
      rule = "اَور جمع بناتے وقت 'y' کی جگہ 'ies' آتا ہے۔";
    }
    if (list_includes(by_change, word)) {
      rule = "اَور یہ جمع بےقاعدہ ہے: 's' نہیں لگتا، لفظ خُود بدل جاتا ہے۔";
    }
    property_set(r, word, head + rule);
  }
  let list = object_property_names(many);
  list_map(list, many_write);
  function alone_write(word) {
    let urdu = property_get(alone, word);
    let whole =
      "اِسم ہے اَور ہمیشہ ایک سے زیادہ کے لیٔے آتا ہے: " +
      urdu +
      "۔ اِس کا کویٔی واحد انگریزی میں نہیں چلتا۔";
    property_set(r, word, whole);
  }
  let list2 = object_property_names(alone);
  list_map(list2, alone_write);
  return r;
}
