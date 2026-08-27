Subject: Eleven faults in published files — the first affects 131 versions

Found by a free Bible reading app that carries 399 of your translations. No reply needed.

**1. Verse ids do not match the numbers they print.** 131 versions, 2,690 markers, 1,362 chapters.

Whenever a marker's label is not a plain number, its id is one more than the previous marker's id instead of the number it prints. Only ranges and part-verses are affected — 1,522 ranges and 1,168 part-verses. The next plain number resets the count, so the invented ids land on real verses.

possible correction: take the id from the number the marker prints.

- part-verse — https://ebible.org/aaz/GEN02.htm prints `4b` as `id="V5"`. A link to Genesis 2:5 lands on half of verse 4.
- range — same page, `5-6` as `id="V6"`, so verse 5 has no address. Later in that chapter `19-20` gets `id="V19"`, which is right, so this is not a scheme for keeping ids unique.
- two markers, one id — https://ebible.org/grcbrent/JOS09.htm prints `2a 2b 2c 2d 2e 2f` as V3 to V8, then `3 4 5 6 7 8` as V3 to V8 again. 299 chapters.
- how far it drifts — https://ebible.org/kjn/MRK14.htm prints `3-9` as `V1`, `62-64` as `V8`, `65` as `V65`.
- your own footnote links — https://ebible.org/engerv/JOB24.htm has a back-link to `#V4` labelled `24:8`.

One for whoever writes the fix: 124 of the ranges put an invisible right-to-left mark before the hyphen, like `6‏-8` on https://ebible.org/pesopcb/GEN05.htm. A pattern matching only digit-hyphen-digit would miss those.

All 2,690, each with its page url and printed label: https://raw.githubusercontent.com/Jared-Grace/love/main/data/found/ebible_verse_marks_displaced_measure.json

Most affected: grcbrent 316, eng-Brenton 314, englxxup 288, pesopcb 118, msy2020 103, engasvbt 83, ind 66, beo 64, mya 61, engnna 56.

**2. Matthew 7:13 to 28:20 has numbers but no words.** bgg.

url: https://ebible.org/bgg/MAT07.htm

quote: `<span class="verse" id="V13">13&#160;</span> <span class="verse" id="V14">14&#160;</span>`

possible correction: the words. Chapters 1 to 6 are fine, as is every other book. The footnote at 7:12 opens a popup span and never closes it — `<a href="#FN2" class="notemark"><span class="popup"><span class="verse" id="V13">` — and the footnotes at the foot of those chapters are empty.

**3. Every chapter of Mark stops after two or three verses, read-aloud edition.** bsj.

url: https://ebible.org/Scriptures/bsj_readaloud.zip

quote: `bsj_071_MRK_01_read.txt` holds the book name, the chapter number, and verses 1 to 3. Then it ends.

possible correction: the rest of each chapter. The whole of Mark is 73 lines; MRK01.htm alone has 45 verses. Only Mark — Matthew runs 19 to 50 lines a chapter.

**4. 2 Chronicles 36 is two verses short, read-aloud edition.** uigara.

url: https://ebible.org/Scriptures/uigara_readaloud.zip

quote: `uigara_015_2CH_36_read.txt` ends at verse 21, '…زېمىن يەتمىش يىل توشقۇچە خارابىلىكتە تۇرۇپ «شابات تۇتۇپ» دەم ئېلىپ راھەتلەندى.'

possible correction: verses 22 and 23, Cyrus's decree. https://ebible.org/uigara/2CH36.htm has all 23.

**5. The copyright page is for a different Bible.** apyNT.

url: https://ebible.org/apyNT/copr.htm

quote: the page opens with the Apalaí title; the copyright block below names the Khmer Standard Version, the Bible Society in Cambodia, and Khmer terms.

possible correction: the Apalaí New Testament's own terms. Nothing on the page states terms for the Apalaí text, and we only carry translations whose terms we can read.

**6. Galatians 1 to 2:9 is in a different language from the rest, and verse 2:10 is lost at the seam.** sbs.

url: https://ebible.org/sbs/GAL02.htm

