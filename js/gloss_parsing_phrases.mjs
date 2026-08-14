export function gloss_parsing_phrases() {
  "Every word the Greek interlinear builds its spelled-out parsings out of, each paired with the dimension it belongs to and the plain English a word explanation is allowed to say for it.";
  "A parsing is written in grammarians' shorthand and an explanation is written for a reader who has never met the word case. Somewhere the two have to be laid against each other, and this is the only place it happens - so a phrase changed here changes every sentence that was ever composed from it, and no explanation anywhere spells one of these out by hand.";
  "The list is answerable to a count rather than to memory. Asking the interlinear for the words its New Testament parsings are made of gives fifty-six of them, and every one has an entry here; a word appearing in the text with no entry is a hole the composer refuses to write around rather than one it quietly skips.";
  "The dimension is what lets a sentence be composed rather than concatenated. A parsing hands over its words in the order a grammarian writes them, and an explanation wants them in the order a reader can follow, so the composer sorts by dimension and needs to be told which is which.";
  "A phrase may be empty, and that is a decision rather than a gap. The indicative, the active voice and the singular are what a reader assumes unless told otherwise, and glossing them would spend a clause on saying nothing - so the word is known, placed, and then left unsaid.";
  let phrases = [
    {
      word: "Noun",
      dimension: "kind",
      phrase: "a noun",
    },
    {
      word: "Verb",
      dimension: "kind",
      phrase: "a verb",
    },
    {
      word: "Article",
      dimension: "kind",
      phrase: "the article, the",
    },
    {
      word: "Adjective",
      dimension: "kind",
      phrase: "an adjective, a describing word",
    },
    {
      word: "Adverb",
      dimension: "kind",
      phrase: "an adverb, a word that qualifies a verb",
    },
    {
      word: "Conjunction",
      dimension: "kind",
      phrase: "a joining word",
    },
    {
      word: "Preposition",
      dimension: "kind",
      phrase: "a preposition, one of the little words that place a thing",
    },
    {
      word: "Particle",
      dimension: "kind",
      phrase:
        "a particle, one of the small words Greek uses to colour a clause rather than to name anything",
    },
    {
      word: "IntPrtcl",
      dimension: "kind",
      phrase: "a particle that turns its clause into a question",
    },
    {
      word: "Interjection",
      dimension: "kind",
      phrase: "an interjection, a word thrown in on its own",
    },
    {
      word: "Pronoun",
      dimension: "kind",
      phrase: "a pronoun, a word standing in for a name",
    },
    {
      word: "Indec",
      dimension: "kind",
      phrase: "a word Greek never changes the ending of",
    },
    {
      word: "Hebrew",
      dimension: "kind",
      phrase: "a Hebrew word carried over into the Greek unchanged",
    },
    {
      word: "Word",
      dimension: "skip",
      phrase: "",
    },
    {
      word: "Personal",
      dimension: "sort",
      phrase: "personal",
    },
    {
      word: "Possessive",
      dimension: "sort",
      phrase: "possessive",
    },
    {
      word: "Demonstrative",
      dimension: "sort",
      phrase: "demonstrative, a word that points",
    },
    {
      word: "Relative",
      dimension: "sort",
      phrase: "relative, the kind of word English says as who or which",
    },
    {
      word: "Reflexive",
      dimension: "sort",
      phrase: "reflexive, pointing back at the one already named",
    },
    {
      word: "Reciprocal",
      dimension: "sort",
      phrase: "reciprocal, for what a group does back and forth among itself",
    },
    {
      word: "Interrogative",
      dimension: "sort",
      phrase: "interrogative, the kind that asks",
    },
    {
      word: "Indefinite",
      dimension: "sort",
      phrase: "indefinite, leaving who or what unsaid",
    },
    {
      word: "Nominative",
      dimension: "case",
      phrase: "the form for the one doing something",
    },
    {
      word: "Genitive",
      dimension: "case",
      phrase: "the form that shows belonging",
    },
    {
      word: "Dative",
      dimension: "case",
      phrase: "the form for the one something is done to or given to",
    },
    {
      word: "Accusative",
      dimension: "case",
      phrase: "the form for what a sentence acts on",
    },
    {
      word: "Vocative",
      dimension: "case",
      phrase: "the form for calling somebody by name",
    },
    {
      word: "Masculine",
      dimension: "gender",
      phrase: "masculine",
    },
    {
      word: "Feminine",
      dimension: "gender",
      phrase: "feminine",
    },
    {
      word: "Neuter",
      dimension: "gender",
      phrase: "neuter",
    },
    {
      word: "Singular",
      dimension: "number",
      phrase: "",
    },
    {
      word: "Plural",
      dimension: "number",
      phrase: "plural",
    },
    {
      word: "1st",
      dimension: "person",
      phrase: "first person",
    },
    {
      word: "2nd",
      dimension: "person",
      phrase: "second person",
    },
    {
      word: "3rd",
      dimension: "person",
      phrase: "third person",
    },
    {
      word: "Person",
      dimension: "skip",
      phrase: "",
    },
    {
      word: "Present",
      dimension: "tense",
      phrase: "the tense for something going on now",
    },
    {
      word: "Aorist",
      dimension: "tense",
      phrase: "the tense for something done once",
    },
    {
      word: "Imperfect",
      dimension: "tense",
      phrase:
        "the tense for something that was going on over a stretch of time",
    },
    {
      word: "Perfect",
      dimension: "tense",
      phrase: "the tense for something done whose result still stands",
    },
    {
      word: "Pluperfect",
      dimension: "tense",
      phrase:
        "the tense for something that had already been done before the story reached it",
    },
    {
      word: "Future",
      dimension: "tense",
      phrase: "the tense for what is still to come",
    },
    {
      word: "Indicative",
      dimension: "mood",
      phrase: "",
    },
    {
      word: "Subjunctive",
      dimension: "mood",
      phrase: "the mood for what is supposed rather than stated",
    },
    {
      word: "Imperative",
      dimension: "mood",
      phrase: "the mood for telling somebody to do something",
    },
    {
      word: "Optative",
      dimension: "mood",
      phrase: "the mood for something wished for",
    },
    {
      word: "Infinitive",
      dimension: "mood",
      phrase: "the plain form English gives with to in front of it",
    },
    {
      word: "Participle",
      dimension: "mood",
      phrase: "a verb used as a describing word",
    },
    {
      word: "Active",
      dimension: "voice",
      phrase: "",
    },
    {
      word: "Middle",
      dimension: "voice",
      phrase: "the voice for something the doer is caught up in",
    },
    {
      word: "Passive",
      dimension: "voice",
      phrase: "the voice for something done to the one named",
    },
    {
      word: "or",
      dimension: "voice_undecided",
      phrase: "",
    },
    {
      word: "Comparative",
      dimension: "degree",
      phrase: "the form for more of a thing than something else",
    },
    {
      word: "Superlative",
      dimension: "degree",
      phrase: "the form for most of all",
    },
    {
      word: "-",
      dimension: "skip",
      phrase: "",
    },
    {
      word: "/",
      dimension: "skip",
      phrase: "",
    },
  ];
  return phrases;
}
