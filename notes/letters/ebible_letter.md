# Letter to eBible.org — draft, not sent

Every item was checked against the downloaded files. Re-check before sending if the downloads have been refreshed since.

**Each item is mentioned once, ever.** `data/given/ebible_letter_accounted.json` says what has been said and what was judged no fault. `ebible_letter_unaccounted_names` and `ebible_verse_marks_gaps_unexplained` answer what neither covers; both are empty as of 2026-08-22, so this letter is the whole of what is outstanding. On sending: copy this file to `notes/letters/sent/<date>.md`, change every `in the unsent draft letter` in that record to `sent <date>`, and re-run `ebible_verse_marks_displaced_letter_write` so the linked JSON matches what was sent.

The record is keyed by chapter, not by item number, so items here can be reordered freely.

**One line per paragraph, on purpose.** This is pasted into an email, and a hard-wrapped paragraph breaks in the wrong place at every window width. Do not re-wrap it.

---

Subject: Twelve problems in published files — one affects 131 translations

Hello,

Thank you for eBible.org. I run a free Bible reading app. Almost all of its translations come from you. I checked every one we carry. Biggest first. No reply needed.

**1. Verse ids do not match the numbers they print. 131 translations, 2,690 marks, 1,362 chapters.**

A marker gets the id one higher than the marker before it whenever its label is not a plain number. Ranges and part-verses are the only labels affected — 1,384 and 1,168 of them. The next plain number puts the count back in step, so the invented ids land on real verses.

possible correction: take the id from the number the marker prints.

One of each shape:

- **part-verse.** https://ebible.org/aaz/GEN02.htm prints `4b` with `id="V5"`. A link to Genesis 2:5 lands on the second half of verse 4.
- **range.** The same page prints `5-6` with `id="V6"`, so verse 5 has no address at all. Later in that chapter `19-20` gets `id="V19"`, which is right — so this is not a scheme for keeping ids unique.
- **two markers, one id.** https://ebible.org/grcbrent/JOS09.htm prints `2a 2b 2c 2d 2e 2f` under ids V3 to V8, then `3 4 5 6 7 8` under V3 to V8 again. 299 chapters do this.
- **how far it drifts.** https://ebible.org/kjn/MRK14.htm prints `3-9` under `V1`, `62-64` under `V8`, and `65` under `V65`.
- **your own footnote links.** On https://ebible.org/engerv/JOB24.htm a footnote back-link points at `#V4` and is labelled `24:8`.

All 2,690, each with its page url and printed label: https://raw.githubusercontent.com/Jared-Grace/love/main/data/found/ebible_verse_marks_displaced_measure.json

Largest: grcbrent (316), eng-Brenton (314), englxxup (288), pesopcb (118), msy2020 (103), engasvbt (83), ind (66), beo (64), mya (61), engnna (56).

**2. Most of Matthew has numbers but no words.**

url: https://ebible.org/bgg/MAT07.htm

quote(s): `<span class="verse" id="V13">13&#160;</span> <span class="verse" id="V14">14&#160;</span>`

possible correction: the words. Matthew has text to 7:12, then numbers with nothing after them to the end of chapter 28. Chapters 1 to 6 are fine, and so is every other book in bgg. A clue: the last thing before the text stops is a footnote at 7:12 whose popup span is opened and never closed — `<a href="#FN2" class="notemark"><span class="popup"><span class="verse" id="V13">`. The footnotes at the foot of those chapters are empty.

**3. Every chapter of Mark stops after two or three verses, in the read-aloud edition.**

url: https://ebible.org/Scriptures/bsj_readaloud.zip

quote(s): `bsj_071_MRK_01_read.txt` holds the book name, the chapter number, and verses 1 to 3. Then it ends.

possible correction: the rest of each chapter. The whole of Mark is 73 lines; MRK01.htm alone has all 45 verses. Mark is the only book affected — Matthew runs 19 to 50 lines a chapter.

**4. Two verses missing from a read-aloud chapter.**

url: https://ebible.org/Scriptures/uigara_readaloud.zip

quote(s): `uigara_015_2CH_36_read.txt` ends at verse 21, '…زېمىن يەتمىش يىل توشقۇچە خارابىلىكتە تۇرۇپ «شابات تۇتۇپ» دەم ئېلىپ راھەتلەندى.'

possible correction: verses 22 and 23, Cyrus's decree. https://ebible.org/uigara/2CH36.htm has all 23.

**5. The copyright page is for a different Bible.**

url: https://ebible.org/apyNT/copr.htm

quote(s): the page opens with the Apalaí title. The copyright block below names the Khmer Standard Version, the Bible Society in Cambodia, and Khmer terms.

possible correction: the Apalaí New Testament's own terms. Nothing on the page states terms for the Apalaí text, so we cannot tell what it is offered on. We only carry translations whose terms we can read.