quote: verse 9 ends 'Pamene Jemusi, Kefasi, na Yohane, enze na mbili ngati sandamila, pebezindikila cisomo cenze pa neo etilola'. Verse 11 begins 'Lyahanu linu Kefasi henza kwa Antioke…'

possible correction: those chapters in Chikuahane. They read as Chichewa — 'Mulungu' and 'Yesu Kristu', where Galatians 3 to 6, Matthew, John and Romans say 'Ireeza' and 'Jesu Kereste'. Verse 9 stops mid-sentence and verse 10 goes with it: there is no `id="V10"`, and 'they asked us to remember the poor' is nowhere on the page.

**7. Luke 4:16 and 4:17 are missing.** plj.

url: https://ebible.org/plj/LUK04.htm

quote: verse 15 ends '…ar ni mbarǝm pita yari zo shirǝm den ti.' Then a blank line, then `<span class="verse" id="V18">18&#160;</span>&lt;&lt;Ruhu kǝ Babom Yam ra na demǝni`

possible correction: Jesus coming to Nazareth, standing to read, being handed the scroll. The Isaiah words begin at verse 18 with nothing to introduce them. The read-aloud file has the same hole, so the text is short, not the numbering.

**8. The Proverbs index links a chapter 30 that is not published, and the read-aloud edition has that chapter while the HTML does not.** englxxup.

url: https://ebible.org/englxxup/PRO.htm

quote: `href='PRO30.htm'`, and https://ebible.org/englxxup/PRO30.htm is not there.

possible correction: the file, carrying the note eng-Brenton uses — 'See chapter 24 for the content of chapter 30.' eng-Brenton, which englxxup revises, keeps PRO30.htm for exactly this.

Your two englxxup editions also disagree with each other. The read-aloud has a chapter 30 of 33 verses, and its chapter 31 starts at verse 1, 'My words have been spoken by God'. The HTML has no chapter 30, and PRO31.htm starts at verse 10, 'Who shall find a virtuous woman?'. eng-Brenton's two editions agree: its read-aloud chapter 30 is empty and its chapter 31 starts at verse 10, matching its HTML.

Not part of this item: Proverbs 31:1–9 appearing in chapter 24. We checked, and that is the Septuagint's own order — eng-Brenton files it identically.

**9. A heading reads 'A Psalms'.** engbsb, Psalm 3.

url: https://ebible.org/engbsb/PSA003.htm

quote: `<div class='d'>A Psalms of David, when he fled from his son Absalom. </div>`

possible correction: 'A Psalm of David', which is what the Berean Standard Bible itself reads. The book carries 116 headings; 54 of them read 'A Psalm' and this is the only one that reads 'A Psalms'. It is a superscription, above verse 1, so no verse number carries it.

Two pages and no others: PSA003.htm, and https://ebible.org/engbsb/PSA000.htm, the book index, which repeats the same words and links them to `PSA003.htm#V0`.

**10. A verse has words but no number, so a link to it lands nowhere.** 13 versions.

Here the read-aloud numbers the verse and the HTML does not:

url: https://ebible.org/eng-lxx2012/PSA118.htm and https://ebible.org/eng-uk-lxx2012/PSA118.htm

quote: `<span class="verse" id="V43">43&#160;</span>And take not the word of truth utterly out of my mouth; for I have hoped in your judgments. So shall I keep your law continually, for ever and ever.`

possible correction: a verse 44 marker before 'So shall I keep your law continually'. The numbers run 1 to 43, then 45 on; there is no `id="V44"`. The read-aloud totals 176. It is the only psalm in either edition where the numbers skip.

url: https://ebible.org/engtcent/3JN01.htm

quote: `<span class="verse" id="V14">14&#160;</span>I hope to see yoʋ soon, and we will speak face to face.  </div><div class='p'>Peace be with yoʋ.`

possible correction: a verse 15 marker before 'Peace be with yoʋ', an unnumbered paragraph. The read-aloud numbers it 15 and totals 15.

The same, skipped number in brackets:

