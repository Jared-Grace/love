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

The record is keyed by chapter, not by item number, so the items here can be reordered
or merged freely without touching it.

---

Subject: Nine problems in published files — one of them affects 131 translations

Hello,

Thank you for eBible.org. I run a free Bible reading app. Almost all of its
translations come from you. I checked every one we carry. Here is what came up,
biggest first. No reply needed.

**1. Verse ids do not match the numbers they print. 131 translations.**

url: https://ebible.org/aaz/GEN02.htm

quote(s): '<span class="verse" id="V5">4b&#160;</span>' and, two markers later,
'<span class="verse" id="V6">5-6&#160;</span>'

possible correction: take the id from the number the marker prints.

Right now a marker gets the id one higher than the marker before it, whenever its
label is not a plain number. A part-verse like '4b' is not a plain number. Nor is a
range like '5-6'. The next plain number puts the count back in step. So the made-up
ids land on real verses further down.

In the quote above, '4b' is given id V5. A link to Genesis 2:5 lands on the second
half of verse 4. Then '5-6' is given id V6, so verse 5 has no address at all. Later
in that same chapter '19-20' is given id V19, which is right. So this is not a scheme
for keeping ids unique. It is right in one place and wrong in another, in one chapter.

Your own footnote links pick it up too. On https://ebible.org/engerv/JOB24.htm a
footnote back-link points at '#V4' and is labelled '24:8'.

We counted 2,690 markers like this, in 1,362 chapters, in 131 translations. The
largest: grcbrent (316), eng-Brenton (314), englxxup (288), pesopcb (118), msy2020
(103), engasvbt (83), ind (66), beo (64), mya (61), engnna (56).

Two label shapes cause all of it: 1,384 ranges and 1,168 part-verses. No plain-numbered
marker is ever affected.

Sometimes two markers end up with the same id. Then a link to one lands on the other,
and the other has no address. That happens in 299 chapters. Sometimes a number is
skipped instead, and a link to it lands nowhere. Most of the time it is neither, and
the link just goes quietly to the wrong verse.

Two clear cases. https://ebible.org/grcbrent/JOS09.htm prints 2a 2b 2c 2d 2e 2f under
ids V3 to V8, then prints 3 4 5 6 7 8 under ids V3 to V8 again.
https://ebible.org/kjn/MRK14.htm prints '3-9' under id V1, then '62-64' under id V8,
then '65' under id V65.

**2. Most of Matthew has numbers but no words.**

url: https://ebible.org/bgg/MAT07.htm

quote(s): '<span class="verse" id="V13">13&#160;</span> <span class="verse" id="V14">14&#160;</span>'

possible correction: the words. Matthew has text up to 7:12. After that there are
verse numbers with nothing after them, to the end of chapter 28. Chapters 1 to 6 are
fine, and so is every other book in bgg.

A possible clue. The last thing before the text stops is a footnote at 7:12. Its popup
span is opened and never closed: '<a href="#FN2" class="notemark"><span class="popup">
<span class="verse" id="V13">'. And the footnotes at the foot of those chapters are
empty: '<span class="ft"></span>'.

**3. Every chapter of Mark stops after two or three verses, in the read-aloud edition.**

url: https://ebible.org/Scriptures/bsj_readaloud.zip

quote(s): 'bsj_071_MRK_01_read.txt' holds the book name, the chapter number, and
verses 1 to 3. Then it ends.

possible correction: the rest of each chapter. The whole of Mark is 73 lines, while
MRK01.htm alone has all 45 verses. Mark is the only book affected. Matthew runs 19 to
50 lines a chapter, and Revelation 22 to 31.

**4. Two verses missing from a read-aloud chapter.**

url: https://ebible.org/Scriptures/uigara_readaloud.zip

quote(s): 'uigara_015_2CH_36_read.txt' ends at verse 21, '…زېمىن يەتمىش يىل توشقۇچە
خارابىلىكتە تۇرۇپ «شابات تۇتۇپ» دەم ئېلىپ راھەتلەندى.'

possible correction: verses 22 and 23, Cyrus's decree. The page at
https://ebible.org/uigara/2CH36.htm has all 23.

**5. The copyright page is for a different Bible.**

url: https://ebible.org/apyNT/copr.htm

quote(s): the page opens with the Apalaí title. The copyright block below it names the
Khmer Standard Version, the Bible Society in Cambodia, and Khmer terms.

possible correction: the Apalaí New Testament's own terms. Nothing on the page states
terms for the Apalaí text, so we cannot tell what it is offered on. We only carry
translations whose terms we can read.

**6. Proverbs 31:1–9 is in a different chapter in the two editions.**

