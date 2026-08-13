export function app_shared_bible_hash_unknown_cases() {
  "Links, and what a bible page should find wrong with each of them, written down so the checking of links can be checked against something other than itself.";
  "A case names the field by the word a reader is shown rather than by the letter the link spells it with, because that word is the part somebody has to understand. The suggestion named is one that must be offered rather than the whole of what is offered, so a better guess appearing beside it later is an improvement rather than a red gate.";
  let cases = [
    {
      hash: {
        c: "JHN04",
        v: "10",
        l: "en",
      },
      findings: [],
      why: "a link that names only real things is found to have nothing wrong with it, which is the case every good link takes and so the one that must never go red",
    },
    {
      hash: {
        l: "gl+ceb+ten",
      },
      findings: [
        {
          name: "language",
          value: "gl",
          suggestion: "tgl",
        },
        {
          name: "language",
          value: "ten",
          suggestion: "en",
        },
      ],
      why: "the link this whole family was built for: two of the three languages misspelled, the real one between them left alone, and both said at once rather than one and then the other",
    },
    {
      hash: {
        c: "JOH04",
      },
      findings: [
        {
          name: "chapter",
          value: "JOH04",
          suggestion: "JHN04",
        },
      ],
      why: "John spelled the way somebody who has not seen our codes would spell it. It is two edits from the code we use and shares no ending with it, so it is the case that fails the moment a suggestion is measured against codes alone rather than against the book names as well",
    },
    {
      hash: {
        mode: "verses",
      },
      findings: [
        {
          name: "way of reading",
          value: "verses",
          suggestion: "verse",
        },
      ],
      why: "the plural of the word the link wants, which used to name neither reader, match neither, and open the other one without a word said",
    },
    {
      hash: {
        l: "qqqqqqq",
      },
      findings: [
        {
          name: "language",
          value: "qqqqqqq",
          suggestion: "",
        },
      ],
      why: "a word nothing is spelled anything like is still said out loud with nothing offered, because a reader who is shown no guesses at least knows which word to fix - the failure to avoid is the page going quiet",
    },
  ];
  return cases;
}
