import { arguments_assert } from "./arguments_assert.mjs";
export function bible_usfm_versions_years() {
  arguments_assert(arguments, 0);
  ("The year the wording of each bible on the shelf was settled, and beside it one line saying what that year is the year of.");
  ("THESE YEARS ARE AUTHORED, NOT READ OFF THE FILES. Nothing a publisher packs with a usfm download says when its translation was made. The only date any of these packages carries is the day eBible last generated it, which for a wording finished in 1611 reads as this year, and an answer that confidently says the wrong thing is worse than no answer at all. So each year here was written down by hand: from the publisher's own licence page where that page states one, and from the translation's history where it does not.");
  ("A YEAR ALONE MISLEADS ON A THIRD OF THESE, WHICH IS WHY EACH CARRIES A SENTENCE. Four of them are the King James wording under four different editors, and their years read 1769, 1769, 1833 and 1873 - not one of them 1611. A reader given only the numbers would think they had four unrelated translations, and would be picking between them on a difference that is not there. The sentence says which wording the year belongs to and when that wording first appeared, which lets the number mean exactly one thing and nothing else: the year the edition standing on this shelf was finished.");
  ("For a translation still being worked on, the year is the edition its publisher dates rather than the year the work began, for the same reason - the second is a fact about a project and the first is a fact about the words a song would be built out of.");
  let years = {
    gnv: {
      year: 1599,
      said: "The Geneva Bible as printed in 1599, the Bible carried to America by the Pilgrims; the wording first appeared complete in 1560.",
    },
    kjv: {
      year: 1769,
      said: "The King James wording of 1611 as standardized by Benjamin Blayney at Oxford in 1769, which is the text nearly every King James Bible printed since has followed. With the Apocrypha.",
    },
    kjv2006: {
      year: 1769,
      said: "The same standardized 1769 King James text, the protocanon only, with Strong's numbers set against the words. Its short word is the year the electronic edition was made, not the year of the wording.",
    },
    webster: {
      year: 1833,
      said: "Noah Webster's revision of the King James wording, published in 1833, which replaced the words that had changed their meaning in the two centuries since 1611.",
    },
    kjvcpb: {
      year: 1873,
      said: "F. H. A. Scrivener's Cambridge Paragraph Bible of 1873: the King James wording re-edited against the early printings and set out in paragraphs rather than one verse to a line.",
    },
    dby: {
      year: 1890,
      said: "John Nelson Darby's translation, the New Testament in 1867 and the whole Bible in 1890, made to follow the Hebrew and Greek closely rather than to be read aloud.",
    },
    rv: {
      year: 1895,
      said: "The English Revised Version, the first revision of the King James made by a committee: New Testament in 1881, Old Testament in 1885, and the Apocrypha finished in 1895.",
    },
    ylt: {
      year: 1898,
      said: "Robert Young's literal translation, first published in 1862 and revised in 1898, which keeps the Hebrew tenses even where English will not carry them.",
    },
    dra: {
      year: 1899,
      said: "The Douay-Rheims American edition of 1899, translated from the Latin Vulgate rather than from Hebrew and Greek; its Old Testament first appeared in 1610.",
    },
    asv: {
      year: 1901,
      said: "The American Standard Version of 1901, the American committee's edition of the Revised Version, and the root most twentieth-century English translations grew from.",
    },
    bbe: {
      year: 1949,
      said: "The Bible in Basic English, the New Testament in 1941 and the whole Bible in 1949, written inside a vocabulary of about a thousand words.",
    },
    webu: {
      year: 2020,
      said: "The World English Bible, a revision of the American Standard Version of 1901 into modern English, brought to a complete Bible in 2020. This is its updated edition, which prints LORD where the older one printed Yahweh.",
    },
    ult: {
      year: 2020,
      said: "The unfoldingWord Literal Text, a revision of the American Standard Version of 1901 made to show translators the shape of the original wording.",
    },
    ust: {
      year: 2020,
      said: "The unfoldingWord Simplified Text, which says the same passages in plain clauses rather than word for word.",
    },
    asvbt: {
      year: 2021,
      said: "The American Standard Version of 1901 with its New Testament brought over to the Byzantine text, the changes released into the public domain by Adam Boyd in 2021.",
    },
    wmb: {
      year: 2022,
      said: "The World Messianic Bible, the World English Bible with the Hebrew names and Jewish idiom restored; its publisher dates this the August 2022 stable text.",
    },
    wmbb: {
      year: 2022,
      said: "The same World Messianic Bible in British spelling and punctuation, likewise the August 2022 stable text.",
    },
    bsb: {
      year: 2022,
      said: "The Berean Standard Bible, published in 2022 by the Berean Bible Translation Committee and placed in the public domain.",
    },
    msb: {
      year: 2025,
      said: "The Majority Standard Bible, published in 2025 by the same committee as the Berean, with its New Testament following the majority text, and likewise placed in the public domain.",
    },
  };
  return years;
}
