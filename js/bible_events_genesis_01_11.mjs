export function bible_events_genesis_01_11() {
  "Genesis 1 through 11 gathered into events: a title, and the verses that title points at. Nothing else, because a pointer cannot disagree with the text it points at, and so an event gathered this way never needs gathering again.";
  "The cut is made where WHAT IS HAPPENING changes, which is why a chapter yields anywhere from one event to three. A chapter is a scribe's unit of length; an event is a unit of action, and only the second is something a player can be put inside.";
  "The one filter is: does something HAPPEN, with agents. That is what leaves the genealogies out, and the ones left out are named at the foot of this function rather than silently dropped, so that a later reader can check the judgment instead of having to redo it.";
  let events = [
    {
      title: "The six days, and the seventh",
      passages: [
        { chapter_code: "GEN01", verses: "1-31" },
        { chapter_code: "GEN02", verses: "1-3" },
      ],
    },
    {
      title: "The man formed, the garden planted, the woman made",
      passages: [{ chapter_code: "GEN02", verses: "4-25" }],
    },
    {
      title: "The serpent, the eating, and the sentence",
      passages: [{ chapter_code: "GEN03", verses: "1-24" }],
    },
    {
      title: "Cain and Abel bring offerings",
      passages: [{ chapter_code: "GEN04", verses: "1-16" }],
    },
    {
      title: "Lamech boasts to his two wives",
      passages: [{ chapter_code: "GEN04", verses: "23-24" }],
    },
    {
      title: "Seth is born, and men begin to call on the name of the LORD",
      passages: [{ chapter_code: "GEN04", verses: "25-26" }],
    },
    {
      title: "Enoch walked with God, and was not, for God took him",
      passages: [{ chapter_code: "GEN05", verses: "21-24" }],
    },
    {
      title: "The LORD grieved that He had made man, and Noah found favor",
      passages: [{ chapter_code: "GEN06", verses: "1-8" }],
    },
    {
      title: "Noah is told to build the ark",
      passages: [{ chapter_code: "GEN06", verses: "9-22" }],
    },
    {
      title: "Into the ark, and the waters rise",
      passages: [{ chapter_code: "GEN07", verses: "1-24" }],
    },
    {
      title: "The raven, the dove, and dry ground",
      passages: [{ chapter_code: "GEN08", verses: "1-19" }],
    },
    {
      title: "Noah builds an altar, and the LORD resolves never again",
      passages: [{ chapter_code: "GEN08", verses: "20-22" }],
    },
    {
      title: "The covenant with every living thing, and the bow in the cloud",
      passages: [{ chapter_code: "GEN09", verses: "1-17" }],
    },
    {
      title: "Noah's vineyard, and the curse on Canaan",
      passages: [{ chapter_code: "GEN09", verses: "18-29" }],
    },
    {
      title: "The tower at Babel, and the scattering",
      passages: [{ chapter_code: "GEN11", verses: "1-9" }],
    },
    {
      title: "Terah sets out for Canaan and settles in Haran",
      passages: [{ chapter_code: "GEN11", verses: "31-32" }],
    },
  ];
  "DELIBERATELY ABSENT, and why. GEN05:1-20 and GEN05:25-32, GEN10 entire, GEN11:10-30: these are lines of descent. They report who fathered whom and how long each lived, and nobody in them does anything a player could stand beside. Enoch is the exception taken out of GEN05 rather than the rule kept, because there alone the text stops counting years to say what a man DID.";
  "GEN04:17-22 is absent for the same reason: it is the line of Cain, and the making of tents and harps is reported as a fact about descendants rather than as a scene. Lamech's own words are lifted out of it, because a man speaking is an agent acting.";
  return events;
}
