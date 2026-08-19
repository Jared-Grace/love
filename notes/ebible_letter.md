# Letter to eBible.org — two translations with missing text

Written 2026-08-19. Not sent yet. Send it as one letter; both findings are small
and neither needs a reply.

The facts below were each checked against the files on disk before writing. If you
send this after a fresh download, check them again first — a corrected file would
make the letter wrong.

---

Subject: Two published translations with missing text — Bangwinji (bsj) Mark, Bugun (bgg) Matthew

Hello,

Thank you for eBible.org. I run a free Bible reading app that gets almost all of
its translations from you, and it exists because you give them away.

While checking every translation we carry, two came up with text missing from the
published files. Both look like faults in the published output rather than in the
translations, so I thought you would want to know.

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

No reply needed. We pass those chapters over rather than show anyone a chapter we
cannot read, and we will pick them up on their own whenever a corrected download
appears.

Thank you again for the work.
