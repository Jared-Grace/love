export function app_en_learn_bible_gloss_urdu_word_explains() {
  "The wording every explanation of a named English word is given in the store that teaches English to an Urdu reader, for the small closed classes of words that carry most of the store's shared labels.";
  "Articles, conjunctions, prepositions, pronouns, the words of denial, the words of belonging, and the counting words. Every one of them is a word English has a fixed handful of and will never add to, and what each does in a sentence is the whole of what there is to say about it - so one wording written once is truer than a sentence guessed afresh at each place, and there is no dictionary work behind any of it.";
  "Each wording says what the word does and then names the Urdu that does the same work, because the reader already has Urdu and is being handed English. That is the one thing a shared label could never do: ‘conjunction’ is true of ‘and’, ‘but’ and ‘or’ together, and which Urdu word to reach for is exactly what separates them.";
  "A word that does more than one job is given all of its jobs in one wording rather than one of them. ‘to’ marks a direction and also stands in front of a verb meaning nothing at all; ‘that’ points, joins, and binds. A wording naming only the commonest job would be written over hundreds of places where it is false, and nothing afterwards could tell which those were.";
  "Written in small letters throughout. A word opening a sentence carries a capital, and that is where it fell rather than a different word, so the lookup beside this folds the capital away and one entry answers for both.";
  "Two of the words of belonging carry a warning about a word they are mistaken for, because the mistake is a spelling mistake and not a reading one, and the reader will make it when they come to write. ‘their’ sounds exactly like ‘there’, which is now said on both sides; ‘its’ is one letter away from ‘it’s’, which is not a word of belonging at all but ‘it is’ shortened. Both warnings were already being taught here and there in the store by whoever glossed a verse where the trap was in sight - twenty-eight places for the first and three for the second - so the settled wordings are catching up with what the store had already worked out, not inventing a rule.";
  "The wordings these replace are written down in the superseded list in the same commit, which is the only thing that lets the repair sweep find the entries still carrying them.";
  "The three articles were widened next, and this one is the largest single change the table has had: six thousand eight hundred and ninety-five places in the store carry one of them. What was added is the one fact an Urdu reader needs first and the table had never said - Urdu has no word for ‘the’ at all, and none for ‘a’ either except where the counting matters and ‘ایک’ turns up. A reader not told this looks in the Urdu for the word that answers ‘the’, does not find it, and concludes they have missed something. ‘the’ also now says what an اِسم is, because the word is used in the wordings either side of it and was never defined anywhere.";
  "‘to’ was widened afterwards for a reason the labels list found rather than this one. Two hundred and eight places in the store told the reader that ‘to’ in front of a verb makes the Urdu that ends in ‘نا’, and the wording here named the base form without naming the Urdu - so the sentence a reader would rather have was the one about to be written over. It is the third time a refused label has turned out to be a complaint about the wording here and not about itself. The example is given because an infinitive is the one thing in this list an Urdu reader already owns outright and only has to be shown where it went.";
  "The last of the small words the store was holding were written on 2026-09-24, and they were found the same way the rest were: by asking which words are carrying a shared label and have no wording here to be given. They are a tail rather than a class - a demonstrative, a second word of denial, four prepositions, a reflexive, two words of belonging that stand alone, one relative and one number - and that is what finishing a closed class looks like from the inside.";
  "Two of them are written against their neighbours rather than on their own, because the neighbour is the thing the reader will confuse them with. ‘mine’ and ‘yours’ are given the difference from ‘my’ and ‘your’, which is not what they mean but where they stand: the first pair takes a name after it and the second pair stands alone. A reader who is told only the meaning writes ‘mine house’, and the store would have been the thing that taught them to.";
  "‘Lord’ was left alone on purpose, and it is the one word in the held list that is a decision rather than a task. A settled wording for it is a sentence about who God is, written once and then applied to every place the word stands, and that is the same ground ‘God’ was refused on earlier. It is one entry. Whoever settles it should be a person and not this.";
  let a =
    "حرفِ تعریف ہے، مگر وہ والا جو کِسی ایک اَن جانی چیز کے لیٔے آتا ہے۔ اُردُو میں اِس کے لیٔے بھی کویٔی الگ لفظ نہیں؛ جہاں گِنتی پر زور ہو وہاں ’ایک‘ آ جاتا ہے، اَور باقی جگہ کُچھ نہیں لِکھا جاتا۔";
  let r = {
    the: "حرفِ تعریف ہے، یعنی وہ چھوٹا لفظ جو اِسم سے پہلے آ کر بتاتا ہے کہ کویٔی معلوم اَور خاص چیز مُراد ہے — اِسم یعنی کِسی چیز، شخص یا جگہ کا نام۔ اُردُو میں اِس کے لیٔے کویٔی الگ لفظ نہیں لِکھا جاتا، اِس لیٔے ترجمے میں یہ غائب لگتا ہے۔",
    a,
    an: "حرفِ تعریف ہے، مگر وہ والا جو کِسی ایک اَن جانی چیز کے لیٔے آتا ہے۔ اُردُو میں اِس کے لیٔے بھی کویٔی الگ لفظ نہیں؛ جہاں گِنتی پر زور ہو وہاں ’ایک‘ آ جاتا ہے، اَور باقی جگہ کُچھ نہیں لِکھا جاتا۔ ’a‘ کی جگہ ’an‘ تب آتا ہے جب اگلا لفظ حرفِ عِلّت کی آواز سے شُروع ہو۔",
    and: "حرفِ عطف ہے۔ یہ دو چیزوں یا دو باتوں کو ایک ساتھ جوڑتا ہے، جیسے اُردُو میں ’اَور‘۔",
    but: "حرفِ عطف ہے، مگر یہ جوڑتا نہیں بلکہ مُقابلہ کراتا ہے: جو بات اِس کے بعد آتی ہے وہ پہلی بات کے خِلاف جاتی ہے، جیسے اُردُو میں ’لیکن‘۔",
    or: "حرفِ عطف ہے، مگر یہ دو چیزوں میں سے ایک کو چُننے کے لیٔے آتا ہے، جیسے اُردُو میں ’یا‘۔",
    to: "یہ چھوٹا لفظ دو کام کرتا ہے۔ حرفِ جار کے طور پر یہ بتاتا ہے کہ کام کِس طرف یا کِس تک جا رہا ہے، جیسے اُردُو میں ’کی طرف‘ یا ’کو‘۔ اَور کِسی فعل سے پہلے آ کر یہ اُس کا مصدر بناتا ہے — یعنی وہ شکل جو اُردُو میں آخِر کے ’نا‘ سے بنتی ہے، جَیسے 'to read' کا ’پڑھنا‘ — اَور تب یہ خُود کویٔی معنی نہیں رکھتا۔",
    of: "حرفِ جار ہے۔ یہ تعلُّق یا مِلکیّت بتاتا ہے: جو لفظ اِس کے بعد آتا ہے وہ مالِک ہے یا وہ اصل ہے جِس کا حِصّہ پہلا لفظ ہے، جیسے اُردُو میں ’کا‘، ’کی‘، ’کے‘۔",
    in: "حرفِ جار ہے۔ یہ بتاتا ہے کہ چیز کِسی کے اَندر ہے، جیسے اُردُو میں ’میں‘۔",
    on: "حرفِ جار ہے۔ یہ بتاتا ہے کہ چیز کِسی کے اُوپر اَور اُس سے لگی ہویٔی ہے، جیسے اُردُو میں ’پر‘۔",
    at: "حرفِ جار ہے۔ یہ کِسی ایک جگہ یا ایک وقت کی طرف اِشارہ کرتا ہے، جیسے اُردُو میں ’پر‘ یا ’کو‘۔",
    with: "حرفِ جار ہے۔ یہ ساتھ ہونا بتاتا ہے، یا وہ چیز بتاتا ہے جِس سے کام کِیا گیا، جیسے اُردُو میں ’کے ساتھ‘ یا ’سے‘۔",
    from: "حرفِ جار ہے۔ یہ بتاتا ہے کہ کام کہاں سے شُروع ہُوا یا چیز کہاں سے آیٔی، جیسے اُردُو میں ’سے‘۔",
    into: "حرفِ جار ہے۔ یہ ’in‘ اَور ’to‘ دونوں کا کام ایک ساتھ کرتا ہے: باہر سے اَندر کی طرف جانا، جیسے اُردُو میں ’کے اَندر‘۔",
    about:
      "حرفِ جار ہے۔ یہ بتاتا ہے کہ بات کِس کے بارے میں ہو رہی ہے، جیسے اُردُو میں ’کے بارے میں‘۔",
    by: "حرفِ جار ہے۔ یہ اُس کو بتاتا ہے جِس نے کام کِیا، یا وہ ذرِیعہ جِس سے کام ہُوا، جیسے اُردُو میں ’کے ذرِیعے‘۔",
    for: "یہ لفظ دو کام کرتا ہے۔ حرفِ جار کے طور پر یہ بتاتا ہے کہ کام کِس کے لیٔے ہے، جیسے اُردُو میں ’کے لیٔے‘۔ اَور دو باتوں کو جوڑ کر یہ وجہ بتاتا ہے، جیسے اُردُو میں ’کیونکہ‘۔",
    over: "حرفِ جار ہے۔ یہ بتاتا ہے کہ چیز کِسی کے اُوپر ہے، مگر اُس سے لگی ہویٔی نہیں، جیسے اُردُو میں ’کے اُوپر‘۔",
    under:
      "حرفِ جار ہے۔ یہ بتاتا ہے کہ چیز کِسی کے نیچے ہے، جیسے اُردُو میں ’کے نیچے‘۔",
    behind:
      "حرفِ جار ہے۔ یہ بتاتا ہے کہ چیز کِسی کے پیچھے ہے، جیسے اُردُو میں ’کے پیچھے‘۔",
    among:
      "حرفِ جار ہے۔ یہ بتاتا ہے کہ چیز کیٔی لوگوں یا کیٔی چیزوں کے درمیان ہے، جیسے اُردُو میں ’کے درمیان‘۔",
    between:
      "حرفِ جار ہے۔ یہ بتاتا ہے کہ چیز ٹھیک دو کے بیچ میں ہے، جیسے اُردُو میں ’کے بیچ‘۔ ’among‘ دو سے زیادہ کے لیٔے آتا ہے، ’between‘ دو کے لیٔے۔",
    along:
      "حرفِ جار ہے۔ یہ بتاتا ہے کہ کویٔی چیز کِسی لمبی چیز کے ساتھ ساتھ ہے، جیسے اُردُو میں ’کے ساتھ ساتھ‘۔",
    through:
      "حرفِ جار ہے۔ یہ بتاتا ہے کہ کام کِسی چیز کے ایک سِرے سے دُوسرے سِرے تک اُس کے اَندر سے گُزرا، جیسے اُردُو میں ’میں سے ہو کر‘۔",
    against:
      "حرفِ جار ہے۔ یہ بتاتا ہے کہ کام کِسی کے خِلاف ہے یا کویٔی چیز کِسی سے لگی ہویٔی ہے، جیسے اُردُو میں ’کے خِلاف‘۔",
    without:
      "حرفِ جار ہے۔ یہ بتاتا ہے کہ کویٔی چیز موجُود نہیں، جیسے اُردُو میں ’کے بغیر‘۔",
    before:
      "یہ لفظ دو کام کرتا ہے۔ حرفِ جار کے طور پر یہ بتاتا ہے کہ کویٔی چیز کِسی کے سامنے ہے یا کِسی سے پہلے ہے، جیسے ’کے سامنے‘ یا ’سے پہلے‘۔ اَور دو باتوں کو جوڑ کر یہ بتاتا ہے کہ ایک کام دُوسرے سے پہلے ہُوا۔",
    after:
      "یہ لفظ دو کام کرتا ہے۔ حرفِ جار کے طور پر یہ بتاتا ہے کہ کویٔی چیز کِسی کے بعد آتی ہے، وقت میں یا جگہ میں، جیسے اُردُو میں ’کے بعد‘۔ اَور دو باتوں کو جوڑ کر یہ بتاتا ہے کہ ایک کام دُوسرے کے بعد ہُوا۔",
    i: "ضمیر ہے، یعنی وہ لفظ جو نام کی جگہ آتا ہے۔ بولنے والا اپنے لیٔے یہ لفظ اِستعمال کرتا ہے، اَور یہ کام کرنے والے کی جگہ کھڑا ہوتا ہے، جیسے اُردُو میں ’مَیں‘۔ انگریزی میں یہ ہمیشہ بڑے حرف سے لکھا جاتا ہے، جُملے کے بیچ میں بھی۔",
    I: "ضمیر ہے، یعنی وہ لفظ جو نام کی جگہ آتا ہے۔ بولنے والا اپنے لیٔے یہ لفظ اِستعمال کرتا ہے، اَور یہ کام کرنے والے کی جگہ کھڑا ہوتا ہے، جیسے اُردُو میں ’مَیں‘۔ انگریزی میں یہ ہمیشہ بڑے حرف سے لکھا جاتا ہے، جُملے کے بیچ میں بھی۔",
    me: "ضمیر ہے۔ بولنے والا اپنے لیٔے یہ لفظ اُس جگہ اِستعمال کرتا ہے جہاں کام اُس پر ہو رہا ہو، جیسے اُردُو میں ’مُجھے‘۔",
    we: "ضمیر ہے۔ بولنے والا اپنے اَور اپنے ساتھیوں کے لیٔے یہ لفظ اِستعمال کرتا ہے، اَور یہ کام کرنے والے کی جگہ کھڑا ہوتا ہے، جیسے اُردُو میں ’ہم‘۔",
    us: "ضمیر ہے۔ یہ بولنے والے اَور اُس کے ساتھیوں کے لیٔے اُس جگہ آتا ہے جہاں کام اُن پر ہو رہا ہو، جیسے اُردُو میں ’ہمیں‘۔",
    you: "ضمیر ہے۔ یہ اُس کے لیٔے آتا ہے جِس سے بات کی جا رہی ہے، جیسے اُردُو میں ’تُو‘، ’تُم‘ یا ’آپ‘۔ انگریزی کا یہی ایک لفظ ایک شخص کے لیٔے بھی آتا ہے اَور کیٔی لوگوں کے لیٔے بھی، اَور کام کرنے والے اَور جِس پر کام ہو، دونوں کی جگہ کھڑا ہوتا ہے۔",
    he: "ضمیر ہے۔ یہ کِسی ایک مرد کے لیٔے آتا ہے اَور کام کرنے والے کی جگہ کھڑا ہوتا ہے، جیسے اُردُو میں ’وہ‘۔ انگریزی مرد اَور عورت کے لیٔے دو الگ لفظ رکھتی ہے، اُردُو ایک ہی۔",
    him: "ضمیر ہے۔ یہ کِسی ایک مرد کے لیٔے اُس جگہ آتا ہے جہاں کام اُس پر ہو رہا ہو، جیسے اُردُو میں ’اُسے‘۔",
    she: "ضمیر ہے۔ یہ کِسی ایک عورت کے لیٔے آتا ہے اَور کام کرنے والے کی جگہ کھڑا ہوتا ہے، جیسے اُردُو میں ’وہ‘۔ انگریزی مرد اَور عورت کے لیٔے دو الگ لفظ رکھتی ہے، اُردُو ایک ہی۔",
    her: "یہ لفظ کِسی ایک عورت کے لیٔے دو کام کرتا ہے: کبھی اُس جگہ آتا ہے جہاں کام اُس پر ہو رہا ہو، جیسے ’اُسے‘، اَور کبھی مِلکیّت بتاتا ہے، جیسے ’اُس کا‘۔ انگریزی دونوں کاموں کے لیٔے ایک ہی لفظ رکھتی ہے۔",
    it: "ضمیر ہے۔ یہ کِسی چیز یا جانور کے لیٔے آتا ہے، مرد یا عورت کے لیٔے نہیں، جیسے اُردُو میں ’وہ‘ یا ’یہ‘۔ کبھی یہ کِسی چیز کی طرف اِشارہ ہی نہیں کرتا اَور صِرف جُملہ شُروع کرنے کے لیٔے آتا ہے۔",
    they: "ضمیر ہے۔ یہ ایک سے زیادہ لوگوں یا چیزوں کے لیٔے آتا ہے اَور کام کرنے والے کی جگہ کھڑا ہوتا ہے، جیسے اُردُو میں ’وہ سب‘۔",
    them: "ضمیر ہے۔ یہ ایک سے زیادہ لوگوں یا چیزوں کے لیٔے اُس جگہ آتا ہے جہاں کام اُن پر ہو رہا ہو، جیسے اُردُو میں ’اُنہیں‘۔",
    my: "یہ لفظ مِلکیّت بتاتا ہے: جو چیز اِس کے بعد آتی ہے وہ بولنے والے کی ہے، جیسے اُردُو میں ’میرا‘۔",
    our: "یہ لفظ مِلکیّت بتاتا ہے: جو چیز اِس کے بعد آتی ہے وہ بولنے والے اَور اُس کے ساتھیوں کی ہے، جیسے اُردُو میں ’ہمارا‘۔",
    your: "یہ لفظ مِلکیّت بتاتا ہے: جو چیز اِس کے بعد آتی ہے وہ اُس کی ہے جِس سے بات ہو رہی ہے، جیسے اُردُو میں ’تیرا‘ یا ’تُمہارا‘۔",
    his: "یہ لفظ مِلکیّت بتاتا ہے: جو چیز اِس کے بعد آتی ہے وہ کِسی ایک مرد کی ہے، جیسے اُردُو میں ’اُس کا‘۔",
    their:
      "یہ لفظ مِلکیّت بتاتا ہے: جو چیز اِس کے بعد آتی ہے وہ ایک سے زیادہ لوگوں کی ہے، جیسے اُردُو میں ’اُن کا‘۔ بولنے میں یہ 'there' (وہاں) جَیسا لگتا ہے، مگر دونوں الگ الفاظ ہیں۔",
    its: "یہ لفظ مِلکیّت بتاتا ہے: جو چیز اِس کے بعد آتی ہے وہ کِسی چیز یا جانور کی ہے، جیسے اُردُو میں ’اُس کا‘۔ اِس میں apostrophe نہیں آتا: 'it’s' ایک الگ لفظ ہے جِس کا مطلب 'یہ ہے' ہے۔",
    not: "یہ لفظ اِنکار کرتا ہے: جو بات اِس کے ساتھ آتی ہے وہ ہویٔی نہیں، جیسے اُردُو میں ’نہیں‘۔ انگریزی میں یہ فعل کے بعد آتا ہے۔",
    no: "یہ لفظ بھی اِنکار کرتا ہے، مگر ’not‘ سے فرق یہ ہے کہ یہ نام سے پہلے آ کر کہتا ہے کہ وہ چیز ایک بھی نہیں، جیسے اُردُو میں ’کویٔی نہیں‘۔",
    never:
      "یہ لفظ اِنکار کرتا ہے اَور ساتھ وقت بھی بتاتا ہے: کِسی وقت بھی نہیں، جیسے اُردُو میں ’کبھی نہیں‘۔",
    who: "یہ لفظ اگلی بات کو پہلی سے جوڑتا ہے اَور کِسی شخص کے لیٔے آتا ہے، اُس جگہ جہاں وہ شخص کام کر رہا ہو، جیسے اُردُو میں ’جو‘۔",
    whom: "یہ لفظ اگلی بات کو پہلی سے جوڑتا ہے اَور کِسی شخص کے لیٔے آتا ہے، مگر اُس جگہ جہاں کام اُس شخص پر ہو رہا ہو، جیسے اُردُو میں ’جِسے‘۔",
    which:
      "یہ لفظ اگلی بات کو پہلی سے جوڑتا ہے اَور کِسی چیز کے لیٔے آتا ہے، شخص کے لیٔے نہیں، جیسے اُردُو میں ’جو‘۔",
    that: "یہ لفظ تین کام کرتا ہے۔ کبھی یہ کِسی دُور کی چیز کی طرف اِشارہ کرتا ہے، جیسے ’وہ‘؛ کبھی اگلی بات کو پہلی سے جوڑتا ہے، جیسے ’جو‘؛ اَور کبھی پُوری بات کو فعل کے ساتھ باندھ دیتا ہے، جیسے ’کہ‘۔",
    this: "یہ لفظ کِسی پاس کی چیز کی طرف اِشارہ کرتا ہے، جیسے اُردُو میں ’یہ‘۔ دُور کی چیز کے لیٔے ’that‘ آتا ہے۔",
    nor: "یہ لفظ بھی اِنکار کرتا ہے، مگر یہ جوڑتا بھی ہے: پہلے ایک اِنکار ہو چُکا ہوتا ہے اَور یہ دُوسرا اِنکار اُس کے ساتھ مِلا دیتا ہے، جیسے اُردُو میں ’نہ‘۔",
    upon: "حرفِ جار ہے۔ یہ ’on‘ ہی کی طرح بتاتا ہے کہ چیز کِسی کے اُوپر ہے، جیسے اُردُو میں ’پر‘۔ فرق صِرف یہ ہے کہ ’upon‘ پُرانی اَور بھاری بول چال کا لفظ ہے، اَور بائِبل میں اکثر آتا ہے۔",
    toward:
      "حرفِ جار ہے۔ یہ رُخ بتاتا ہے: کام کِس کی طرف بڑھ رہا ہے، جیسے اُردُو میں ’کی طرف‘۔ ’to‘ سے فرق یہ ہے کہ ’toward‘ صِرف رُخ بتاتا ہے، پہُنچنا نہیں۔",
    like: "حرفِ جار ہے۔ یہ دو چیزوں کی مُشابہت بتاتا ہے: ایک دُوسری جَیسی ہے، جیسے اُردُو میں ’جَیسا‘۔",
    except:
      "حرفِ جار ہے۔ یہ ایک چیز کو باقی سب سے الگ کر دیتا ہے: بات سب پر لاگُو ہے، اِس ایک پر نہیں، جیسے اُردُو میں ’سِوائے‘۔",
    himself:
      "یہ ضمیر ہے اَور ’he‘ کی طرف لَوٹتا ہے: کام کرنے والا اَور جِس پر کام ہُوا، دونوں ایک ہی شخص ہیں، جیسے اُردُو میں ’خُود‘ یا ’اپنے آپ‘۔",
    mine: "یہ لفظ مِلکیّت بتاتا ہے اَور بولنے والے کی ہے، جیسے اُردُو میں ’میرا‘۔ ’my‘ سے فرق یہ ہے کہ ’my‘ کے بعد نام آتا ہے اَور ’mine‘ اکیلا کھڑا ہوتا ہے۔",
    yours:
      "یہ لفظ مِلکیّت بتاتا ہے اَور جِس سے بات ہو رہی ہے اُس کی ہے، جیسے اُردُو میں ’تُمہارا‘۔ ’your‘ سے فرق یہ ہے کہ ’your‘ کے بعد نام آتا ہے اَور ’yours‘ اکیلا کھڑا ہوتا ہے۔",
    whoever:
      "یہ لفظ اگلی بات کو پہلی سے جوڑتا ہے اَور کِسی بھی شخص کے لیٔے آتا ہے، ایک مُقرّر شخص کے لیٔے نہیں، جیسے اُردُو میں ’جو کویٔی‘۔",
    eighteen: "یہ لفظ گِنتی بتاتا ہے: اٹّھارہ۔",
    what: "یہ لفظ دو کام کرتا ہے۔ کبھی یہ اگلی بات کو پہلی سے جوڑتا ہے اَور کِسی چیز کے لیٔے آتا ہے، شخص کے لیٔے نہیں، جیسے اُردُو میں ’جو‘۔ اَور کبھی یہ کِسی چیز کے بارے میں پُوچھتا ہے، جیسے اُردُو میں ’کیا‘۔",
    all: "یہ لفظ مِقدار بتاتا ہے اَور پُورے کے لیٔے آتا ہے: ایک بھی باقی نہیں، جیسے اُردُو میں ’سب‘۔",
    whole:
      "یہ لفظ مِقدار بتاتا ہے، مگر ایک ہی چیز کے بارے میں: اُس کا کویٔی حِصّہ چھُوٹا نہیں، جیسے اُردُو میں ’سارا‘۔ ’all‘ کیٔی چیزوں کے لیٔے آتا ہے، ’whole‘ ایک کے لیٔے۔",
    entire:
      "یہ لفظ ’whole‘ ہی کی طرح ایک چیز کے پُورے پن کے لیٔے آتا ہے، مگر اِس میں زور زیادہ ہے، جیسے اُردُو میں ’پُورا کا پُورا‘۔",
    every:
      "یہ لفظ مِقدار بتاتا ہے، مگر یہ کیٔی میں سے ہر ایک کو الگ الگ لیتا ہے، جیسے اُردُو میں ’ہر‘۔",
    full: "یہ لفظ بتاتا ہے کہ کویٔی چیز اَندر تک بھری ہویٔی ہے اَور اُس میں اَور جگہ نہیں، جیسے اُردُو میں ’بھرا ہُوا‘۔",
    one: "یہ لفظ گِنتی بتاتا ہے: ایک۔",
    two: "یہ لفظ گِنتی بتاتا ہے: دو۔",
    three: "یہ لفظ گِنتی بتاتا ہے: تین۔",
    four: "یہ لفظ گِنتی بتاتا ہے: چار۔",
    five: "یہ لفظ گِنتی بتاتا ہے: پانچ۔",
    six: "یہ لفظ گِنتی بتاتا ہے: چھ۔",
    seven: "یہ لفظ گِنتی بتاتا ہے: سات۔",
    eight: "یہ لفظ گِنتی بتاتا ہے: آٹھ۔",
    nine: "یہ لفظ گِنتی بتاتا ہے: نو۔",
    ten: "یہ لفظ گِنتی بتاتا ہے: دس۔",
    eleven: "یہ لفظ گِنتی بتاتا ہے: گیارہ۔",
    twelve: "یہ لفظ گِنتی بتاتا ہے: بارہ۔",
    fifteen: "یہ لفظ گِنتی بتاتا ہے: پندرہ۔",
    twenty: "یہ لفظ گِنتی بتاتا ہے: بیس۔",
    thirty: "یہ لفظ گِنتی بتاتا ہے: تِیس۔",
    forty: "یہ لفظ گِنتی بتاتا ہے: چالِیس۔",
    fifty: "یہ لفظ گِنتی بتاتا ہے: پچاس۔",
    sixty: "یہ لفظ گِنتی بتاتا ہے: ساٹھ۔",
    seventy: "یہ لفظ گِنتی بتاتا ہے: سَتّر۔",
    eighty: "یہ لفظ گِنتی بتاتا ہے: اَسّی۔",
    hundred:
      "یہ لفظ گِنتی بتاتا ہے: سو۔ یہ اکیلا نہیں آتا؛ اِس سے پہلے کویٔی اَور گِنتی آتی ہے جو بتاتی ہے کہ کِتنے سو۔",
    thousand:
      "یہ لفظ گِنتی بتاتا ہے: ہزار۔ یہ بھی اکیلا نہیں آتا؛ اِس سے پہلے کویٔی اَور گِنتی آتی ہے جو بتاتی ہے کہ کِتنے ہزار۔",
  };
  return r;
}
