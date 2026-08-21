# Letter to eBible.org — draft, not sent

Every item was checked against the downloaded files before writing. Re-check before
sending if the downloads have been refreshed since — a corrected file would make the
letter wrong.

**Each item is mentioned once, ever.** `data/given/ebible_letter_accounted.json`
says what has already been said to eBible and what was looked at and judged not a
fault; `ebible_letter_unaccounted_names` answers which disagreeing chapters neither
covers, and that answer is what a next letter is for. On sending: copy this file to
`notes/letters/sent/2026-08-21.md` and change every `in the unsent draft letter` in
that record to `sent 2026-08-21`.

---

Subject: Twenty-two faults in published files, one of them serious

Hello,

Thank you for eBible.org — I run a free Bible reading app that takes almost all of
its translations from you. While checking every translation we carry, these came up.
No reply needed.

**1.**

url: https://ebible.org/bgg/MAT07.htm

quote(s): '<span class="verse" id="V13">13&#160;</span> <span class="verse" id="V14">14&#160;</span>'

possible correction: Matthew has words through 7:12, then verse numbers with no text
after them — the rest of chapter 7 and all of chapters 8–28. Chapters 1–6 and every
other book in bgg are complete. Possible clue: the last thing before the text stops
is a footnote at 7:12 whose popup span is opened and never closed —
'<a href="#FN2" class="notemark"><span class="popup"> <span class="verse" id="V13">'
— and the footnotes at the foot of those chapters are empty, '<span class="ft"></span>'.

**2.**

url: https://ebible.org/Scriptures/bsj_readaloud.zip

quote(s): 'bsj_071_MRK_01_read.txt' holds the book name, the chapter number, and
verses 1 to 3, then ends.

possible correction: every chapter of Mark in the read-aloud edition stops after two
or three verses — 73 lines for the whole book, where the HTML MRK01.htm has all 45
verses. Mark is the only book affected; Matthew runs 19–50 lines a chapter and
Revelation 22–31.

**3.**

url: https://ebible.org/Scriptures/uigara_readaloud.zip

quote(s): 'uigara_015_2CH_36_read.txt' ends at verse 21, '…زېمىن يەتمىش يىل توشقۇچە
خارابىلىكتە تۇرۇپ «شابات تۇتۇپ» دەم ئېلىپ راھەتلەندى.'

possible correction: the read-aloud edition of 2 Chronicles 36 is two verses short —
verses 22 and 23, Cyrus's decree, are not in it. The page at
https://ebible.org/uigara/2CH36.htm carries all 23.

**4.**

url: https://ebible.org/apyNT/copr.htm

quote(s): the page opens with the Apalaí title, and the copyright block below it
names the Khmer Standard Version, the Bible Society in Cambodia, and Khmer quotation
terms.

possible correction: the Apalaí New Testament's own terms. Nothing on the page states
terms for the Apalaí text, so we cannot tell what it is offered on, and we carry only
translations whose terms we can read.

**5–8. A verse marker absent where the words are present.** In each, the words of the
missing verse sit inside the previous verse's block, and the read-aloud edition of the
same chapter numbers them correctly — so the two published editions disagree and the
HTML one is a verse short.

**5.**

url: https://ebible.org/eng-lxx2012/PSA118.htm and https://ebible.org/eng-uk-lxx2012/PSA118.htm

quote(s): '<span class="verse" id="V43">43&#160;</span>And take not the word of truth
utterly out of my mouth; for I have hoped in your judgments. So shall I keep your law
continually, for ever and ever.'

possible correction: a verse 44 marker before 'So shall I keep your law continually'.
Markers run 1–43 then 45 onward — there is no id="V44". The read-aloud totals 176,
matching the psalm. Both editions affected, identically apart from
'judgments'/'judgements'. It is the only psalm in either where the markers skip.

**6.**

url: https://ebible.org/engtcent/3JN01.htm

quote(s): '<span class="verse" id="V14">14&#160;</span>I hope to see yoʋ soon, and we
will speak face to face.  </div><div class='p'>Peace be with yoʋ. The friends greet
yoʋ. Greet the friends by name.'

possible correction: a verse 15 marker before 'Peace be with yoʋ'. That sentence is an
unnumbered paragraph on the page; the read-aloud numbers it 15 and totals 15.

