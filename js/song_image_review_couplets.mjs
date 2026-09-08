export function song_image_review_couplets() {
  "the couplets being put up for review this round, each with one line saying what was changed in it - the review page's whole subject, held apart from the page that draws it so that changing what is under review is an edit to a list and never to a layout";
  "a note travels with each number rather than the number travelling alone, because a picture shown by itself asks the reader to find the difference. What was changed is the one thing the person reviewing cannot see and the one thing whoever changed it already knows, so withholding it spends their attention on a question that was already answered.";
  "the note says the fault that is still there as well as the one that was fixed, and that is the half worth defending. A page that lists only what improved is asking to be agreed with; a reader told the picture is still wrong in a named way can look at the rest of it instead of rediscovering that.";
  "a couplet comes off this list the moment it is accepted, so what is here is only what is still open. Leaving an accepted picture up spends a reader's attention on a question they have already answered, and it hides how much is left.";
  "this list is meant to be short-lived and rewritten every round, which is why it is a list of its own and not a field on the couplet table. A couplet's symbol is permanent and what somebody was asked to look at last Tuesday is not.";
  "AN EMPTY LIST IS THE FINISHED STATE AND NOT A BROKEN ONE, so the page that reads it has to say so in words rather than come up blank. Every couplet that has been drawn so far has been accepted, and the next round begins by putting numbers back here - so emptiness means the reviewing is caught up with the drawing, which is the one state worth telling the reader about plainly.";
  "A NOTE IS THREE OR FOUR SHORT SENTENCES AND NEVER A PARAGRAPH. The reader is holding a phone with the picture above and the note in grey beneath it, and a note long enough to need scrolling costs more attention than the picture it is about. Everything worth keeping that will not fit belongs in the prose of the function that was changed, where it is read once by whoever changes it next rather than every round by the person reviewing.";
  "IF THE READER ASKED A QUESTION, THE NOTE ANSWERS IT BEFORE IT SAYS ANYTHING ELSE. Four couplets were asked what was wrong with the drawing being replaced and all four got a fresh wording instead of an answer, which is the one reply that cannot be checked - a reader who is told why is able to say no, and a reader handed a new picture can only start again. The question is also worth taking literally: on three of the four the honest answer was that nothing was wrong with it and the replacement was somebody's unasked judgement.";
  "EVERY ATTEMPT STORES THE WORDING IT WAS DRAWN FROM, IN ITS OWN JSON BESIDE THE PNG, AND THAT IS WHAT A PICTURE IS JUDGED AGAINST. Couplet 24 was called a failure for having no open tomb in it, when the symbol in force when it was drawn asked for the tomb sealed and the light coming out past the sealing stone - so it had obeyed exactly. A window whose design has been changed once will have older drawings that are faithful to the older design and newer ones faithful to the newer, and judging both against whatever is in the file today marks the faithful ones wrong. Read the attempt json first.";
  "A DRAWING KEPT FROM BEFORE A WORDING CHANGED IS NOT EVIDENCE ABOUT THAT WORDING. Couplet 18 was reported as having no halo and no scroll while its symbol asked for both, because the kept attempt predated the scroll being written in at all. Before reading a fault off a picture, check that the picture was drawn from the words now in the file.";
  let couplets = [
    {
      n: 6,
      note: "Your wording is in the couplet now: the cross is a lighter brown and the field behind it is crimson and ruby. Nothing had to change in the shared sheet - this couplet asks for the lighter shade by name, which is the one way a picture is allowed to step outside the rules. Still wrong: the field came back as three red bands rather than two, so the crossbar sits on a seam.",
    },
    {
      n: 7,
      note: "Your note is answered in the words. The tall cross now runs up into the head of the arch, well above the upper lead line, so it no longer stops at the seam where red meets blue. Still wrong: the hill came back bright lime rather than emerald, and it fills two bands so they read as one.",
    },
    {
      n: 9,
      note: "The white bottom band is gone. I did not change this couplet - the fault was the four exceptions in the shared sheet, which are now said once at the end instead of beside each rule they qualify. Nothing else here moved, so if you liked the rest of it before, it is the same rest.",
    },
    {
      n: 11,
      note: "Black is out of the words - the couplet now names crimson, violet and cobalt for the three bands. The drawing ignored all three and came back black anyway, so this is the service overriding the words rather than the words being wrong. I have kept the old attempt rather than this one. The ram is still white on dark, which is the ghost you named.",
    },
    {
      n: 14,
      note: "Answering your question: it does now. All four veil stripes are there - cobalt, violet, ruby and white - against the emerald field I named so that the white one would stand clear of it. Still wrong: it is hung on a rod nobody asked for, and the stripes read as ribbons rather than one cloth torn in two.",
    },
    {
      n: 15,
      note: "Both notes are answered. The flame is now confined to the bare blade above the mouth of the sheath, and the words say the sheath is plain leather down its whole length. The white background is gone and the field is cobalt throughout. Still wrong: the sheath is drawn far fatter than a sheath, and the field is one flat blue rather than banded.",
    },
    {
      n: 24,
      note: "Answering your question: 260 was the closest yet to what you described, and the one thing wrong with it was that it was not a window - no arch, no field, no lead lines, and photographic stone in colours outside the eight. I have narrowed the shared exception so that a named grant can no longer take the window itself. 279 has the arch back. I left 260 as the kept one until you choose between them.",
    },
    {
      n: 25,
      note: "Answering your question: 115 has everything you asked for - seven crowns, all different, no flowers, standing clear of the field. The one thing wrong is that every crown is gold, and gold is not among the eight colours the sheet allows, so it gets drawn as ruby or white glass instead. I have not changed the wording or redrawn it. Tell me whether gold is worth an exception and I will write one.",
    },
    {
      n: 26,
      note: "All four of your notes are answered. Six rays instead of three, five of the six carrying colour, and each one comes to a point where it meets the cloud and widens like a wedge as it falls. Still wrong: the sky is a light blue that is not among the eight colours, so the sheet ignores that word and the service picks its own.",
    },
    {
      n: 32,
      note: "There is no cross in this couplet at all. Its words name a river, two trees on the banks and a pale amethyst field, and nothing else - so the red cross you are describing was invented by the drawing service and there is no wording behind it to fix. I have changed nothing here. If you want a cross at the head of the river, say so and I will write one in.",
    },
    {
      n: 33,
      note: "Answering your note: the white you named is not asked for anywhere in this couplet - it is the same shared fault as 9, and 9 came back clean this round. So I redrew this one without changing a word, and got something worse. The old attempt is still the kept one. This is worth one more draw rather than a wording change.",
    },
  ];
  return couplets;
}
