import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { psalms_119_stanza_verses_or_null } from "./psalms_119_stanza_verses_or_null.mjs";
export function psalms_song_file_read_or_null(file_name) {
  arguments_assert(arguments, 1);
  ("$plain file_name");
  ("Everything a sung psalm's file name on this disk says about what it holds - which chapter, which verses of it where the name says any, which take of that passage it is, and whether it is the version that came out of an editing session rather than the one that was downloaded - or nothing where the name does not say that.");
  ("★ THE WHOLE RULE IS ONE ANCHOR AND A REMAINDER, AND IT WAS STATED IN WORDS RATHER THAN WORKED OUT FROM THE FILES. A name of this kind is the word Psalm, one separator, the chapter, and then whatever is left before the sound ending; and what is left names the verses when it names anything. Two readings of these names already existed and each refused the other's names, so the rule lived in two regular expressions that had to be kept in step by hand. Holding it once means a shape the folder has never shown yet is understood the same way by every caller instead of by whichever reader happened to be extended.");
  ("★ THE EDITING MARK IS TAKEN OFF THE END BEFORE ANYTHING ELSE IS READ, BECAUSE OTHERWISE IT READS AS THE NAME OF A STANZA. A stanza of Psalm 119 is named by a Hebrew letter, so the verses may legitimately be letters rather than digits, and the word session is letters. Read as one shape, Psalm_93_session.wav hands back session where Psalm 93's verses should be, and the name is then refused for naming a stanza outside the only chapter that has stanzas. That is not a theory: nine recordings edited in Ardour sat in the downloads folder and every command in this repo passed silently over all nine, including the only two recordings that exist of Psalm 131 and Psalm 136.");
  ("★ TAKING THE MARK OFF DOES NOT NAME THE RECORDING THAT WAS EDITED, AND NO CALLER MAY READ IT THAT WAY. It is the obvious thing to believe, and it was believed here for one commit. It is wrong for six of the nine edited recordings on this disk, and wrong in the dangerous direction for three of those six, because the name it produces is the name of a real file that is a different singing: Psalm_93_session.wav gives Psalm_93.wav, which exists and runs seventy-two seconds, while the recording actually edited was Psalm_93_1-5.wav, now kept under a superseded name and running eighty-five. The other two pairs differ the same way by a number in round brackets. What an edited file was made from is written inside its editing session and nowhere in its name, so a caller needing that join has to be given it rather than derive it here.");
  ("★ A RANGE THAT COVERS ITS WHOLE CHAPTER IS THE SAME PASSAGE AS NO RANGE AT ALL, AND THIS READING HANDS BACK TWO DIFFERENT ANSWERS FOR IT. Psalm 93 has five verses, so Psalm_93_1-5.wav and Psalm_93.wav sing exactly the same scripture; the first is read here as verses one to five and the second as the whole chapter, and a caller spelling an address from those two readings spells two addresses for one psalm. That was almost repaired the wrong way round: Psalm_93_session.wav was read as the whole chapter and the whole chapter is what its session sings, so the reading was right and the rename proposed for it would have made the name wrong. Which end is right is not this function's to decide, because deciding it needs the number of verses the chapter has and that number is in the text rather than in the name. So both readings are handed back as the name spells them, and the collision is somebody else's to catch.");
  ("★ THE NUMBER OF VERSES A CHAPTER HAS IS DELIBERATELY NOT ASKED FOR HERE. Asking would let this settle the collision above by itself, and it would cost every reading of every name a look at the text of a psalm - a reading that reaches the network, can fail, and would make naming a file depend on being online. The names are read by the hundred while a collision is a handful, so the cost belongs on whoever is looking for the collision.");
  ("The mark is written two ways on this disk and both are read, because both are already there and neither is going to be renamed. Six files say session and one says ardour_session, joined on by either separator.");
  ("The remainder is read as one shape rather than a strip at a time, for the reason the readings this replaces both gave: a name that stops matching part way through is a name saying something else, and reading it in pieces would leave a half-read name looking like a passage.");
  ("A part of a chapter is said two ways and both are read. One says the verses outright - 147_1-11, or 104_14-24b where the split falls inside a verse - and the other names a stanza of Psalm 119 by its Hebrew letter, which may be two words where one letter carries two sounds. They are told apart by whether the remainder opens with a digit.");
  ("The two ends come back as words rather than numbers, because a half verse is written with a letter after the number and 24b is not a quantity. Nothing here counts verses; the ends are handed on to be spelled into an address and compared with other ends spelled the same way.");
  ("A stanza name is only read for Psalm 119, and any other chapter with a word where its verses should be is refused. Psalm 119 is the only chapter these songs cut into named stanzas, so a letter beside another number is a name this does not understand rather than a stanza of that chapter.");
  ("The chapter is not checked against the hundred and fifty the book has. The names on this disk run from 79 to 150 and a number outside the book has never appeared, so a bound would refuse nothing today while making a new refusal possible, and a refusal here is silent unless somebody is counting them.");
  ("★ A NAME THIS DOES NOT UNDERSTAND COMES BACK AS NOTHING, SO THE REFUSALS HAVE TO BE COUNTED SOMEWHERE ELSE. Everything that went wrong here went wrong by being passed over rather than by being read wrongly, and nothing in a reading can report its own silence. The folder holds songs under titles, a seven-second clip, and recordings of other songs entirely, all of which should be refused - so the list of what was refused is the thing worth looking at, and it belongs to whoever walks the folder.");
  let session_shape = new RegExp(
    "^(.*?)[ _](ardour_session|session)\\.(wav|mp3)$",
    "i",
  );
  let session_found = file_name.match(session_shape);
  let b = equal(session_found, null);
  let session_is = not(b);
  let name_plain = session_is
    ? session_found[1] + "." + session_found[3]
    : file_name;
  let shape = new RegExp(
    "^Psalms?[ _](\\d+)(?:[ _](\\d+[a-z]?[-_]\\d+[a-z]?|[A-Za-z]+(?:[ _][A-Za-z]+)*))?( \\((\\d+)\\))?\\.(wav|mp3)$",
    "i",
  );
  let found = name_plain.match(shape);
  if (equal(found, null)) {
    return null;
  }
  let chapter = Number(found[1]);
  let part = found[2];
  let take = found[4] ? Number(found[4]) : 0;
  let whole_is = equal(part, undefined);
  if (whole_is) {
    let whole = {
      chapter: chapter,
      verse_first: null,
      verse_last: null,
      take: take,
      session_is: session_is,
    };
    return whole;
  }
  let ends = new RegExp("^(\\d+[a-z]?)[-_](\\d+[a-z]?)$", "i");
  let spelled = part.match(ends);
  let b2 = equal(spelled, null);
  if (not(b2)) {
    let read = {
      chapter: chapter,
      verse_first: spelled[1],
      verse_last: spelled[2],
      take: take,
      session_is: session_is,
    };
    return read;
  }
  let acrostic = equal(chapter, 119);
  if (not(acrostic)) {
    return null;
  }
  let verses = psalms_119_stanza_verses_or_null(part);
  if (equal(verses, null)) {
    return null;
  }
  let named = {
    chapter: chapter,
    verse_first: String(verses.first),
    verse_last: String(verses.last),
    take: take,
    session_is: session_is,
  };
  return named;
}
