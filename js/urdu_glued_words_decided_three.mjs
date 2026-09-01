export function urdu_glued_words_decided_three() {
  "Every Urdu word the detector offers when it is asked to read a word as three words run together, ruled on one at a time: the ones that really are three words with two spaces missing, and the ones that only look like it.";
  "Asking for three pieces is a different question from asking for two, not a harder version of it. The publisher's sweep welded some places twice over — سوار ہو گئے arrived as one word — and a cut made in one place can never find those. Twenty-five words come back where two hundred and three came back for two, because three common pieces in a row is a much rarer accident.";
  "It is also a noisier question, and most of what it finds is ordinary vocabulary chopped into syllables. ہمسایہ is a neighbour, not ہم سا یہ; شامیانہ is a canopy; آرامگاہیں are resting places. The detector has no way to know, so every one of them is written down here as looked at and fine.";
  "The cut the detector proposes is a guess and is not obeyed. کونےکا came back cut as کو نے کا, which is three words but the wrong three; it is کونے کا, and that is what is written. یادگارہو came back as یاد گا رہو and is یادگار ہو. The detector says which word to look at; what the word actually is comes from reading it.";
  "The strongest evidence here is one the two-piece question never had. کر چلا گیا stands spaced eight times in this same translation and welded seven; گھر جا کر spaced seven and welded six; پا لیا ہے spaced eight and welded four. Both spellings in the same book, for the same words, is the plain mark of a slip rather than a habit — and it is exactly what the two-piece welds did not have, where whatever welded them welded every one.";
  "Where the reading is genuinely two-ways the word is kept rather than split, the same way round as the two-piece ruling. چھپا دی and چھپا لو are compound verbs Urdu writes closed as often as open, so they stay closed, as کرکے and ہوکر did.";
  let split = {
    کرچلاگیا: "کر چلا گیا",
    گھرجاکر: "گھر جا کر",
    سوارہوگئے: "سوار ہو گئے",
    پالیاہے: "پا لیا ہے",
    کونےکا: "کونے کا",
    بھرکرکھا: "بھر کر کھا",
    گھربنالے: "گھر بنا لے",
    یادگارہو: "یادگار ہو",
    خبرداررہیں: "خبردار رہیں",
  };
  let keep = [
    "ہمسایہ",
    "بارگاہوں",
    "ہرجانہ",
    "شامیانہ",
    "چھپایا",
    "ہریالی",
    "خوابگاہوں",
    "لشکرگاہوں",
    "چھپادی",
    "گِردوپیش",
    "پارتھیا",
    "آرامگاہیں",
    "چھپانے",
    "چھپالو",
    "سازندے",
    "باغیانہ",
  ];
  let r = {
    split,
    keep,
  };
  return r;
}
