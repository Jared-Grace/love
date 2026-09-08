export function ebible_chapter_code_padded_cases() {
  "Chapter codes whose acceptance or refusal by the spelling check is written down, so that a check which refuses too much cannot pass unnoticed.";
  "Every case is a code and whether the door shuts on it. The codes were chosen so the answers disagree in both directions: a corpus that is refused all the way down, or accepted all the way down, is answered correctly by a check that has stopped asking anything at all, and would have said nothing on the day this was needed.";
  "Five of the nine are accepted, and three of those five name a book outside the sixty-six. That is the class this corpus exists for. The refusal was first written asking a wider question - is this book one of the sixty-six, as well as is the number spelled with its noughts - and the download this machine holds carries thirty book codes outside that list, with real chapter pages in hundreds of translations. Sirach, Tobit and the front matter were suddenly mistakes, and nothing anywhere could say so. So they are pinned here as accepted, and a check that reaches for the wider question again fails on them.";
  "The four refused ones are the shapes a person actually types: the nought left off, the nought left off where the book wants three, three written where the book wants two, and a tail that is not a number at all.";
  "What the refusal offers back as the correct spelling is not written down here. It is worked out by the one that spells a code from its two halves, which is asked its own questions elsewhere; what this corpus is for is the line between accepted and refused, which is where the fault was and is where the next one would be.";
  let cases = [
    {
      name: "genesis one, spelled the way this bible spells it",
      code: "GEN01",
      answer: {
        refused: false,
      },
    },
    {
      name: "psalms twenty three, the book whose numbers are three wide",
      code: "PSA023",
      answer: {
        refused: false,
      },
    },
    {
      name: "sirach one, a book outside the sixty-six with pages on this disk",
      code: "SIR01",
      answer: {
        refused: false,
      },
    },
    {
      name: "tobit one, outside the sixty-six and downloaded all the same",
      code: "TOB01",
      answer: {
        refused: false,
      },
    },
    {
      name: "the front matter, a page that is not a chapter of anything",
      code: "FRT01",
      answer: {
        refused: false,
      },
    },
    {
      name: "genesis one with the nought left off",
      code: "GEN1",
      answer: {
        refused: true,
      },
    },
    {
      name: "psalms twenty three written two wide",
      code: "PSA23",
      answer: {
        refused: true,
      },
    },
    {
      name: "john four written three wide, where two is the width",
      code: "JHN004",
      answer: {
        refused: true,
      },
    },
    {
      name: "a tail that is not a number, so there is no spelling to offer",
      code: "GENxx",
      answer: {
        refused: true,
      },
    },
  ];
  return cases;
}
