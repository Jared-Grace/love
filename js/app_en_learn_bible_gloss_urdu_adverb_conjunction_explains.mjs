import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_map } from "./list_map.mjs";
import { app_en_learn_bible_gloss_urdu_word_explains } from "./app_en_learn_bible_gloss_urdu_word_explains.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function app_en_learn_bible_gloss_urdu_adverb_conjunction_explains() {
  "The small English words that are not a kind of word so much as a leftover: the ones that shade a sentence, the ones that place it in time or space, the ones that count roughly, and the ones that join one clause to the next.";
  "Urdu grammar would split these into ظرف and حرفِ ربط and would be right to. They are in one table because the reason for every entry in it is the same: a reader meets the word in the first chapter, keeps meeting it, and cannot work it out from a root or a suffix. The reader either is told or is stuck. Splitting them four ways would have given four tables of a dozen words each with no separate reason standing behind any of them.";
  "The sentences are short on purpose, and shorter than the ones in the verb table next door. A verb needs its three forms explained because English will not give them up; ‘here’ needs the word یہاں and then nothing. Saying more would not be teaching, it would be filling.";
  "Where a word honestly does two jobs the entry says both, in the order a reader meets them, and says nothing about which job it is doing in this particular verse. That restraint is the whole reason these entries can stand where a shared label stood: a wording that picked one job would be a job-in-this-verse claim, which is the thing refused all the way down the shared-label note. ‘just’, ‘so’, ‘since’, ‘how’, ‘still’, ‘while’, ‘where’, ‘when’, ‘as’ and ‘there’ are the ten that needed it.";
  "‘there’ was the tenth and it arrived late, which is worth recording because of how it was found. Its first entry said only that the word tells the place, ‘وہاں’, and that is true of one job and flatly wrong about the other: in ‘there was a man’ the word names no place at all, it stands in front of the verb to say that something exists. The store found this before the table did. Of three hundred and forty-eight glossed sightings of the word, about fifty already explain the standing-in-front-of-the-verb job in their own words, one of them saying outright that the word usually tells the place but here joins the verb to say something is present. About thirty more teach that it sounds like ‘their’ and is a different word, which this table also had not said. So the correction was not reasoned out from English; it was read off what the glossing had already discovered a hundred separate times. A table of settled wordings can be behind the entries it is meant to settle, and the only way to see that is to rank the store by word and read what the entries under a word actually say.";
  "Several entries name their Urdu grammar class - وقت کا ظرف for the time words, حرفِ ربط for the joining ones - and then say in plain words what the class means. That is not decoration. The shared labels these entries replace are written in exactly those terms, and a settled wording may only stand where a label stood if it says everything the label said. Naming the class and glossing it says the label's whole content and then says more.";
  "The capitals are written out rather than derived, the same way the verb table writes its two. A word standing at the start of a verse gets one extra sentence about why its first letter is big, and that sentence is copied word for word from the verb table rather than composed again, because two true sentences saying one thing in different words is exactly what the store is trying to stop doing. The capitals of the closed-class table next door are not written out at all. They are read off that table and given the same extra sentence, because a list of sixty capitals copied by hand is sixty chances to write a second wording for a word that already has one, which is the failure just named. Reading them means the list cannot fall behind the table it is made from: a word added there arrives here capitalised on the same commit.";
  "Eleven words are held back from that reading, and they are held back for one reason: their capital has two possible causes and this table cannot tell which. ‘He’, ‘Him’, ‘His’, ‘You’, ‘Your’, ‘My’, ‘Me’ and ‘I’ are written with a big letter either because the verse starts there or because the word is pointing at the Lord, and a sentence saying ‘the big letter is because the word stands at the start of the sentence’ would be flatly false wherever the second reason is the true one. ‘Who’ and ‘Whom’ join them because some translations capitalise them for the same reverence. Every other word in that table is never capitalised for reverence by anyone, so for those the extra sentence has only one thing it could mean and is safe to say.";
  let r = {
    even: "یہ لفظ بات پر زور دیتا ہے: اُردُو میں 'تک' یا 'بھی'۔ جَیسے 'even the wind' یعنی 'ہَوا تک'۔",
    just: "یہ لفظ دو کام کرتا ہے: 'صِرف' یعنی اَور کُچھ نہیں، اَور 'ابھی' یعنی اِسی وقت۔",
    only: "یہ لفظ بتاتا ہے کہ اَور کُچھ نہیں: 'صِرف'۔",
    very: "یہ لفظ کِسی صِفت کو بڑھا دیتا ہے: 'بہت'۔ جَیسے 'very good' یعنی 'بہت اچّھا'۔",
    too: "یہ لفظ دو کام کرتا ہے: 'بھی'، اَور 'ضرُورت سے زیادہ'۔",
    indeed: "یہ لفظ بات کو پکّا کرتا ہے: 'واقعی'، 'بےشک'۔",
    quite: "یہ لفظ بتاتا ہے کہ بات پُوری طرح اَیسی ہے: 'بالکُل'۔",
    yes: "یہ لفظ جواب میں 'ہاں' کہتا ہے۔",
    how: "یہ لفظ دو کام کرتا ہے: پُوچھتا ہے کہ کام کِس طرح ہُوا ('کَیسے')، اَور زور بھی دیتا ہے ('کِتنا')۔",
    so: "یہ لفظ دو کام کرتا ہے: کِسی صِفت کو بڑھاتا ہے ('اِتنا')، اَور حرفِ ربط بن کر، یعنی دو باتوں کو جوڑ کر، نتِیجہ بتاتا ہے ('اِس لیٔے')۔",
    therefore:
      "یہ لفظ بتاتا ہے کہ پہلی بات کی وجہ سے اگلی بات ہویٔی: 'اِس لیٔے'۔",
    then: "یہ لفظ وقت کا ظرف ہے، یعنی وقت بتاتا ہے: 'پِھر'، یعنی اُس کے بعد۔",
    now: "یہ لفظ وقت کا ظرف ہے، یعنی وقت بتاتا ہے: 'اب'، یعنی اِسی وقت۔",
    today: "یہ لفظ وقت کا ظرف ہے، یعنی وقت بتاتا ہے: 'آج'۔",
    soon: "یہ لفظ وقت کا ظرف ہے، یعنی وقت بتاتا ہے: 'جلد'، یعنی تھوڑی دیر میں۔",
    again: "یہ لفظ بتاتا ہے کہ کام دوبارہ ہُوا: 'پِھر سے'۔",
    always: "یہ لفظ وقت کا ظرف ہے، یعنی وقت بتاتا ہے: 'ہمیشہ'، یعنی ہر وقت۔",
    still:
      "یہ لفظ دو کام کرتا ہے: بتاتا ہے کہ بات اب تک وَیسی ہی ہے ('اب بھی')، اَور خاموش ہونے کو بھی کہتا ہے ('چُپ')۔",
    already: "یہ لفظ بتاتا ہے کہ کام پہلے ہی ہو چُکا: 'پہلے ہی'۔",
    here: "یہ لفظ جگہ بتاتا ہے: 'یہاں'۔",
    there:
      "یہ لفظ دو کام کرتا ہے: جگہ بتاتا ہے ('وہاں')، اَور فعل سے پہلے کھڑا ہو کر یہ بھی بتاتا ہے کہ کویٔی چیز ہے یا نہیں، اَور تب یہ جگہ نہیں بتاتا ('there was a man' یعنی 'ایک آدمی تھا')۔ بولنے میں یہ 'their' (اُن کا) جَیسا لگتا ہے، مگر دونوں الگ الفاظ ہیں۔",
    where:
      "یہ لفظ دو کام کرتا ہے: جگہ کے بارے میں پُوچھتا ہے ('کہاں')، اَور جگہ بتا کر دو باتوں کو جوڑتا بھی ہے ('جہاں')۔",
    some: "یہ لفظ مِقدار بتاتا ہے: 'کُچھ'، یعنی سب نہیں بلکہ اُن میں سے کُچھ۔",
    few: "یہ لفظ گِنتی بتاتا ہے: 'تھوڑے سے'، یعنی زیادہ نہیں۔",
    several:
      "یہ لفظ گِنتی بتاتا ہے: 'کیٔی'، یعنی ایک دو سے زیادہ مگر بہت سے نہیں۔",
    many: "یہ لفظ گِنتی بتاتا ہے: 'بہت سے'۔ یہ اُن چیزوں کے لیٔے آتا ہے جو گِنی جا سکتی ہیں۔",
    much: "یہ لفظ مِقدار بتاتا ہے: 'بہت'۔ یہ اُس چیز کے لیٔے آتا ہے جو گِنی نہیں جاتی، جَیسے پانی۔",
    more: "یہ لفظ مِقدار بتاتا ہے: 'زیادہ'۔ یہ وہ شکل ہے جو دو کا مُقابلہ کر کے بتاتی ہے کہ ایک دُوسرے سے بڑھ کر ہے۔",
    most: "یہ لفظ مِقدار بتاتا ہے: 'سب سے زیادہ'۔ یہ وہ شکل ہے جو سب کا مُقابلہ کر کے بتاتی ہے کہ ایک سب سے بڑھ کر ہے۔",
    any: "یہ لفظ مِقدار بتاتا ہے: 'کویٔی بھی'، 'ذرا بھی'۔ یہ زیادہ تر سوال میں یا اِنکار کے ساتھ آتا ہے۔",
    each: "یہ لفظ ایک ایک کر کے بتاتا ہے: 'ہر ایک'۔",
    both: "یہ لفظ دونوں کی بات کرتا ہے: 'دونوں'۔",
    when: "یہ لفظ دو کام کرتا ہے: وقت کا حرفِ ربط بن کر، یعنی دو باتوں کو جوڑ کر، وقت بتاتا ہے ('جب')، اَور وقت کے بارے میں پُوچھتا بھی ہے ('کب')۔",
    while:
      "یہ لفظ وقت کا حرفِ ربط ہے: دو باتوں کو جوڑتا ہے اَور بتاتا ہے کہ دونوں کام ایک ہی وقت میں ہو رہے ہیں ('جِس وقت')۔",
    until:
      "یہ لفظ وقت کا حرفِ ربط ہے، یعنی دو باتوں کو جوڑ کر وقت بتاتا ہے: 'جب تک'، یعنی بات وہاں تک چلتی رہی۔",
    as: "یہ لفظ کیٔی کام کرتا ہے۔ کبھی یہ وقت کا حرفِ ربط ہوتا ہے، یعنی دو باتوں کو جوڑ کر وقت بتاتا ہے ('جِس وقت')؛ کبھی مُقابلہ کراتا ہے ('جَیسا')؛ اَور کبھی بتاتا ہے کہ کویٔی کِس حَیثیت سے ہے ('کے طور پر')۔",
    because: "یہ لفظ وجہ بتاتا ہے: 'کیونکہ'۔",
    since:
      "یہ لفظ دو باتوں کو جوڑتا ہے اَور دو کام کرتا ہے: وقت بتاتا ہے ('جب سے')، اَور وجہ بھی بتاتا ہے ('چُونکہ')۔",
    if: "یہ لفظ شرط بتاتا ہے: 'اگر'، یعنی بات تبھی ہو گی جب پہلی بات ہو۔",
  };
  let capitals = {
    Then: "then",
    Now: "now",
    Therefore: "therefore",
    So: "so",
    When: "when",
    While: "while",
    Because: "because",
    Since: "since",
    Just: "just",
    Even: "even",
    Yes: "yes",
    How: "how",
    Where: "where",
    Some: "some",
    As: "as",
    If: "if",
  };
  let capital_tail = " بڑا حرف اِس لیٔے ہے کہ لفظ جُملے کے شُروع میں کھڑا ہے۔";
  function capital_write(word) {
    let lower = property_get(capitals, word);
    let said = property_get(r, lower);
    property_set(r, word, said + capital_tail);
  }
  let capital_words = object_property_names(capitals);
  list_map(capital_words, capital_write);
  let reverent = [
    "i",
    "I",
    "me",
    "you",
    "he",
    "him",
    "his",
    "my",
    "your",
    "who",
    "whom",
  ];
  let elsewhere = app_en_learn_bible_gloss_urdu_word_explains();
  let elsewhere_words = object_property_names(elsewhere);
  function elsewhere_capital_write(word) {
    let writable = list_includes_not(reverent, word);
    if (writable) {
      let said = property_get(elsewhere, word);
      let property_name = text_first_upper_to(word);
      property_set(r, property_name, said + capital_tail);
    }
  }
  list_map(elsewhere_words, elsewhere_capital_write);
  return r;
}