**7.**

url: https://ebible.org/tczchongthu/GEN44.htm

quote(s): '<span class="verse" id="V25">25&#160;</span>Hichun ka paovin eidonbut un,
'Keima ho kache thei lou dingu ahi na chapa alhum pen pa ache lou dingle kasopiu
alhumpen Benjamin ajao lou le ei kimu pi lou dingu ahi.   <span class="verse" id="V27">'

possible correction: a verse 26 marker. Markers run 25 then 27 — there is no id="V26".

**8.**

url: https://ebible.org/tczchongthu/EXO40.htm

quote(s): '<span class="verse" id="V26">26&#160;</span>Aman ponbuh sung lam'a chun sana
gimnamtui chu aluoi doh'in hichu pondal maiya muntheng chungnung chu ahi. Achung'a chun
sana gimnamtui chu ahal'in ahi. Ajeh chu Pakaiyin athupeh bang'a abol ahi.   <span
class="verse" id="V28">'

possible correction: a verse 27 marker. Markers run 26 then 28 — there is no id="V27".

Eighteen more chapters of tczchongthu skip a marker the same way: GEN37 (3), EXO25
(21), EXO27 (7), EXO36 (19), NUM02 (13), DEU25 (4), 1SA26 (18), 2CH34 (11), ECC06 (5),
ISA30 (18), JER19 (12), DAN04 (7), DAN08 (18 and 24), HOS11 (2), HOS12 (5), OBA01 (7),
ZEC02 (12). In each the words appear to be present and only the marker is absent.

**9.**

url: https://ebible.org/englxxup/PRO31.htm and https://ebible.org/englxxup/PRO24.htm

quote(s): PRO31.htm begins '<span class="verse" id="V10">10&#160;</span>Who shall find
a virtuous woman?' — there is no verse 1–9. PRO24.htm carries them at 54–62, '<span
class="verse" id="V54">54&#160;</span>My words have been spoken by God—'. The read-aloud
englxxup_021_PRO_31_read.txt instead opens 'My words have been spoken by God—the
oracular answer of a king, whom his mother instructed.' and runs 31 verses.

possible correction: the two published editions put Proverbs 31:1–9 in different
chapters. eng-Brenton handles the same LXX ordering with a note on the page — 'See
chapter 24 for the content of chapter 30.' — englxxup has no such note, and no
PRO30.htm at all.

**10.**

url: https://ebible.org/engbsb/PSA003.htm

quote(s): '<div class='d'>A Psalms of David, when he fled from his son Absalom. </div>'

possible correction: 'A Psalm of David'. Forty-nine headings in the book begin 'A
Psalm' and this one begins 'A Psalms'. Same on PSA000.htm, so the two pages agree with
each other and differ only from the rest of the book. I cannot tell from here whether
it came from the source text or the publishing, so we carry it as published.

**11.**

url: https://ebible.org/engerv/JOB24.htm

quote(s): '<span class="verse" id="V4">3b&#160;</span>' and, four lines later, '<span class="verse" id="V4">4&#160;</span>'

possible correction: id="V9" on the first of the two. The chapter carries id="V4"
twice and carries no id="V9" at all, so a link to Job 24:9 lands nowhere and a link to
24:4 lands on the wrong verse. The verse itself is present and correct — it is the one
the page's own note explains, 'In the Hebrew text this verse follows verse 8'.

**12.**

url: https://ebible.org/engkjvcpb/ESG10.htm

quote(s): verse numbers run '4' … '13' and then '1': '<span class="verse" id="V1">1&#160;</span>In the fourth year of the reign of Ptolemeus and Cleopatra'

possible correction: number the colophon 14, or give it its own chapter. Beginning
the chapter at 4 is right, and the Additions are placed back in chapters 1, 3, 4, 5, 8
and 10 rather than kept at 11–16, which is a fair choice — but the colophon kept the
number it had at 11:1, so it now prints after verse 13 as verse 1.

The rest came from a second, wider check: every chapter's own verse markers, laid
against each other across all 399 translations we carry. A number missing from one
translation and from five others is that tradition's numbering and we have left it
alone; a number missing from one translation alone is below. **Item 13 is the most
serious thing in this letter.**