**6. Galatians is in two languages, and a verse is lost where they meet.**

url: https://ebible.org/sbs/GAL02.htm

quote(s): verse 9 ends 'Pamene Jemusi, Kefasi, na Yohane, enze na mbili ngati sandamila, pebezindikila cisomo cenze pa neo etilola'. Verse 11 begins 'Lyahanu linu Kefasi henza kwa Antioke…'

possible correction: Galatians 1 and 2:1–9 in Chikuahane, like the rest of the Bible. At present they read as Chichewa — 'Mulungu' and 'Yesu Kristu', where Galatians 3 to 6, Matthew, John and Romans all say 'Ireeza' and 'Jesu Kereste'. Verse 9 stops mid-sentence at the seam and verse 10 is gone with it: there is no `id="V10"`, and 'they asked us to remember the poor' is nowhere on the page.

**7. Two verses are missing from Luke 4.**

url: https://ebible.org/plj/LUK04.htm

quote(s): verse 15 ends '…ar ni mbarǝm pita yari zo shirǝm den ti.' Then a blank line, then `<span class="verse" id="V18">18&#160;</span>&lt;&lt;Ruhu kǝ Babom Yam ra na demǝni`

possible correction: verses 16 and 17 — Jesus coming to Nazareth, standing to read, being handed the scroll. The Isaiah words begin at verse 18 with nothing to introduce them. The read-aloud file has the same hole, so the text is short, not the numbering.

**8. Proverbs 31:1–9 is in a different chapter in the two editions.**

url: https://ebible.org/englxxup/PRO31.htm and https://ebible.org/englxxup/PRO24.htm

quote(s): PRO31.htm opens `<span class="verse" id="V10">10&#160;</span>Who shall find a virtuous woman?` — there is no verse 1 to 9. PRO24.htm carries them at 54 to 62. But `englxxup_021_PRO_31_read.txt` opens 'My words have been spoken by God—the oracular answer of a king, whom his mother instructed' and runs 31 verses.

possible correction: a note on the page, as eng-Brenton has for the same ordering — 'See chapter 24 for the content of chapter 30.' englxxup has no such note, and no PRO30.htm at all, though its own book index lists one.

**9. A colophon is numbered verse 1, after verse 13.**

url: https://ebible.org/engkjvcpb/ESG10.htm

quote(s): the numbers run `4` … `13` and then `1`: `<span class="verse" id="V1">1&#160;</span>In the fourth year of the reign of Ptolemeus and Cleopatra`

possible correction: number it 14, or give it its own chapter. Starting the chapter at 4 is right, and putting the Additions back into chapters 1, 3, 4, 5, 8 and 10 is a fair choice. But the colophon kept the number it had at 11:1.

**10. A heading reads 'A Psalms'.**

url: https://ebible.org/engbsb/PSA003.htm

quote(s): `<div class='d'>A Psalms of David, when he fled from his son Absalom. </div>`

possible correction: 'A Psalm of David'. Forty-nine headings in the book begin 'A Psalm'. PSA000.htm says the same, so the two pages agree with each other and differ only from the rest of the book. We cannot tell from here whether it came from the source text or the publishing, so we carry it as published.

**11. A verse marker is missing. The words are there.**

The numbers skip one, and the missing verse's words sit inside the block before it. In these, the read-aloud edition numbers them correctly, so the two published editions disagree and the HTML one is a verse short.

url: https://ebible.org/eng-lxx2012/PSA118.htm and https://ebible.org/eng-uk-lxx2012/PSA118.htm

quote(s): `<span class="verse" id="V43">43&#160;</span>And take not the word of truth utterly out of my mouth; for I have hoped in your judgments. So shall I keep your law continually, for ever and ever.`

possible correction: a verse 44 marker before 'So shall I keep your law continually'. The numbers run 1 to 43, then 45 on; there is no `id="V44"`. The read-aloud totals 176, which matches the psalm. It is the only psalm in either edition where the numbers skip.

url: https://ebible.org/engtcent/3JN01.htm

quote(s): `<span class="verse" id="V14">14&#160;</span>I hope to see yoʋ soon, and we will speak face to face.  </div><div class='p'>Peace be with yoʋ.`

possible correction: a verse 15 marker before 'Peace be with yoʋ'. That sentence is an unnumbered paragraph. The read-aloud numbers it 15 and totals 15.

The same, with the skipped number in brackets:

- tczchongthu — GEN37 (3), GEN44 (26), EXO25 (21), EXO27 (7), EXO36 (19), EXO40 (27), NUM02 (13), DEU25 (4), 1SA26 (18), 2CH34 (11), ECC06 (5), ISA30 (18), JER19 (12), DAN04 (7), DAN08 (18 and 24), HOS11 (2), HOS12 (5), OBA01 (7), ZEC02 (12)
- tdx — MAT10 (33), MAT16 (6 and 7), MAT18 (4), 2SA13 (3), 1CH08 (38), PSA029 (2)
- uigara — GEN09 (10), PRO06 (5), MRK01 (44), LUK01 (42)
- kiz — 2TH02 (8, 9 and 10), GAL05 (13)
- amo — MRK07 (27), HEB11 (19)
- tsn — MRK15 (37), GAL04 (16)
- jni — JHN01 (6, 7 and 8) — the three verses about the man sent from God
- jid — MRK16 (13) — this edition has the long ending, so verse 13 belongs in it

In these the read-aloud is short in the same places, so both editions agree and the numbering is the source text's own. We list them only because the words are on the page with no number on them, so a link to the verse lands nowhere:

- bsj — MAT12 (30), MAT15 (26), JHN01 (21), JHN10 (35), JHN13 (9), 3JN01 (6), REV14 (9)
- uigara — PRO26 (19), EZK18 (11)
- dji — GEN25 (15)

For bsj MAT12 the words of verse 30 are the tail of verse 29. For uigara PRO26 verse 19 is the second line of the couplet under 18, and for EZK18 verse 11 is the tail of verse 10. For dji GEN25 the five names of verse 15 are the tail of verse 14.

https://ebible.org/bsj/JHN10.htm is worth a separate look. Verse 34 ends with a bare `36` in the running text with no marker around it, and the words after it are verse 35. So the page prints a number that is both unmarked and one too high.

**12. Verses are missing, words and all.**

Unlike item 11, we read the verses either side and the words are not on the page. Every read-aloud file below is short in the same place.

url: https://ebible.org/bsj/MAT22.htm and https://ebible.org/bsj/2TH03.htm

quote(s): MAT22 runs verse 44 straight into `<span class="verse" id="V46">46&#160;</span>ni kange mani wo kar cine kange…`. 2TH03 runs verse 9 straight into `<span class="verse" id="V11">11&#160;</span>fiya nyo wari ka-nge kome…`.

possible correction: Matthew 22:45, 'If David then calls him Lord, how is he his son?', and 2 Thessalonians 3:10, 'if anyone will not work, let him not eat'.

url: https://ebible.org/jid/ACT10.htm

quote(s): verse 14 ends '…nda na kpanya ni shishi Irji na.' and the next marker is `<span class="verse" id="V16">16&#160;</span>Ama ilan ala kma tre niwu nkpuwu ha ngari…`

possible correction: Acts 10:15, 'What God has cleansed, do not call common'. The page proves this itself — verse 16 says the voice spoke a second time, and the first time is not there. 47 read-aloud lines for 48 verses.

url: https://ebible.org/jid/LUK10.htm

quote(s): verse 25 ends '…me tie ngye miti mi ni kpa re u tuntrun?' and the next marker is `<span class="verse" id="V27">27&#160;</span>Wa a kasa nda tre gbigbi…`

possible correction: Luke 10:26, 'What is written in the law? How do you read it?' Verse 27 begins 'and he answered', with nothing to answer. 41 lines for 42 verses.

url: https://ebible.org/tczchongthu/EXO15.htm

quote(s): verse 15 ends '…Canaaan gam'a cheng jouse jong alung thoi gamta uve.' and the next marker is `<span class="verse" id="V17">17&#160;</span>“Nangman namite nahin puilut ding…`

possible correction: Exodus 15:16, 'terror and dread fall on them… till your people pass by'. 26 lines for 27 verses.

---

How we found these, and what we left out. We laid every chapter's verse numbers against the same chapter in the other 398 translations we carry.

We dropped anything eight or more translations agreed on. That turned out to be exactly the sixteen verses the critical texts omit — Matthew 17:21, Mark 9:44, Acts 8:37 and the rest.

We set aside translations that skip whole chapters. If a translation has no Genesis 5 at all, verses missing inside its Genesis 4 are the same editorial choice. Seven do this on a large scale — lit, pma, engPEV, tkr, engnna, mwf2018 and nay, skipping between 38 and 477 chapters each — and they hold about six thousand of the gaps we found.

That test lets missing verses go, not missing numbers. dji publishes 37 chapters and is still listed above, because its Genesis 25:15 is a number missing over words that are there.

We also set aside the five Septuagint editions. englxxup skips exactly the same 299 numbers as grcbrent, the Greek it revises; eng-Brenton differs from that Greek only at 1 Samuel 17:12–31, which it supplies in brackets from another manuscript, and at its Nehemiah filing; and eng-lxx2012 and eng-uk-lxx2012 skip the same 255 as each other, 153 shared with Brenton's Greek and the rest in Jeremiah, 3 Kingdoms, Proverbs and Nehemiah — where the Greek differs from the Hebrew in length and order.

Where we cannot read a chapter we pass it over and pick it up when a corrected download appears. At present neither Brenton edition shows Psalm 119 at all.

Thank you again for the work.
