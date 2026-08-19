import { arguments_assert } from "./arguments_assert.mjs";
export function http_error_message_absent_is_cases() {
  arguments_assert(arguments, 0);
  "Ways a download can fail, and whether each one is this repo entitled to write down that the thing asked for is not there.";
  "ONE OF THEM SAYS YES AND THE REST SAY NO, and that is the whole shape of the rule rather than an accident of which failures got listed. Not found is the far end reached, working, and answering; every other line here is the far end not answering the question at all.";
  "THE NUMBERS ARE WRITTEN OUT RATHER THAN READ FROM THE CODE. A corpus that fetched the number the rule compares against would move whenever the rule moved and stay green through the move, which is the one thing a corpus exists not to do. Spelling it here is what makes the two able to disagree.";
  "THE LAST CASE IS THE ONE THAT WAS GOT WRONG IN PRACTICE. A sweep asking every shipped bible for every chapter of a book, all at once, met a far end that stopped answering, and wrote hundreds of chapters down as missing from bibles that hold them perfectly when asked one at a time. Nothing was red; the record simply said something false, and a reader would have been shown apologies for verses that are there.";
  let cases = [
    {
      answered: 404,
      absent: true,
      why: "not found - the far end was reached and says there is no such thing there, which is the only refusal that is a fact about a bible",
    },
    {
      answered: 500,
      absent: false,
      why: "the far end broke while answering, so it never got as far as saying what it holds",
    },
    {
      answered: 503,
      absent: false,
      why: "the far end is up but will not serve right now, which is a fact about this minute and not about any bible",
    },
    {
      answered: 429,
      absent: false,
      why: "too many asks at once - the shape a wide sweep fails in, and the one most tempting to read as an answer because it arrives so consistently",
    },
    {
      answered: 403,
      absent: false,
      why: "refused permission, which says a thing may not be fetched and nothing at all about whether it is there",
    },
    {
      answered: null,
      absent: false,
      why: "nothing answered at all - the connection was refused before any status existed, so there is no message to read and absence must not be assumed from silence",
    },
  ];
  return cases;
}