**13.**

url: https://ebible.org/mwf2018/MAT27.htm

quote(s): the whole file is 6,803 bytes and runs '<span class="verse" id="V10">10&#160;</span>… Nhini-wa murrinh-yu ngarra Yile neki kathu mamna ngarra nukunu Jeremiah da murntak warra, i murrinh nhini-ka murrinh da thathpirr nhini-yu.” </div>' straight into '<div class='s'>Ku Soldier Pirangkadhaneme Pe Da Weyi Palyirr </div> <div class='p'> <span class="verse" id="V62">62&#160;</span>'

possible correction: Matthew 27:11–61 is absent — not the markers, the words. The
chapter goes from Judas's death to the guard at the tomb, so the trial before Pilate,
the crucifixion and the death are all missing. Other chapters of mwf2018 look complete.

**14.**

url: https://ebible.org/kjn/MRK14.htm

quote(s): '<span class="verse" id="V1">3-9&#160;</span>' … '<span class="verse" id="V8">62-64&#160;</span>' … '<span class="verse" id="V65">65&#160;</span>'

possible correction: ids matching the printed numbers — id="V3" for the block printed
3-9, and so on. This is a selection edition and printing ranges is right, but the ids
count the blocks (V1…V8) instead of naming the verses, and then the last one switches
to the real number (V65). So a link to Mark 14:3 lands nowhere and #V1 reaches it.

**15.**

url: https://ebible.org/nay/GEN03.htm

quote(s): markers run '<span class="verse" id="V14">14&#160;</span>' then '<span class="verse" id="V16">16&#160;</span>'

possible correction: a verse 15 marker. Verse 14's block appears to carry verse 15's
words as well — it ends with the two parallel clauses about the head and the heel.
nay JHN19 skips 24 the same way.

**16.**

url: https://ebible.org/jni/JHN01.htm

quote(s): markers run '<span class="verse" id="V5">5&#160;</span>' then '<span class="verse" id="V9">9&#160;</span>'

possible correction: markers for verses 6, 7 and 8 — the sentences about the man sent
from God.

**17.**

url: https://ebible.org/kiz/2TH02.htm

quote(s): markers run '<span class="verse" id="V7">7&#160;</span>' then '<span class="verse" id="V11">11&#160;</span>'

possible correction: markers for verses 8, 9 and 10. kiz GAL05 skips 13 the same way.

**18.**

url: https://ebible.org/amo/MRK07.htm

quote(s): markers run '<span class="verse" id="V26">26&#160;</span>' then '<span class="verse" id="V28">28&#160;</span>'

possible correction: a verse 27 marker. amo HEB11 skips 19 the same way.

**19.**

url: https://ebible.org/jid/MRK16.htm

quote(s): markers run '<span class="verse" id="V12">12&#160;</span>' then '<span class="verse" id="V14">14&#160;</span>'

possible correction: a verse 13 marker. The chapter carries the long ending, so verse
13 belongs in it.

**20.**

url: https://ebible.org/tsn/MRK15.htm

quote(s): markers run '<span class="verse" id="V36">36&#160;</span>' then '<span class="verse" id="V38">38&#160;</span>'

possible correction: a verse 37 marker. tsn GAL04 skips 16 the same way.

**21.**

url: https://ebible.org/tdx/MAT16.htm

quote(s): markers run '<span class="verse" id="V5">5&#160;</span>' then '<span class="verse" id="V8">8&#160;</span>'

possible correction: markers for verses 6 and 7. tdx skips one marker the same way in
2SA13 (3), 1CH08 (38), PSA029 (2), MAT10 (33) and MAT18 (4).

**22.**

url: https://ebible.org/uigara/MRK01.htm

quote(s): markers run '<span class="verse" id="V43">43&#160;</span>' then '<span class="verse" id="V45">45&#160;</span>'

possible correction: a verse 44 marker. uigara skips one the same way in GEN09 (10),
PRO06 (5) and LUK01 (42) — separate from the read-aloud loss in item 3.

We pass affected chapters over rather than show a chapter we cannot read, and pick
them up whenever a corrected download appears — so at present neither Brenton edition
shows Psalm 119 at all.

Thank you again for the work.
