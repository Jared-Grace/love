import { arguments_assert } from "./arguments_assert.mjs";
export function bible_usfm_versions_apart_allowed() {
  arguments_assert(arguments, 0);
  ("How often each bible on the shelf is allowed to stand apart from the rest of the shelf, and beside each number the reason somebody read the verses and decided that standing apart there was not a fault.");
  ("EVERY NUMBER HERE WAS MEASURED AND THEN LOOKED AT, WHICH IS THE ONLY THING THAT MAKES IT AN ALLOWANCE RATHER THAN A SHRUG. A count written down straight off a run says nothing except that the run happened, and a check resting on it passes because it was told to. Each of these six was opened at the verse the sweep first named, laid beside another bible at the same verse, and found to be the same passage; what stands here is the reading of those verses.");
  ("FIVE OF THE SIX ARE THE COUNTING BEING STRICT, NOT THE BIBLE BEING WRONG. Words are compared with their endings left on, deliberately and for a reason argued out where the folding lives: folding endings raises every score, so a check asked that way could go green while seeing nothing. The cost of that strictness is paid here - a bible saying Hebronite where the rest say Hebronites shares no word with any of them, and neither does one saying swords where the rest say sword.");
  ("THE SIXTH IS THE REAL FAULT AND IT IS HELD BACK FROM READERS ALREADY. It is not cleared by standing here. Its number is written down so that the check can see it getting worse, and so that a reader of this list is told which of these six is the one the whole sweep exists for.");
  ("THE NUMBER IS A CEILING AND MAY ONLY EVER BE LOWERED. A bible does not change once it is on the disk, so a count that rises means either a repackaged download or a change in how words are counted, and both of those want reading before they are accepted. A count that falls is a better counter and needs nobody.");
  ("A BIBLE STANDING APART WITH NO LINE HERE IS THE FAILURE THIS IS FOR. That is a bible nobody has read at the verses where it differs, and the whole fault being guarded against is one that hands over real words in good English about the wrong passage - so being unread is exactly the state in which it would be quoted.");
  let allowed = {
    dra: {
      apart: 1019,
      why: "it numbers the psalms the way the Vulgate does, one behind the Hebrew numbering for most of the book, so it really is handing over a different passage than the one it was asked for - this is the fault the sweep exists to find, it is why this bible is held back from readers, and its count is thirty three in every thousand verses against fourteen for the next bible down",
    },
    ust: {
      apart: 326,
      why: "it restates each verse for a reader with little English rather than translating it word for word, so at Genesis ten verse twenty it says Ham's descendants and each one had his own family where the rest say the sons of Ham after their families - the same verse, sharing no word only because the endings are left on and Hams is not Ham",
    },
    gnv: {
      apart: 96,
      why: "it is the English of 1599 and spells the names of peoples its own way, so at Genesis ten verse sixteen it says Hiui and Arki and Sini where the rest say Hivite and Arkite and Sinite - the same verse, in a spelling four hundred years older than the others",
    },
    bbe: {
      apart: 47,
      why: "it is written in a deliberately small vocabulary, so at Leviticus twenty six verse seven it says put to flight those who are against you where the rest say chase your enemies - the same verse, and its one near match, swords against sword, is lost because the endings are left on",
    },
    ylt: {
      apart: 4,
      why: "it writes the names of families in the singular where the rest write them in the plural, so at First Chronicles twenty six verse twenty three it says for the Amramite for the Izharite where the rest say the Amramites and the Izharites - the same verse, differing by one letter on every word in it",
    },
    dby: {
      apart: 0,
      why: "at Acts fourteen verse seven it says announcing the glad tidings where the rest say preached the gospel - the same verse, five words long, and the two ways of saying it happen to share no word at all",
    },
  };
  return allowed;
}
