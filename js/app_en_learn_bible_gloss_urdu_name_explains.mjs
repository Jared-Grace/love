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
  "Places are written down here beside people, because a place name is a proper name and fails the reader the same way. What the wording owes a place is smaller: that it is a town, and now and then one thing about it a passage keeps assuming, such as its standing on the sea.";
  "The wordings that sent the reader back up the passage - ‘the same man's name as came above’, ‘the same town's name as came above’ - are what this table was enlarged to replace. A pointer is the worst of the shared wordings, because the entry it points at is often another pointer, and a name is the place they gather: a name stands in a passage over and over, and every place after the first was handed one.";
  "The closing sentence about capital letters is written once here and joined onto every wording, because it is the same sentence in all of them and a reader meets only one of them at a time.";
  "Regions are written down here as well, and the sixth shared wording is theirs: most of the regions these passages cross are provinces of the empire, and that is the whole of what a passage naming one is assuming. Two are written out on their own because a reader would otherwise be misled. ‘Asia’ here is one province on the west of what we now call Turkey, not the continent the reader knows by that name, and a wording that left the reader with the continent would make the journeys nonsense. ‘Macedonia’ is where the good news first crossed into Europe, which is the one thing its passage turns on.";
  "Six of the wordings are written once and given to a whole group of names, and each of the six is the honest thing to say rather than a saving of effort. The longest list of names in these passages is the one that counts Jesus' forefathers, and it is a list: the passage says nothing about those men except that each stood between the one before him and the one after. A wording claiming more would be invented. The same holds for the men who travelled with those who carried the good news, for the two names that stand both in that list of forefathers and on an old prophet's book, and for the towns a sea voyage or a road passed through, where all the passage says is that the journey went by.";
  "A wording is not allowed to go looking outside these passages for something interesting to say about a name. Several of the towns here are famous elsewhere, and a sentence about what happened in one of them a century later would read as though the reader had missed it in the verse. What a name is owed is what its own passages assume about it: that it stood on the sea, that it was where somebody was born, that a journey stopped there.";
  let tail = " انگریزی میں ہر خاص نام کا پہلا حرف بڑا لکھا جاتا ہے۔";
  let forefather =
    "ایک آدمی کا خاص نام ہے، جو اُس فہرست میں آتا ہے جو یِسُوع کے باپ دادا گِنواتی ہے۔";
  let prophet_forefather =
    "ایک آدمی کا خاص نام ہے۔ یہ نام اُس فہرست میں بھی آتا ہے جو یِسُوع کے باپ دادا گِنواتی ہے، اَور ایک پُرانے نبی کا نام بھی یِہی ہے۔";
  let traveller =
    "ایک آدمی کا خاص نام ہے، جو خُوشخبری سُنانے والوں کے ساتھ سفر کرتا تھا۔";
  let port =
    "ایک شہر کا خاص نام ہے، جو سمُندر کے کنارے تھا اَور جہاز وہاں سے گُزرتے یا ٹھہرتے تھے۔";
  let road_stop =
    "ایک شہر کا خاص نام ہے، جو اُس راستے پر تھا جہاں سے یہ سفر گُزرا۔";
  let province = "ایک عِلاقے کا خاص نام ہے، جو رُومی سلطنت کا ایک صُوبہ تھا۔";
  let who = {
    Jesus: "اُن ہی کا خاص نام ہے جِن کی خُوشخبری یہ کِتاب سُناتی ہے۔",
    JESUS:
      "اُن ہی کا خاص نام ہے جِن کی خُوشخبری یہ کِتاب سُناتی ہے۔ یہاں یہ پُورا کا پُورا بڑے حرفوں میں لِکھا گیا ہے۔",
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
    Paul: "ایک آدمی کا خاص نام ہے، جو یِسُوع کی خُوشخبری دُور دُور کے شہروں تک لے گیا۔",
    Saul: "ایک آدمی کا خاص نام ہے۔ یہ اُس آدمی کا پہلا نام ہے جِس کا نام بعد میں بدل گیا۔",
    Barnabas:
      "ایک آدمی کا خاص نام ہے، جو خُوشخبری سُنانے کے سفروں میں ساتھ تھا۔",
    Silas: "ایک آدمی کا خاص نام ہے، جو خُوشخبری سُنانے کے سفروں میں ساتھ تھا۔",
    Timothy:
      "ایک جوان آدمی کا خاص نام ہے، جو خُوشخبری کے کام میں ساتھ دیتا تھا۔",
    Apollos:
      "ایک آدمی کا خاص نام ہے، جو کِتابِ مُقدّس کا اچّھا جاننے والا تھا۔",
    Aquila: "ایک آدمی کا خاص نام ہے۔",
    Jason: "ایک آدمی کا خاص نام ہے۔",
    Mark: "ایک آدمی کا خاص نام ہے۔",
    Festus: "ایک رُومی حاکِم کا خاص نام ہے۔",
    Felix: "ایک رُومی حاکِم کا خاص نام ہے۔",
    Gallio: "ایک رُومی حاکِم کا خاص نام ہے۔",
    Julius: "ایک رُومی سُوبہ دار کا خاص نام ہے۔",
    Agrippa: "ایک بادشاہ کا خاص نام ہے۔",
    Bernice: "ایک عورت کا خاص نام ہے، جو بادشاہ کے ساتھ آیٔی۔",
    Publius: "ایک آدمی کا خاص نام ہے، جو ایک جزِیرے کا بڑا آدمی تھا۔",
    Tertullus: "ایک آدمی کا خاص نام ہے، جو عدالت میں اِلزام لگانے کے لیٔے آیا۔",
    Demetrius: "ایک آدمی کا خاص نام ہے، جو چاندی کا کام کرتا تھا۔",
    Jonah: "ایک پُرانے نبی کا خاص نام ہے۔",
    Isaiah: "ایک پُرانے نبی کا خاص نام ہے۔",
    Solomon:
      "ایک پُرانے بادشاہ کا خاص نام ہے، جو اپنی حِکمت کے لیٔے جانا جاتا تھا۔",
    Andrew: "یِسُوع کے بارہ شاگِردوں میں سے ایک کا خاص نام ہے۔",
    Bartholomew: "یِسُوع کے بارہ شاگِردوں میں سے ایک کا خاص نام ہے۔",
    Antioch: "ایک شہر کا خاص نام ہے۔",
    Caesarea: "ایک شہر کا خاص نام ہے، جو سمُندر کے کنارے تھا۔",
    Ephesus: "ایک شہر کا خاص نام ہے۔",
    Damascus: "ایک شہر کا خاص نام ہے۔",
    Athens: "ایک شہر کا خاص نام ہے۔",
    Berea: "ایک شہر کا خاص نام ہے۔",
    Troas: "ایک شہر کا خاص نام ہے۔",
    Lystra: "ایک شہر کا خاص نام ہے۔",
    Iconium: "ایک شہر کا خاص نام ہے۔",
    Derbe: "ایک شہر کا خاص نام ہے۔",
    Corinth: "ایک شہر کا خاص نام ہے۔",
    Thessalonica: "ایک شہر کا خاص نام ہے۔",
    Miletus: "ایک شہر کا خاص نام ہے۔",
    Assos: "ایک شہر کا خاص نام ہے۔",
    Tyre: "ایک شہر کا خاص نام ہے، جو سمُندر کے کنارے تھا۔",
    Sidon: "ایک شہر کا خاص نام ہے، جو سمُندر کے کنارے تھا۔",
    Sodom:
      "ایک پُرانے شہر کا خاص نام ہے، جو اپنی بُرایٔی کے سبب سے برباد ہُوا۔",
    Abraham:
      "اُس آدمی کا خاص نام ہے جِس سے اِسرائیل کی قَوم چلی، اَور جِس سے خُدا نے بڑا وعدہ کِیا تھا۔",
    Isaac: "ایک آدمی کا خاص نام ہے، جو اِسرائیل کی قَوم کے باپ دادا میں سے ہے۔",
    Jacob:
      "ایک آدمی کا خاص نام ہے، جو اِسرائیل کی قَوم کے باپ دادا میں سے ہے۔ یہ نام اِن آیتوں میں ایک سے زیادہ آدمِیوں کا ہے۔",
    Philip:
      "ایک آدمی کا خاص نام ہے۔ یہ نام اِن آیتوں میں ایک سے زیادہ آدمِیوں کا ہے: یِسُوع کے بارہ شاگِردوں میں سے ایک کا، اَور ایک خُوشخبری سُنانے والے کا۔",
    Stephen:
      "اُس آدمی کا خاص نام ہے جو یِسُوع کی گواہی دینے پر سَب سے پہلے جان سے مارا گیا۔",
    Ananias:
      "ایک آدمی کا خاص نام ہے۔ یہ نام اِن آیتوں میں ایک سے زیادہ آدمِیوں کا ہے۔",
    Cornelius:
      "اُس رُومی فَوجی اَفسر کا خاص نام ہے جِس کے گھر خُوشخبری پہلی بار غَیر قَوموں تک پہُنچی۔",
    Lazarus:
      "ایک آدمی کا خاص نام ہے۔ یہ نام اِن آیتوں میں ایک سے زیادہ آدمِیوں کا ہے: ایک وہ جِسے یِسُوع نے مَوت سے زِندہ کِیا، اَور ایک وہ غرِیب آدمی جِس کی یِسُوع نے مِثال دی۔",
    Simeon:
      "ایک آدمی کا خاص نام ہے۔ یہ نام اِن آیتوں میں ایک سے زیادہ آدمِیوں کا ہے۔",
    Zechariah:
      "ایک آدمی کا خاص نام ہے، جو کاہِن تھا اَور جِس کا بیٹا آگے چل کر لوگوں کو بپتِسمہ دیتا تھا۔",
    Zacchaeus:
      "اُس آدمی کا خاص نام ہے جو مَحصُول لیتا تھا اَور یِسُوع کو دیکھنے کے لیٔے درخت پر چڑھ گیا۔",
    Lot: "ایک آدمی کا خاص نام ہے، جو اُس شہر میں رہتا تھا جو اپنی بُرایٔی کے سبب سے برباد ہُوا۔",
    Martha: "ایک عورت کا خاص نام ہے، جِس کے گھر یِسُوع مہمان ہُوئے۔",
    Joanna:
      "ایک عورت کا خاص نام ہے، جو یِسُوع کے پِیچھے چلنے والوں میں سے تھی۔",
    Cleopas:
      "ایک آدمی کا خاص نام ہے، جِس نے جی اُٹھنے کے دِن یِسُوع کو راستے میں دیکھا۔",
    Thomas: "یِسُوع کے بارہ شاگِردوں میں سے ایک کا خاص نام ہے۔",
    Alphaeus: "ایک آدمی کا خاص نام ہے، جو یِسُوع کے دو شاگِردوں کا باپ تھا۔",
    Caiaphas: "اُس آدمی کا خاص نام ہے جو اُن دِنوں سَب سے بڑا کاہِن تھا۔",
    Annas: "ایک آدمی کا خاص نام ہے، جو بڑے کاہِنوں میں سے تھا۔",
    Gamaliel:
      "اُس آدمی کا خاص نام ہے جو شَرِیعت کا اُستاد تھا اَور لوگوں میں عِزّت رکھتا تھا۔",
    Aaron: "اُس آدمی کا خاص نام ہے جو اِسرائیل کا پہلا بڑا کاہِن تھا۔",
    Samuel: "ایک پُرانے نبی کا خاص نام ہے۔",
    Joel: "ایک پُرانے نبی کا خاص نام ہے۔",
    Elisha: "ایک پُرانے نبی کا خاص نام ہے۔",
    Naaman:
      "ایک آدمی کا خاص نام ہے، جو دُوسرے مُلک کا فَوجی سردار تھا اَور کوڑھ سے شِفا پایا۔",
    Noah: "اُس آدمی کا خاص نام ہے جِس نے خُدا کے کہنے پر کشتی بنایٔی۔",
    Abel: "اُس آدمی کا خاص نام ہے جو سَب سے پہلے اپنے بھایٔی کے ہاتھوں مارا گیا۔",
    Joshua:
      "ایک آدمی کا خاص نام ہے، جو اِسرائیل کو اُس مُلک میں لے گیا جِس کا خُدا نے وعدہ کِیا تھا۔",
    Kish: "ایک آدمی کا خاص نام ہے، جو اِسرائیل کے پہلے بادشاہ کا باپ تھا۔",
    Jesse:
      "ایک آدمی کا خاص نام ہے، جو اُس بادشاہ کا باپ تھا جِس کی نسل سے یِسُوع آئے۔",
    Judah:
      "ایک آدمی کا خاص نام ہے، اَور اِسرائیل کے ایک قبِیلے اَور اُس کے عِلاقے کا نام بھی یِہی ہے۔",
    Hamor:
      "ایک آدمی کا خاص نام ہے، جِس کے بیٹوں سے ایک قبر کی جگہ خرِیدی گیٔی تھی۔",
    Theophilus: "اُس آدمی کا خاص نام ہے جِس کے لیٔے یہ کِتاب لِکھی گیٔی۔",
    Anna: "ایک عورت کا خاص نام ہے، جو نبِیّہ تھی اَور ہَیکل میں خُدا کی عِبادت کرتی رہتی تھی۔",
    Phanuel:
      "ایک آدمی کا خاص نام ہے، جو اُس نبِیّہ کا باپ تھا جو ہَیکل میں تھی۔",
    Chuza: "ایک آدمی کا خاص نام ہے، جو بادشاہ کے گھر کا مُختار تھا۔",
    Tiberius:
      "اُس رُومی بادشاہ کا خاص نام ہے جو یِسُوع کے دِنوں میں حکُومت کرتا تھا۔",
    Claudius:
      "ایک رُومی بادشاہ کا خاص نام ہے۔ اِن آیتوں میں ایک اَور آدمی کا نام بھی یِہی ہے۔",
    Quirinius:
      "ایک آدمی کا خاص نام ہے، جو رُوم کی طرف سے ایک عِلاقے کا حاکِم تھا۔",
    Lysanias: "ایک آدمی کا خاص نام ہے، جو ایک عِلاقے کا حاکِم تھا۔",
    Porcius: "ایک رُومی حاکِم کا خاص نام ہے۔",
    Sergius: "ایک رُومی حاکِم کا خاص نام ہے۔",
    Elymas:
      "ایک آدمی کا خاص نام ہے، جو جادُو کرتا تھا اَور خُوشخبری کی مُخالفت کی۔",
    Agabus:
      "ایک آدمی کا خاص نام ہے، جو نبی تھا اَور آگے ہونے والی باتیں بتاتا تھا۔",
    Aeneas:
      "ایک آدمی کا خاص نام ہے، جو آٹھ برس سے بِستر پر پڑا تھا اَور شِفا پایا۔",
    Eutychus:
      "ایک جوان کا خاص نام ہے، جو کھِڑکی سے گِر پڑا اَور پھِر زِندہ اُٹھا۔",
    Matthias: "ایک آدمی کا خاص نام ہے، جو بارہ رسُولوں میں شامِل کِیا گیا۔",
    Justus:
      "ایک آدمی کا خاص نام ہے۔ یہ نام اِن آیتوں میں ایک سے زیادہ آدمِیوں کا ہے۔",
    Barsabbas:
      "ایک آدمی کا خاص نام ہے۔ یہ نام اِن آیتوں میں ایک سے زیادہ آدمِیوں کا ہے۔",
    Alexander:
      "ایک آدمی کا خاص نام ہے۔ یہ نام اِن آیتوں میں ایک سے زیادہ آدمِیوں کا ہے۔",
    Sceva: "ایک آدمی کا خاص نام ہے، جو کاہِنوں کے سرداروں میں سے تھا۔",
    Tyrannus: "ایک آدمی کا خاص نام ہے، جِس کے مدرسے میں روز بات چیت ہوتی تھی۔",
    Sosthenes: "ایک آدمی کا خاص نام ہے، جو عِبادت خانے کا سردار تھا۔",
    Crispus:
      "ایک آدمی کا خاص نام ہے، جو عِبادت خانے کا سردار تھا اَور اِیمان لایا۔",
    Dionysius:
      "ایک آدمی کا خاص نام ہے، جو شہر کی عدالت کا ایک رُکن تھا اَور اِیمان لایا۔",
    Blastus: "ایک آدمی کا خاص نام ہے، جو بادشاہ کے کمرے کا داروغہ تھا۔",
    Theudas:
      "ایک آدمی کا خاص نام ہے، جِس نے اپنے آپ کو بڑا بنایا اَور مارا گیا۔",
    Mnason: "ایک آدمی کا خاص نام ہے، جِس کے گھر مُسافر ٹھہرے۔",
    Erastus: "ایک آدمی کا خاص نام ہے، جو خُوشخبری کے کام میں مدد کرتا تھا۔",
    Titus: "ایک آدمی کا خاص نام ہے، جو خُوشخبری کے کام میں ساتھ دیتا تھا۔",
    Pyrrhus:
      "ایک آدمی کا خاص نام ہے، جو خُوشخبری سُنانے والوں میں سے ایک کا باپ تھا۔",
    Manaen: "ایک آدمی کا خاص نام ہے، جو کلِیسیا میں اُستاد تھا۔",
    Lucius: "ایک آدمی کا خاص نام ہے، جو کلِیسیا میں اُستاد تھا۔",
    Nicolas: "ایک آدمی کا خاص نام ہے، جو کلِیسیا کی خِدمت کے لیٔے چُنا گیا۔",
    Parmenas: "ایک آدمی کا خاص نام ہے، جو کلِیسیا کی خِدمت کے لیٔے چُنا گیا۔",
    Timon: "ایک آدمی کا خاص نام ہے، جو کلِیسیا کی خِدمت کے لیٔے چُنا گیا۔",
    Nicanor: "ایک آدمی کا خاص نام ہے، جو کلِیسیا کی خِدمت کے لیٔے چُنا گیا۔",
    Prochorus: "ایک آدمی کا خاص نام ہے، جو کلِیسیا کی خِدمت کے لیٔے چُنا گیا۔",
    Aristarchus: traveller,
    Trophimus: traveller,
    Tychicus: traveller,
    Secundus: traveller,
    Sopater: traveller,
    Gaius: traveller,
    Amos: prophet_forefather,
    Nahum: prophet_forefather,
    Seth: forefather,
    Enosh: forefather,
    Mahalalel: forefather,
    Jared: forefather,
    Enoch: forefather,
    Methuselah: forefather,
    Lamech: forefather,
    Shem: forefather,
    Arphaxad: forefather,
    Cainan: forefather,
    Shelah: forefather,
    Eber: forefather,
    Peleg: forefather,
    Reu: forefather,
    Serug: forefather,
    Nahor: forefather,
    Terah: forefather,
    Perez: forefather,
    Hezron: forefather,
    Arni: forefather,
    Admin: forefather,
    Amminadab: forefather,
    Nahshon: forefather,
    Sala: forefather,
    Boaz: forefather,
    Obed: forefather,
    Nathan: forefather,
    Mattatha: forefather,
    Menna: forefather,
    Melea: forefather,
    Eliakim: forefather,
    Jonam: forefather,
    Jorim: forefather,
    Eliezer: forefather,
    Er: forefather,
    Elmadam: forefather,
    Cosam: forefather,
    Addi: forefather,
    Neri: forefather,
    Shealtiel: forefather,
    Zerubbabel: forefather,
    Rhesa: forefather,
    Joanan: forefather,
    Joda: forefather,
    Josech: forefather,
    Semein: forefather,
    Maath: forefather,
    Naggai: forefather,
    Esli: forefather,
    Mattathias: forefather,
    Jannai: forefather,
    Melchi: forefather,
    Matthat: forefather,
    Heli: forefather,
    Joppa: "ایک شہر کا خاص نام ہے، جو سمُندر کے کنارے تھا۔",
    Azotus: "ایک شہر کا خاص نام ہے، جو سمُندر کے کنارے تھا۔",
    Tarsus:
      "ایک شہر کا خاص نام ہے، جہاں خُوشخبری دُور دُور لے جانے والا آدمی پَیدا ہُوا تھا۔",
    Nazareth: "اُس چھوٹے شہر کا خاص نام ہے جہاں یِسُوع پلے بڑھے۔",
    Rome: "اُس بڑے شہر کا خاص نام ہے جہاں سے اُس وقت کی سَب سے بڑی سلطنت چلتی تھی۔",
    Jericho: "ایک پُرانے شہر کا خاص نام ہے۔",
    Haran: "ایک پُرانے شہر کا خاص نام ہے۔",
    Shechem: "ایک پُرانے شہر کا خاص نام ہے۔",
    Lydda: "ایک چھوٹے شہر کا خاص نام ہے، جو سمُندر کے قرِیب میدان میں تھا۔",
    Cyrene: "ایک شہر کا خاص نام ہے، جو سمُندر پار اَفریقہ کی طرف تھا۔",
    Bethsaida: "ایک چھوٹے شہر کا خاص نام ہے، جو جھِیل کے کنارے تھا۔",
    Chorazin: "ایک چھوٹے شہر کا خاص نام ہے، جو جھِیل کے قرِیب تھا۔",
    Capernaum:
      "اُس شہر کا خاص نام ہے جو جھِیل کے کنارے تھا اَور جہاں یِسُوع اکثر ٹھہرے۔",
    Nain: "ایک چھوٹے شہر کا خاص نام ہے، جہاں یِسُوع نے ایک بیوہ کے بیٹے کو زِندہ کِیا۔",
    Philippi: "ایک شہر کا خاص نام ہے، جو رُومی سلطنت کا خاص شہر تھا۔",
    Paphos: "ایک شہر کا خاص نام ہے، جو ایک جزِیرے پر تھا۔",
    Salamis: "ایک شہر کا خاص نام ہے، جو ایک جزِیرے پر تھا۔",
    Nineveh:
      "ایک بڑے پُرانے شہر کا خاص نام ہے، جِس کے لوگوں نے ایک نبی کی بات سُن کر تَوبہ کی۔",
    Babylon:
      "ایک بڑے پُرانے شہر کا خاص نام ہے، جہاں اِسرائیل کے لوگ قَید کر کے لے جائے گیٔے تھے۔",
    Alexandria:
      "ایک بڑے شہر کا خاص نام ہے، جو سمُندر کے کنارے تھا اَور اپنی تعلِیم کے لیٔے جانا جاتا تھا۔",
    Thyatira: "ایک شہر کا خاص نام ہے، جہاں سے ارغوانی کپڑا آتا تھا۔",
    Gaza: "ایک شہر کا خاص نام ہے، جِس کی طرف جانے والا راستہ صحرا سے گُزرتا تھا۔",
    Rhegium: port,
    Syracuse: port,
    Cnidus: port,
    Lasea: port,
    Ptolemais: port,
    Patara: port,
    Mitylene: port,
    Cenchrea: port,
    Neapolis: port,
    Attalia: port,
    Seleucia: port,
    Perga: road_stop,
    Apollonia: road_stop,
    Amphipolis: road_stop,
    Antipatris: road_stop,
    Judea: "اُس عِلاقے کا خاص نام ہے جہاں یَہُودی لوگ رہتے تھے۔",
    Samaria: "ایک عِلاقے کا خاص نام ہے، جِس کے لوگ یَہُودیوں سے الگ رہتے تھے۔",
    Galilee:
      "اُس عِلاقے کا خاص نام ہے جہاں یِسُوع پلے بڑھے اَور جہاں اُنہوں نے سَب سے زیادہ کام کِیا۔",
    Phoenicia: "ایک عِلاقے کا خاص نام ہے، جو سمُندر کے کنارے تھا۔",
    Sharon: "ایک عِلاقے کا خاص نام ہے، جو سمُندر کے قرِیب ایک کھُلا میدان تھا۔",
    Mesopotamia: "ایک عِلاقے کا خاص نام ہے، جو دو بڑے دریاؤں کے بیچ تھا۔",
    Asia: "ایک عِلاقے کا خاص نام ہے، جو رُومی سلطنت کا ایک صُوبہ تھا۔ یہ آج کے بَرِّاعظم ایشیا جِتنا بڑا نہیں تھا۔",
    Macedonia:
      "ایک عِلاقے کا خاص نام ہے، جو رُومی سلطنت کا ایک صُوبہ تھا اَور جہاں خُوشخبری پہلی بار یُورپ میں پہُنچی۔",
    Eve: "سَب سے پہلی عورت کا خاص نام ہے۔",
    Syria: province,
    Cilicia: province,
    Pamphylia: province,
    Phrygia: province,
    Galatia: province,
    Pontus: province,
    Lycia: province,
    Bithynia: province,
    Mysia: province,
    Pisidia: province,
    Cappadocia: province,
    Achaia: province,
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