url: https://ebible.org/englxxup/PRO31.htm and https://ebible.org/englxxup/PRO24.htm

quote(s): PRO31.htm opens '<span class="verse" id="V10">10&#160;</span>Who shall find a
virtuous woman?' — there is no verse 1 to 9. PRO24.htm carries them at 54 to 62,
'<span class="verse" id="V54">54&#160;</span>My words have been spoken by God—'. But the
read-aloud file englxxup_021_PRO_31_read.txt opens 'My words have been spoken by God—the
oracular answer of a king, whom his mother instructed.' and runs 31 verses.

possible correction: a note on the page, as eng-Brenton has for the same ordering —
'See chapter 24 for the content of chapter 30.' englxxup has no such note, and no
PRO30.htm at all.

**7. A colophon is numbered verse 1, after verse 13.**

url: https://ebible.org/engkjvcpb/ESG10.htm

quote(s): the numbers run '4' … '13' and then '1':
'<span class="verse" id="V1">1&#160;</span>In the fourth year of the reign of Ptolemeus
and Cleopatra'

possible correction: number it 14, or give it its own chapter. Starting the chapter at
4 is right. Putting the Additions back into chapters 1, 3, 4, 5, 8 and 10 is a fair
choice. But the colophon kept the number it had at 11:1, so it now prints as verse 1.

**8. A heading reads 'A Psalms'.**

url: https://ebible.org/engbsb/PSA003.htm

quote(s): '<div class='d'>A Psalms of David, when he fled from his son Absalom. </div>'

possible correction: 'A Psalm of David'. Forty-nine headings in the book begin 'A
Psalm'. This one begins 'A Psalms'. PSA000.htm says the same, so the two pages agree
with each other and differ only from the rest of the book. I cannot tell from here
whether it came from the source text or from the publishing, so we carry it as
published.

**9. A verse marker is missing. The words are there.**

In each of these, the numbers skip one, and the missing verse's words sit inside the
block before it. Where there is a read-aloud edition, it numbers them correctly. So the
two published editions disagree, and the HTML one is a verse short.

url: https://ebible.org/eng-lxx2012/PSA118.htm and https://ebible.org/eng-uk-lxx2012/PSA118.htm

quote(s): '<span class="verse" id="V43">43&#160;</span>And take not the word of truth
utterly out of my mouth; for I have hoped in your judgments. So shall I keep your law
continually, for ever and ever.'

possible correction: a verse 44 marker before 'So shall I keep your law continually'.
The numbers run 1 to 43, then 45 on. There is no id="V44". The read-aloud totals 176,
which matches the psalm. Both editions have it, differing only in
'judgments'/'judgements'. It is the only psalm in either where the numbers skip.

url: https://ebible.org/engtcent/3JN01.htm

quote(s): '<span class="verse" id="V14">14&#160;</span>I hope to see yoʋ soon, and we
will speak face to face.  </div><div class='p'>Peace be with yoʋ. The friends greet
yoʋ. Greet the friends by name.'

possible correction: a verse 15 marker before 'Peace be with yoʋ'. That sentence is an
unnumbered paragraph on the page. The read-aloud numbers it 15 and totals 15.

The same thing, in these chapters, with the skipped number in brackets:

- tczchongthu — GEN37 (3), GEN44 (26), EXO25 (21), EXO27 (7), EXO36 (19), EXO40 (27),
  NUM02 (13), DEU25 (4), 1SA26 (18), 2CH34 (11), ECC06 (5), ISA30 (18), JER19 (12),
  DAN04 (7), DAN08 (18 and 24), HOS11 (2), HOS12 (5), OBA01 (7), ZEC02 (12)
- tdx — MAT16 (6 and 7), 2SA13 (3), 1CH08 (38), PSA029 (2), MAT10 (33), MAT18 (4)
- uigara — MRK01 (44), GEN09 (10), PRO06 (5), LUK01 (42)
- kiz — 2TH02 (8, 9 and 10), GAL05 (13)
- amo — MRK07 (27), HEB11 (19)
- tsn — MRK15 (37), GAL04 (16)
- jni — JHN01 (6, 7 and 8)
- jid — MRK16 (13)

Two of those are worth a word. jni JHN01 is missing the three verses about the man
sent from God. jid MRK16 has the long ending, so verse 13 belongs in it.

One note on how we found these. We laid every chapter's verse numbers against the same
chapter in the other 398 translations we carry. A number missing from six translations
at once is that tradition's numbering, and we left those alone. The ones above are
missing from one translation on its own.

Where we cannot read a chapter, we pass it over rather than show it, and pick it up
whenever a corrected download appears. At present neither Brenton edition shows Psalm
119 at all.

Thank you again for the work.
