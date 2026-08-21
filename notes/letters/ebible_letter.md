# Letter to eBible.org — draft, not sent

Every item below was checked against the downloaded files before writing. Re-check
before sending if the downloads have been refreshed since — a corrected file would
make the letter wrong.

**Each item is mentioned once, ever.** When this letter is sent, copy it into
`notes/letters/sent/<date>.md` and add its item keys to
`data/given/ebible_letter_reported.json`, so a later letter cannot repeat one.
Item keys are in `<!-- key: … -->` comments, which do not render.

---

Subject: Seven small faults in published files

Hello,

Thank you for eBible.org — I run a free Bible reading app that takes almost all of
its translations from you. While checking every translation we carry, these came
up. No reply needed.

<!-- key: bgg MAT -->
url: https://ebible.org/bgg/MAT07.htm

quote(s): '<span class="verse" id="V13">13&#160;</span> <span class="verse" id="V14">14&#160;</span>'

possible correction: 'Matthew has words through 7:12, then verse numbers with no
text after them — the rest of chapter 7 and all of chapters 8–28. Chapters 1–6 and
every other book in bgg are fine. Possible clue: the last thing before the text
stops is a footnote at 7:12 whose popup span is opened and never closed
(`<a href="#FN2" class="notemark"><span class="popup"> <span class="verse" id="V13">`),
and the footnotes at the foot of those chapters are empty — `<span class="ft"></span>`.'

<!-- key: bsj MRK readaloud -->
url: https://ebible.org/Scriptures/bsj_readaloud.zip

quote(s): 'bsj_071_MRK_01_read.txt holds the book name, the chapter number, and
verses 1 to 3, then ends.'

possible correction: 'Every chapter of Mark in the read-aloud edition stops after
two or three verses — 73 lines for the whole book. The HTML MRK01.htm has all 45
verses. Mark is the only book affected; Matthew runs 19–50 lines a chapter and
Revelation 22–31.'

<!-- key: apyNT copr -->
url: https://ebible.org/apyNT/copr.htm

quote(s): 'the page opens with the Apalaí title, and the copyright block below it
names the Khmer Standard Version, the Bible Society in Cambodia, and Khmer
quotation terms.'

possible correction: 'the Apalaí New Testament's own terms. Nothing on the page
states terms for the Apalaí text, so we cannot tell what it is offered on and carry
only translations whose terms we can read.'

<!-- key: eng-lxx2012 PSA118 -->
<!-- key: eng-uk-lxx2012 PSA118 -->
url: https://ebible.org/eng-lxx2012/PSA118.htm and https://ebible.org/eng-uk-lxx2012/PSA118.htm

quote(s): '<span class="verse" id="V43">43&#160;</span>And take not the word of
truth utterly out of my mouth; for I have hoped in your judgments. So shall I keep
your law continually, for ever and ever.'

possible correction: 'a verse 44 marker before "So shall I keep your law
continually". The markers run 1–43 then 45 onward — there is no id="V44". The words
are all present; the read-aloud edition of the same psalm gives them as two lines
and totals 176, matching the psalm. Both editions affected, identically apart from
"judgments"/"judgements". It is the only psalm in either where the markers skip.'

<!-- key: engtcent 3JN01 -->
url: https://ebible.org/engtcent/3JN01.htm

quote(s): '<span class="verse" id="V14">14&#160;</span>I hope to see yoʋ soon, and
we will speak face to face.  </div><div class=\'p\'>Peace be with yoʋ. The friends
greet yoʋ. Greet the friends by name.'

possible correction: 'a verse 15 marker before "Peace be with yoʋ". That sentence
is an unnumbered paragraph on the page; the read-aloud edition numbers it as verse
15 and totals 15. Same shape as the Psalm 118 item above.'

<!-- key: englxxup PRO31 -->
url: https://ebible.org/englxxup/PRO31.htm and https://ebible.org/englxxup/PRO24.htm

quote(s): 'PRO31.htm starts at "<span class="verse" id="V10">10&#160;</span>Who
shall find a virtuous woman?" — there is no verse 1–9. PRO24.htm carries them at
54–62: "<span class="verse" id="V54">54&#160;</span>My words have been spoken by
God—". The read-aloud englxxup_021_PRO_31_read.txt opens instead with "My words
have been spoken by God—the oracular answer of a king, whom his mother instructed."
and runs 31 verses.'

possible correction: 'the two published editions of the same translation put
Proverbs 31:1–9 in different chapters. eng-Brenton handles the same LXX ordering
with a note on the page — "See chapter 24 for the content of chapter 30." —
englxxup has no such note, and no PRO30.htm at all.'

<!-- key: engbsb PSA003 -->
url: https://ebible.org/engbsb/PSA003.htm

quote(s): '<div class=\'d\'>A Psalms of David, when he fled from his son Absalom. </div>'

possible correction: 'A Psalm of David'. Forty-nine headings in the book begin "A
Psalm" and this one begins "A Psalms". Same on PSA000.htm, so the two pages agree
with each other and differ only from the rest of the book. I cannot tell from here
whether it came from the source text or the publishing.'

We pass affected chapters over rather than show a chapter we cannot read, and pick
them up whenever a corrected download appears — so at present neither Brenton
edition shows Psalm 119 at all. The Psalm 3 heading we carry as published, since a
translation is not ours to correct.

Thank you again for the work.
