import { arguments_assert } from "./arguments_assert.mjs";
import { bible_versions_english_choices_psalms_agreement } from "./bible_versions_english_choices_psalms_agreement.mjs";
import { equal } from "./equal.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_versions_english_choices_psalms_agreement_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every English translation this repo offers a reader is looking at the same psalm as the others when it is asked for one, rather than handing over a neighbouring psalm in good English.");
  ("A TRANSLATION READING FROM THE VULGATE NUMBERS THE PSALMS ONE BEHIND THE HEBREW ONES, and asked for the twenty third hands back the twenty fourth. That is the fault this exists for, and it is invisible everywhere else in this repo: the words come back, so nothing that asks whether a translation answers is troubled, and a comparison of translations shows the wrong psalm sitting among the right ones as one more way of putting it. It was found by a person reading a comparison and noticing that one line was about a different subject than the other twenty-two.");
  ("THE COUNT OF CHAPTERS CANNOT SEE IT, WHICH IS WHY THIS ASKS ABOUT WORDS. The two numberings both end at a hundred and fifty - one of them joins two psalms together and splits another one to get there - so the reading that compares chapter names and verse counts scores the offending translation at four fifths agreement and raises nothing. Measured.");
  ("SHARING NOT ONE WORD IN A ROW WITH ANY OF THE OTHER TWENTY-TWO IS THE LINE, because that is a statement about the passage rather than about the style. Translations of one verse disagree about wording constantly and still say some content word the same way; saying none of them the same way, at a verse twenty-two others agree about, means it is not that verse. Measured across the probes: the offending translation comes out at zero and every other translation at one or more, so the line separates it and fails nobody else.");
  ("THE MARGIN IS THIN ON PURPOSE AND THE RETURN REPORTS IT. Two of the translations here are deliberately loose - one puts the Hebrew names back in, one rewrites for a reader with little English - and they sit at one, a single word above failing. That is the right side to be thin on: a false failure costs somebody a read, and a miss puts the wrong scripture in front of a reader looking exactly like the right one.");
  ("IT ALSO ASKS WHETHER EVERY TRANSLATION WAS MEASURED AT ALL, which is the way this check could pass while seeing nothing. Reading a passage out of a translation is allowed to fail quietly - one unreadable translation would otherwise end the whole comparison - so a translation whose fetch times out simply is not in the answer, and a check that fails the ones standing apart cannot fail one that is not there. A wrongly numbered bible would walk straight through on a slow morning.");
  ("IT IS A REAL FAILURE AND NOT A GUARD AGAINST ONE. Measured over the same five psalms twice within the hour: twenty-one translations one run and twenty-two the next, the missing one handing over the psalm perfectly when asked on its own. So this is the ordinary state of a loaded machine rather than a fault anybody introduced, and the answer to a red line here is usually to run it again.");
  let measured = await bible_versions_english_choices_psalms_agreement();
  let references = property_get(measured, "references");
  let apart = property_get(measured, "apart");
  let unmeasured = property_get(measured, "unmeasured");
  list_empty_is_assert_json(unmeasured, {
    references,
    hint: "each of these translations may be shipped and was never read at these psalms, so nothing here has looked at them - a fetch that failed leaves a translation out silently, and this check cannot fail a translation it never saw; run it again, and if the same one is missing twice it cannot be read at all and belongs in the withheld list rather than on the shelf",
  });
  function alone_is(record) {
    let nearest = property_get(record, "nearest");
    let unshared = equal(nearest, 0);
    return unshared;
  }
  let alone = list_filter(apart, alone_is);
  list_empty_is_assert_json(alone, {
    references,
    hint: "each of these translations says none of these psalm verses the way any of the other translations say them, which at a verse the rest agree about means it is handing over a different psalm - so it must not be quoted at a psalm, and a comparison of psalm wordings must leave it out",
  });
  ("Says how far the nearest survivor stood, because the whole worth of this line is the gap under it and a gap that closes is worth seeing before it closes.");
  let closest = apart[0];
  let margin = property_get(closest, "nearest");
  let r = {
    references: list_size(references),
    versions: list_size(apart),
    margin,
  };
  return r;
}
