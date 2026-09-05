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
      note: "You asked three times for the thicket to trap more. The branches now cross in front of the ram as well as behind it, lying over its chest and legs, so it is held in on every side. Nothing else changed - the halo and the thorn ring are as you accepted them.",
    },
    {
      n: 18,
      note: "Rolled up, brighter, and the genitals - all three are now in the wording, but I cannot show you a new drawing. The drawing account is out of credits and every attempt today came back refused. The picture above is 47: it has the rolled scroll but five seals and the cross outside the halo. 49 had seven seals and the cross inside, and was dark, so neither one is right yet.",
    },
    {
      n: 20,
      note: "You said it read as a tower because the entrance was nearly the whole structure. The wording now holds the opening to a third of the height of the rock and a quarter of its width, so the rock stands broadly out on both sides and rises well above it. That is the only change.",
    },
    {
      n: 21,
      note: "You asked for the stone to be taller than the entrance. I found why four tries failed: the wording also asked for a crescent of the black mouth to keep showing past the edge of the stone, which fights covering it, so the drawing left the mouth open. That clause is gone, and the stone wording no longer uses the word oval, which was summoning one. No new drawing yet - the drawing account is out of credits.",
    },
    {
      n: 24,
      note: "You asked twice what was wrong with 114. One thing only: its beams were white instead of every colour, which is the rainbow you had asked for. Neither fault you named in the last one is in 114 - its halo fades softly and its stone sits on the ground. Both of those were things I broke, not things 114 lacked. This one has the coloured beams and the soft halo and the stone on brown ground. The wording had asked for the ground at the very end of a long passage and it was being read past, so it now sits beside the stone.",
    },
    {
      n: 26,
      note: "You asked what was wrong with the one before. Nothing you had named. I replaced it on my own judgement because its wording asked for pale blue sky and the style forbids pale. But you had said its coloured rays looked good, so that trade was mine to lose. It is back to what it was.",
    },
    {
      n: 30,
      note: "You asked what was wrong with 40. Nothing, and I made it worse - I took the smoke out and flattened the mountain to a plain grey triangle, both of which you had asked against. 40 is back.",
    },
  ];
  return couplets;
}
