export function gloss_parsing_phrases() {
  "Every word the Greek interlinear builds its spelled-out parsings out of, each paired with the dimension it belongs to, the plain English name an explanation is allowed to give it, and the explanation of that name.";
  "A parsing is written in grammarians' shorthand and an explanation is written for a reader who has never met the word case. Somewhere the two have to be laid against each other, and this is the only place it happens - so a phrase changed here changes every sentence that was ever composed from it, and no explanation anywhere spells one of these out by hand.";
  "The list is answerable to a count rather than to memory. Asking the interlinear for the words its New Testament parsings are made of gives fifty-six of them, and every one has an entry here; a word appearing in the text with no entry is a hole the composer refuses to write around rather than one it quietly skips.";
  "The dimension is what lets a sentence be composed rather than concatenated. A parsing hands over its words in the order a grammarian writes them, and an explanation wants them in the order a reader can follow, so the composer sorts by dimension and needs to be told which is which.";
  "The name and its explanation are kept apart because one of them moves and the other does not. A sort is an adjective that has to stand in front of the kind it describes - demonstrative in front of pronoun - and a name welded to its own explanation cannot be put anywhere but at the end of a clause. Split, the same entry serves a sentence that names it plainly and a sentence that builds a longer phrase around it.";
  "A phrase may be empty, and that is a decision rather than a gap. The indicative and the active voice are what a reader assumes unless told otherwise, and glossing them would spend a clause on saying nothing - so the word is known, placed, and then left unsaid.";
  "The infinitive and the participle are given a dimension of their own rather than sitting with the moods, because a reader meets them as a thing a word is rather than as a way a verb stands. A sentence says this is a participle where it would say a verb, and putting them with the other moods would make it say both.";
  let phrases = [
    {
      word: "Noun",
      dimension: "kind",
      phrase: "noun",
      gloss: "",
    },
    {
      word: "Verb",
      dimension: "kind",
      phrase: "verb",
      gloss: "",
    },
    {
      word: "Article",
      dimension: "kind",
      phrase: "article",
      gloss: "the word English puts in front of a noun",
    },
    {
      word: "Adjective",
      dimension: "kind",
      phrase: "adjective",
      gloss: "a describing word",
    },
    {
      word: "Adverb",
      dimension: "kind",
      phrase: "adverb",
      gloss: "a word that qualifies a verb",
    },
    {
      word: "Conjunction",
      dimension: "kind",
      phrase: "joining word",
      gloss: "",
    },
    {
      word: "Preposition",
      dimension: "kind",
      phrase: "preposition",
      gloss: "one of the little words that place a thing",
    },
    {
      word: "Particle",
      dimension: "kind",
      phrase: "particle",
      gloss:
        "one of the small words Greek uses to colour a clause rather than to name anything",
    },
    {
      word: "IntPrtcl",
      dimension: "kind",
      phrase: "particle",
      gloss: "one that turns its clause into a question",
    },
    {
      word: "Interjection",
      dimension: "kind",
      phrase: "interjection",
      gloss: "a word thrown in on its own",
    },
    {
      word: "Pronoun",
      dimension: "kind",
      phrase: "pronoun",
      gloss: "a word standing in for a name",
    },
    {
      word: "Indec",
      dimension: "kind",
      phrase: "word Greek never changes the ending of",
      gloss: "",
    },
    {
      word: "Hebrew",
      dimension: "kind",
      phrase: "Hebrew word carried over into the Greek unchanged",
      gloss: "",
    },
    {
      word: "Word",
      dimension: "skip",
      phrase: "",
      gloss: "",
    },
    {
      word: "Personal",
      dimension: "sort",
      phrase: "personal",
      gloss: "",
    },
    {
      word: "Possessive",
      dimension: "sort",
      phrase: "possessive",
      gloss: "",
    },
    {
      word: "Demonstrative",
      dimension: "sort",
      phrase: "demonstrative",
      gloss: "a word that points",
    },
    {
      word: "Relative",
      dimension: "sort",
      phrase: "relative",
      gloss: "the kind of word English says as who or which",
    },
    {
      word: "Reflexive",
      dimension: "sort",
      phrase: "reflexive",
      gloss: "pointing back at the one already named",
    },
    {
      word: "Reciprocal",
      dimension: "sort",
      phrase: "reciprocal",
      gloss: "for what a group does back and forth among itself",
    },
    {
      word: "Interrogative",
      dimension: "sort",
      phrase: "interrogative",
      gloss: "the kind that asks",
    },
    {
      word: "Indefinite",
      dimension: "sort",
      phrase: "indefinite",
      gloss: "leaving who or what unsaid",
    },
    {
      word: "Nominative",
      dimension: "case",
      phrase: "nominative",
      gloss: "the form for the one doing something",
    },
    {
      word: "Genitive",
      dimension: "case",
      phrase: "genitive",
      gloss: "the form that shows belonging",
    },
    {
      word: "Dative",
      dimension: "case",
      phrase: "dative",
      gloss: "the form for the one something is done to or given to",
    },
    {
      word: "Accusative",
      dimension: "case",
      phrase: "accusative",
      gloss: "the form for what a sentence acts on",
    },
    {
      word: "Vocative",
      dimension: "case",
      phrase: "vocative",
      gloss: "the form for calling somebody by name",
    },
    {
      word: "Masculine",
      dimension: "gender",
      phrase: "masculine",
      gloss: "",
    },
    {
      word: "Feminine",
      dimension: "gender",
      phrase: "feminine",
      gloss: "",
    },
    {
      word: "Neuter",
      dimension: "gender",
      phrase: "neuter",
      gloss: "",
    },
    {
      word: "Singular",
      dimension: "number",
      phrase: "singular",
      gloss: "",
    },
    {
      word: "Plural",
      dimension: "number",
      phrase: "plural",
      gloss: "",
    },
    {
      word: "1st",
      dimension: "person",
      phrase: "first person",
      gloss: "",
    },
    {
      word: "2nd",
      dimension: "person",
      phrase: "second person",
      gloss: "",
    },
    {
      word: "3rd",
      dimension: "person",
      phrase: "third person",
      gloss: "",
    },
    {
      word: "Person",
      dimension: "skip",
      phrase: "",
      gloss: "",
    },
    {
      word: "Present",
      dimension: "tense",
      phrase: "present",
      gloss: "the tense for something going on now",
    },
    {
      word: "Aorist",
      dimension: "tense",
      phrase: "aorist",
      gloss: "the tense for something done once",
    },
    {
      word: "Imperfect",
      dimension: "tense",
      phrase: "imperfect",
      gloss: "the tense for something that was going on over a stretch of time",
    },
    {
      word: "Perfect",
      dimension: "tense",
      phrase: "perfect",
      gloss: "the tense for something done whose result still stands",
    },
    {
      word: "Pluperfect",
      dimension: "tense",
      phrase: "pluperfect",
      gloss:
        "the tense for something that had already been done before the story reached it",
    },
    {
      word: "Future",
      dimension: "tense",
      phrase: "future",
      gloss: "the tense for what is still to come",
    },
    {
      word: "Indicative",
      dimension: "mood",
      phrase: "",
      gloss: "",
    },
    {
      word: "Subjunctive",
      dimension: "mood",
      phrase: "subjunctive",
      gloss: "the mood for what is supposed rather than stated",
    },
    {
      word: "Imperative",
      dimension: "mood",
      phrase: "imperative",
      gloss: "the mood for telling somebody to do something",
    },
    {
      word: "Optative",
      dimension: "mood",
      phrase: "optative",
      gloss: "the mood for something wished for",
    },
    {
      word: "Infinitive",
      dimension: "mood_head",
      phrase: "infinitive",
      gloss: "the plain form English gives with to in front of it",
    },
    {
      word: "Participle",
      dimension: "mood_head",
      phrase: "participle",
      gloss: "a verb used as a describing word",
    },
    {
      word: "Active",
      dimension: "voice",
      phrase: "",
      gloss: "",
    },
    {
      word: "Middle",
      dimension: "voice",
      phrase: "middle",
      gloss: "the voice for something the doer is caught up in",
    },
    {
      word: "Passive",
      dimension: "voice",
      phrase: "passive",
      gloss: "the voice for something done to the one named",
    },
    {
      word: "or",
      dimension: "voice_undecided",
      phrase: "",
      gloss: "",
    },
    {
      word: "Comparative",
      dimension: "degree",
      phrase: "comparative",
      gloss: "the form for more of a thing than something else",
    },
    {
      word: "Superlative",
      dimension: "degree",
      phrase: "superlative",
      gloss: "the form for most of all",
    },
    {
      word: "-",
      dimension: "skip",
      phrase: "",
      gloss: "",
    },
    {
      word: "/",
      dimension: "skip",
      phrase: "",
      gloss: "",
    },
  ];
  return phrases;
}
