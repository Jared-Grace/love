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
      n: 2,
      note: "The water is lighter colours now rather than black lines, as you asked. It cost something: asking for the whole round of the surface made nine drawings float it as a disc above the rim, so it is now a shallow ellipse lying inside the rim, and there is less water showing than in the round ones you liked. Say if that is the wrong trade.",
    },
    {
      n: 11,
      note: "The ram has the yellow halo you asked for twice, plain with nothing inside it - a plain circle is the church's mark for someone God set apart, and the ram is a picture of CHRIST rather than CHRIST himself. The thorn ring now sits on the head between the horns and the thicket closes round the legs. The pink shape under the belly is gone and is forbidden outright.",
    },
    {
      n: 18,
      note: "You were right that it had neither, and here is why: the kept drawing was older than the wording. The scroll was written into the symbol after that picture was drawn, so it could never have had one. This one has both - yellow halo with the red cross in it, and the sealed scroll under the hooves. It has five seals and should have seven.",
    },
    {
      n: 20,
      note: "You asked for stone with a dark entrance. I had made the entrance violet, which was my decision and not anything you asked for, and it was wrong. It is black now.",
    },
    {
      n: 21,
      note: "You asked what was wrong with the one before. Honest answer: nothing. I replaced it on my own judgement and what replaced it was a grey frame with an oval in it, which is what you saw. This is back to a mass of rock with a black mouth and the stone rolled up against it.",
    },
    {
      n: 24,
      note: "You asked what was wrong with 114 and I answered wrongly. This window went through two designs - first the stone rolled away with light out of the open mouth, then the stone still sealing the tomb with the light coming out past it. 114 is the second one and it does what that design asks. I judged it as a failed version of the first and redrew it that way, which threw out a decision you had already made. 114 is back and so is the wording that drew it. Four more from the same words came out worse. The one real fault left was that the beams came out white every round though the wording asked for every colour, and that is fixed here. The clause had been naming white in order to refuse it, which is the surest way to get it. It now names the colours themselves at the front and never says white at all. Two beams have come out yellow, which the palette does not allow, and the red beam standing straight up reads a little like a cross.",
    },
    {
      n: 26,
      note: "You asked what was wrong with the one before. Nothing you had named. I rewrote it because it asked for pale blue sky and the window style forbids pale, so every drawing was disobeying one instruction or the other. This one has seven white rays of differing widths over violet and crimson. The old one had more colours in the rays and you had said those looked good.",
    },
    {
      n: 30,
      note: "You asked what was wrong with 40. Nothing, and I made it worse - I took the smoke out and flattened the mountain to a plain grey triangle, both of which you had asked against. 40 is back.",
    },
  ];
  return couplets;
}
