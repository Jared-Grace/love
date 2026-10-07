export function apps_prod_descriptions_differences_cases() {
  "Every way the sentence standing on a shipped page and the sentence this repo now writes for it can part, written down with what the comparison between them has to answer. The four that must be named and the three that must come back with nothing to say.";
  "THE CLEAN CASES CARRY AS MUCH WEIGHT AS THE DIRTY ONES. A comparison that named every app, or that named none of them, would sail through a corpus of faults alone - so full agreement, a page and a sentence that are both deliberately silent, and an empty folder are all written down here, all of them clean.";
  "THE FOUR FAULTS ARE EACH SHOWN ON THEIR OWN, ONE APP AT A TIME, with a second app beside it that agrees. Shown together they would pass a comparison that threw every disagreement into one list, and the whole point of four lists is that the four have four different cures. The quiet second app also catches the opposite mistake - a comparison that named everything it walked.";
  "A GATE OVER THIS IS THE ONLY PLACE THE COMPARISON IS EVER SEEN DISAGREEING. The reading that feeds it in earnest comes off the folder of pages that were last sent out, and that folder cannot be made wrong to order: it only changes when somebody sends the site. A check nobody has ever watched complain is worth nothing, so the complaints are made here instead.";
  "The sentences are single letters rather than real card text, because nothing here turns on what they say - only on whether two of them are the same, and a real sentence would invite a reader to look for meaning that is not there.";
  let cases = [
    {
      shipped: {
        bible: "a",
        search: "b",
      },
      described: {
        bible: "a",
        search: "b",
      },
      walked: 2,
      stale: [],
      unsaid: [],
      silent: [],
      unoffered: [],
      why: "the ordinary day: every page carries the sentence now written for it, and there is nothing to say about any of them",
    },
    {
      shipped: {},
      described: {},
      walked: 0,
      stale: [],
      unsaid: [],
      silent: [],
      unoffered: [],
      why: "nothing shipped and nothing written is clean, and the count of nothing travels back beside the four empty lists so a caller can tell this apart from a walk that agreed about a folder it could not open",
    },
    {
      shipped: {
        bible: "",
      },
      described: {
        bible: "",
      },
      walked: 1,
      stale: [],
      unsaid: [],
      silent: [],
      unoffered: [],
      why: "a page deliberately carrying no card while the repo deliberately writes none for it: the two agree, and agreeing about silence is agreement like any other",
    },
    {
      shipped: {
        bible: "old",
        search: "b",
      },
      described: {
        bible: "new",
        search: "b",
      },
      walked: 2,
      stale: ["bible"],
      unsaid: [],
      silent: [],
      unoffered: [],
      why: "the fault this was built for: a sentence was corrected in the repo and the page people actually reach still shows the sentence before the correction, so a stranger reads the old claim",
    },
    {
      shipped: {
        bible: "old",
        search: "b",
      },
      described: {
        search: "b",
      },
      walked: 2,
      stale: [],
      unsaid: ["bible"],
      silent: [],
      unoffered: [],
      why: "a page showing a sentence the repo no longer writes anywhere - the dangerous one, because nobody reading this repo can find out what that page even claims, and it is kept apart from a stale sentence for exactly that reason although both are cured by sending",
    },
    {
      shipped: {
        bible: "",
        search: "b",
      },
      described: {
        bible: "new",
        search: "b",
      },
      walked: 2,
      stale: [],
      unsaid: [],
      silent: ["bible"],
      unoffered: [],
      why: "a sentence is written and the page carries no card at all, so the link arrives as a bare address - the page is there, it was simply built before the sentence was, and building it again is the whole cure",
    },
    {
      shipped: {
        search: "b",
      },
      described: {
        bible: "new",
        search: "b",
      },
      walked: 2,
      stale: [],
      unsaid: [],
      silent: [],
      unoffered: ["bible"],
      why: "a sentence written for an app that has no page in the folder people are sent to at all: it reaches nobody, and unlike the other three no amount of sending changes that, which is why having no page is kept apart from having a page with nothing on it",
    },
  ];
  return cases;
}
