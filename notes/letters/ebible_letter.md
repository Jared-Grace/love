# Letter to eBible.org — five faults in published files

Written 2026-08-19, a fourth finding added 2026-08-20, a fifth 2026-08-21. Not sent
yet. Send it as one letter; all five findings are small and none needs a reply.

The facts below were each checked against the files on disk before writing. If you
send this after a fresh download, check them again first — a corrected file would
make the letter wrong.

---

Subject: Five small faults in published files — Bangwinji (bsj) Mark, Bugun (bgg) Matthew, Apalaí (apyNT) copyright page, Berean Standard Bible (engbsb) Psalm 3, Brenton Septuagint (eng-lxx2012, eng-uk-lxx2012) Psalm 118

Hello,

Thank you for eBible.org. I run a free Bible reading app that gets almost all of
its translations from you, and it exists because you give them away.

While checking every translation we carry, five came up with faults in the
published files. The first three look like faults in the published output rather
than in the translations. The fourth is a single wrong letter in a heading, and I
cannot tell from here whether it came from the source text or from the publishing,
so I have described what the file says and left that to you. The fifth is a missing
verse marker, where the words are all present but one verse number is absent.

**1. Bangwinji (bsj) — Mark, in the read-aloud edition**

Every chapter of Mark stops after two or three verses. `bsj_071_MRK_01_read.txt`
holds the book name, the chapter number, and verses 1 to 3, and then ends. All
sixteen chapters are like that — three to six lines each, 73 lines for the whole
book.

The HTML edition of the same chapter is complete: `MRK01.htm` carries all 45
verses.

Mark is the only book affected. In the same read-aloud edition, Matthew runs 19 to
50 lines a chapter and Revelation 22 to 31.

**2. Bugun (bgg) — Matthew from 7:13 to the end**

In the HTML edition, Matthew has text through 7:12. From 7:13 onward the verse
numbers are all there with no words after them:

```
<span class="verse" id="V13">13&#160;</span> <span class="verse" id="V14">14&#160;</span> …
```

That holds for the rest of chapter 7 and for every chapter from 8 to 28. Chapters
1 to 6 are complete, and every other book in bgg is complete.

One possible clue: the last thing before the text stops is a footnote marker at
7:12 whose popup span is opened and never closed.

```
<a href="#FN2" class="notemark"><span class="popup"> <span class="verse" id="V13">
```

The footnotes at the foot of those chapters are empty too — `<span class="ft"></span>`
with nothing inside them.

**3. Apalaí (apyNT) — the copyright page belongs to a different translation**

`apyNT/copr.htm` opens with the Apalaí title, and then the copyright block on the
same page is the Khmer Standard Version's: it names that translation, the Bible
Society in Cambodia, and Khmer quotation terms. Nothing on the page states terms
for the Apalaí text itself.

Because of that we cannot tell what the Apalaí New Testament is offered on, and we
carry only translations whose terms we can read, so it sits unused. A corrected
page would be enough on its own.

**4. Berean Standard Bible (engbsb) — the heading of Psalm 3**

The heading above Psalm 3 reads "A Psalms of David" where every other psalm reads
"A Psalm of David".

```
<div class='d'>A Psalms of David, when he fled from his son Absalom. </div>
```

It is the only one. Across the whole book, forty-nine headings begin "A Psalm" and
this single one begins "A Psalms". It appears the same way on the chapter page
`PSA003.htm` and on the whole-book page `PSA000.htm`, so the two agree with each
other and only differ from the rest of the book.

**5. Brenton Septuagint (eng-lxx2012 and eng-uk-lxx2012) — Psalm 118 is missing its verse 44 marker**

In the HTML edition, Psalm 118 (Psalm 119 in the Hebrew numbering) carries verse
markers for 1 to 43 and then 45 onward. There is no `id="V44"`.

The words of verse 44 are not lost — they sit at the end of verse 43's block:

```
<span class="verse" id="V43">43&#160;</span>And take not the word of truth utterly
out of my mouth; for I have hoped in your judgments. So shall I keep your law
continually, for ever and ever.
```

"So shall I keep your law continually, for ever and ever." is verse 44, and the
read-aloud edition of the same psalm agrees: it gives those as two separate lines,
and its 176 verse lines match the psalm's 176 verses. So the two editions of the
same chapter disagree, and the HTML one is the one a verse short.

Both editions are affected, identically apart from spelling — eng-lxx2012 reads
"judgments" and eng-uk-lxx2012 "judgements". It is the only psalm in either where
the markers skip a number.

No reply needed. We pass the affected chapters over rather than show anyone a
chapter we cannot read, and we will pick them up on their own whenever a corrected
download appears. That includes Psalm 118 above, so at present neither of those two
translations shows the longest psalm in the Bible at all. The Psalm 3 heading we
carry as published, since a translation is not ours to correct.

Thank you again for the work.
