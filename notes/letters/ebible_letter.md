# Letter to eBible.org — five faults in published files

Written 2026-08-19, a fourth finding added 2026-08-20, a fifth 2026-08-21. Not sent
yet. Send it as one letter; all five findings are small and none needs a reply.

The facts below were each checked against the files on disk before writing. If you
send this after a fresh download, check them again first — a corrected file would
make the letter wrong.

---

Subject: Four small faults in published files — Bangwinji (bsj) Mark, Bugun (bgg) Matthew, Apalaí (apyNT) copyright page, Berean Standard Bible (engbsb) Psalm 3

Hello,

Thank you for eBible.org. I run a free Bible reading app that gets almost all of
its translations from you, and it exists because you give them away.

While checking every translation we carry, four came up with faults in the
published files. The first three look like faults in the published output rather
than in the translations. The fourth is a single wrong letter in a heading, and I
cannot tell from here whether it came from the source text or from the publishing,
so I have described what the file says and left that to you.

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

No reply needed. We pass the affected chapters over rather than show anyone a
chapter we cannot read, and we will pick them up on their own whenever a corrected
download appears. The Psalm 3 heading we carry as published, since a translation is
not ours to correct.

Thank you again for the work.
