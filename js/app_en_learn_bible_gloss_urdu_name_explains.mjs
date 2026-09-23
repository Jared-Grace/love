import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_map } from "./list_map.mjs";
export function app_en_learn_bible_gloss_urdu_name_explains() {
  "The wording every explanation of a Bible name is given in the store that teaches English to an Urdu reader, for the people and the places the passages call by name.";
  "A name is the one kind of word where the bare label costs the reader most. Told that a word is a proper noun, a beginner learns that it names somebody and is left not knowing who, and the whole of what the verse was saying about that somebody stays shut. So each wording says what sort of thing the name names, and then who or what it is, in a clause short enough to be read in passing.";
  "The name itself is not spelled again in the wording, and that is deliberate rather than an omission. Our Urdu spelling of the name is already standing beside it in the short Urdu written for the word, so a wording that spelled it again would be the same name written twice on one line in a reader's face, and two chances for the two spellings to drift apart when somebody rules that a name should be spelled differently.";
  "Where a wording does have to name somebody else to say who this one is, it names only the one whose spelling the whole store already agrees on. A wording pointing at a second name would tie itself to that name's spelling, which is a ruling nobody has made yet.";
  "Several of these names belong to more than one person in these passages, and where that is so the wording says it plainly rather than picking one. A reader told that a name belongs to one man will read every other place it stands as being about him.";
  "The closing sentence about capital letters is written once here and joined onto every wording, because it is the same sentence in all of them and a reader meets only one of them at a time.";
  let tail = " انگریزی میں ہر خاص نام کا پہلا حرف بڑا لکھا جاتا ہے۔";
  let who = {
    Jesus:
      "یِسُوع کا خاص نام ہے، یعنی اُن ہی کا جِن کی خُوشخبری یہ کِتاب سُناتی ہے۔",
    JESUS:
      "یِسُوع کا خاص نام ہے۔ یہاں یہ پُورا کا پُورا بڑے حرفوں میں لِکھا گیا ہے، کیونکہ یہ ایک تختی پر لِکھی ہویٔی بات ہے۔",
    Peter: "یِسُوع کے بارہ شاگِردوں میں سے ایک کا خاص نام ہے۔",
    Pilate:
      "اُس رُومی حاکِم کا خاص نام ہے جِس کے سامنے یِسُوع کو کھڑا کِیا گیا۔",
    Simon:
      "ایک مرد کا خاص نام ہے۔ اِن صفحوں میں اِس نام کے ایک سے زیادہ آدمی آتے ہیں۔",
    Mary: "ایک عورت کا خاص نام ہے۔ اِن صفحوں میں اِس نام کی ایک سے زیادہ عورتیں آتی ہیں۔",
    James:
      "ایک مرد کا خاص نام ہے۔ یِسُوع کے شاگِردوں میں اِس نام کے دو آدمی ہیں۔",
    Herod: "اُس بادشاہ کا خاص نام ہے جو اُس زمانے میں حُکومت کرتا تھا۔",
    Judas:
      "ایک مرد کا خاص نام ہے۔ اِن میں وہ شاگِرد بھی ہے جِس نے یِسُوع کو پکڑوا دیا۔",
    John: "ایک مرد کا خاص نام ہے۔ اِن صفحوں میں اِس نام کے دو آدمی ہیں: ایک بپتِسمہ دینے والا، اَور ایک شاگِرد۔",
    Elijah: "ایک پُرانے نبی کا خاص نام ہے۔",
    Moses: "اُس نبی کا خاص نام ہے جِس کے ہاتھ خُدا نے اپنی شریعت دی۔",
    Satan: "خُدا کے دُشمن کا خاص نام ہے۔",
    Barabbas: "اُس قَیدی کا خاص نام ہے جِسے یِسُوع کی جگہ چھوڑ دیا گیا۔",
    Israel: "ایک قوم اَور اُس کے مُلک کا خاص نام ہے۔",
    Herodias: "ایک عورت کا خاص نام ہے، جو بادشاہ کے گھر میں تھی۔",
    David: "ایک پُرانے بادشاہ کا خاص نام ہے۔",
    Jairus: "ایک آدمی کا خاص نام ہے، جِس کی بیٹی بِیمار تھی۔",
    Zebedee: "ایک آدمی کا خاص نام ہے، جو دو شاگِردوں کا باپ تھا۔",
    Levi: "ایک آدمی کا خاص نام ہے، جو محصُول لینے پر بیٹھتا تھا۔",
    Jerusalem: "ایک شہر کا خاص نام ہے۔",
    Golgotha: "ایک جگہ کا خاص نام ہے، جہاں یِسُوع کو صلِیب دی گیی۔",
    Timaeus: "ایک آدمی کا خاص نام ہے۔",
    Joses: "ایک آدمی کا خاص نام ہے۔",
    Joseph: "ایک آدمی کا خاص نام ہے۔",
    Berechiah: "ایک آدمی کا خاص نام ہے۔",
    Abiathar: "ایک سردار کاہِن کا خاص نام ہے۔",
    Matthew: "یِسُوع کے شاگِردوں میں سے ایک کا خاص نام ہے۔",
    Thaddaeus: "یِسُوع کے شاگِردوں میں سے ایک کا خاص نام ہے۔",
    Iscariot:
      "ایک خاص نام ہے جو ایک آدمی کے نام کے ساتھ لگایا جاتا ہے، تاکہ وہ اُسی نام کے دُوسرے آدمی سے الگ پہچانا جایٔے۔",
    Boanerges: "وہ خاص نام ہے جو یِسُوع نے دو بھایٔیوں کو دیا۔",
  };
  let r = {};
  let names = object_property_names(who);
  function name_write(name) {
    let said = property_get(who, name);
    let whole = said + tail;
    property_set(r, name, whole);
  }
  list_map(names, name_write);
  return r;
}