- tczchongthu — GEN37 (3), GEN44 (26), EXO25 (21), EXO27 (7), EXO36 (19), EXO40 (27), NUM02 (13), DEU25 (4), 1SA26 (18), 2CH34 (11), ECC06 (5), ISA30 (18), JER19 (12), DAN04 (7), DAN08 (18 and 24), HOS11 (2), HOS12 (5), OBA01 (7), ZEC02 (12)
- tdx — MAT10 (33), MAT16 (6 and 7), MAT18 (4), 2SA13 (3), 1CH08 (38), PSA029 (2)
- uigara — GEN09 (10), PRO06 (5), MRK01 (44), LUK01 (42)
- kiz — 2TH02 (8, 9 and 10), GAL05 (13)
- amo — MRK07 (27), HEB11 (19)
- tsn — MRK15 (37), GAL04 (16)
- jni — JHN01 (6, 7 and 8), the three verses about the man sent from God
- jid — MRK16 (13); this edition has the long ending, so verse 13 belongs in it

Here the read-aloud is short in the same place, so both editions agree and the numbering is the source text's own. Listed only because the words are on the page with no number on them:

- bsj — MAT12 (30), MAT15 (26), JHN01 (21), JHN10 (35), JHN13 (9), 3JN01 (6), REV14 (9)
- uigara — PRO26 (19), EZK18 (11)
- dji — GEN25 (15)

bsj MAT12 verse 30 is the tail of verse 29; uigara PRO26 verse 19 is the second line of the couplet under 18, and EZK18 verse 11 the tail of verse 10; dji GEN25 the five names of verse 15 are the tail of verse 14.

Separately, https://ebible.org/bsj/JHN10.htm ends verse 34 with a bare `36` in the running text, no marker around it, and the words after it are verse 35 — a number both unmarked and one too high.

**11. Verses are missing, words and all.** bsj, jid, tczchongthu.

We read the verses either side; the words are not on the page, and every read-aloud file below is short in the same place.

url: https://ebible.org/bsj/MAT22.htm and https://ebible.org/bsj/2TH03.htm

quote: MAT22 runs verse 44 straight into `<span class="verse" id="V46">46&#160;</span>ni kange mani wo kar cine kange…`. 2TH03 runs verse 9 straight into `<span class="verse" id="V11">11&#160;</span>fiya nyo wari ka-nge kome…`.

possible correction: Matthew 22:45, 'If David then calls him Lord, how is he his son?', and 2 Thessalonians 3:10, 'if anyone will not work, let him not eat'.

url: https://ebible.org/jid/ACT10.htm

quote: verse 14 ends '…nda na kpanya ni shishi Irji na.' and the next marker is `<span class="verse" id="V16">16&#160;</span>Ama ilan ala kma tre niwu nkpuwu ha ngari…`

possible correction: Acts 10:15, 'What God has cleansed, do not call common'. The page proves it — verse 16 says the voice spoke a second time, and the first time is not there. 47 read-aloud lines for 48 verses.

url: https://ebible.org/jid/LUK10.htm

quote: verse 25 ends '…me tie ngye miti mi ni kpa re u tuntrun?' and the next marker is `<span class="verse" id="V27">27&#160;</span>Wa a kasa nda tre gbigbi…`

possible correction: Luke 10:26, 'What is written in the law? How do you read it?' Verse 27 begins 'and he answered', with nothing to answer. 41 lines for 42 verses.

url: https://ebible.org/tczchongthu/EXO15.htm

quote: verse 15 ends '…Canaaan gam'a cheng jouse jong alung thoi gamta uve.' and the next marker is `<span class="verse" id="V17">17&#160;</span>“Nangman namite nahin puilut ding…`

possible correction: Exodus 15:16, 'terror and dread fall on them… till your people pass by'. 26 lines for 27 verses.

---

Method, so you can see what was excluded rather than missed. Every chapter's verse numbers were laid against the same chapter in the other 398 versions.

Excluded: anything eight or more versions agreed on — which turned out to be exactly the sixteen verses the critical texts omit, Matthew 17:21, Mark 9:44, Acts 8:37 and the rest.

Excluded: versions that publish a selection, since a gap inside Genesis 4 is the same editorial choice as having no Genesis 5 at all. Seven skip 38 to 477 chapters each and held about six thousand of the gaps found.

Excluded: the five Septuagint editions, and anywhere else the numbering follows a deliberate scheme — the Greek's own arrangement, a relocated Addition keeping its original number.
