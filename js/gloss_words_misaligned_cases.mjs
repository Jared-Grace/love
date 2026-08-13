export function gloss_words_misaligned_cases() {
  "A passage's words beside the words its explanations name, one case for each way the two can be taken to line up or not.";
  "The words are Cebuano and every pair here was taken from the authored store rather than invented, because the whole difficulty is that a word taken apart into its pieces and a word simply misspelled look alike from a distance - both leave an explanation naming something the passage does not spell.";
  "What rests on this reading is a gate over two gloss stores, and it can fail in both directions. Called misaligned where it lines up and a store stays red forever over nothing; called aligned where it does not and a reader is shown explanations that have quietly slid onto the wrong words, in scripture, with nothing on the page saying so.";
  let cases = [
    {
      written: ["Ang", "Ginoo", "maayo"],
      explained: ["Ang", "Ginoo", "maayo"],
      aligned: true,
      why: "the plain case - one explanation for each word, spelled the way the passage spells it",
    },
    {
      written: ["gihatag", "niya", "siyang", "grasya"],
      explained: ["gihatag", "niya", "siya", "ng", "grasya"],
      aligned: true,
      why: "the passage joins the linker onto the pronoun and the explanations take it apart. siya and ng spell siyang exactly, so nothing has slid - the reader is shown the word's two pieces, which is more than one explanation could say",
    },
    {
      written: ["silag", "kalipay"],
      explained: ["sila", "g", "kalipay"],
      aligned: true,
      why: "the same taking apart where the piece is a single letter. a rule that asked the pieces to look like words would refuse this one",
    },
    {
      written: ["makakitag", "maayo"],
      explained: ["makakita", "g", "maayo"],
      aligned: true,
      why: "a verb rather than a pronoun carries the ending here, so the taking apart is not a habit of one word class and cannot be recognised by naming the words it happens to",
    },
    {
      written: ["naglukso", "ang", "lalaki"],
      explained: ["nagluksu", "ang", "lalaki"],
      aligned: false,
      why: "a word misspelled by one letter. this is the case a reading built on how near two spellings are would wave through, and it is a real fault: the explanation is standing under a spelling nobody wrote",
    },
    {
      written: ["Ikaw", "mao", "si", "Simon"],
      explained: ["kaniya", "mao", "si", "Simon"],
      aligned: false,
      why: "the explanation has drifted onto a different word altogether. nothing joins and nothing spells it, so it is reported at the first word rather than at the last",
    },
    {
      written: ["siyang", "grasya"],
      explained: ["siya", "ngadto", "grasya"],
      aligned: false,
      why: "the pieces begin the written word without spelling it. joining has to land on the word exactly or a reader could not put the page back together, and stopping at the first piece that merely fits the start is how a whole run would be accepted wrongly",
    },
    {
      written: ["mahimo", "nga", "matarong"],
      explained: ["mahimong", "matarong"],
      aligned: false,
      why: "the other direction - one explanation spelling two written words. it is refused, because the words a passage separates are the ones a reader sees separated, and this pair is not a taking apart at all: mahimong is not mahimo and nga joined up",
    },
    {
      written: ["Ang", "Ginoo", "maayo"],
      explained: ["Ang", "Ginoo"],
      aligned: false,
      why: "the explanations run out before the words do, which is a whole run left with nothing under it rather than a mistake in any one explanation",
    },
    {
      written: ["Ang", "Ginoo"],
      explained: ["Ang", "Ginoo", "maayo"],
      aligned: false,
      why: "an explanation left over after the words have run out. the reverse of the case above and just as silent, since a page painting them in order simply stops showing the last one",
    },
  ];
  return cases;
}
