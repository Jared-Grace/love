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
      n: 4,
      note: "I took your second suggestion, not your first: the thorns carry a light brown over most of them and a deep brown along their edges, instead of the field being lightened. This is a new drawing made from that rule, and the crown is much larger than before. The field behind is unchanged, so if brown on violet is still muddy the field is the next thing to move.",
    },
    {
      n: 8,
      note: "You asked for the nail with perspective rather than square on. It is now driven in slanting and seen from the side, so its shaft plainly goes into the wood at an angle and its head is turned partly away from you. Nothing else changed.",
    },
    {
      n: 18,
      note: "The picture is unchanged, because all three new draws were worse - two came back with no halo and no scroll at all. The wording now asks for the Agnus Dei and a cruciform halo by their church names instead of describing three bars, and the seven seals are asked for as four along one half and three along the other. Every draw so far gives five seals and puts the cross behind the lamb rather than inside the halo.",
    },
    {
      n: 20,
      note: "You asked whether there was a new picture. There was not, and now there is. This is the first one drawn since the opening was given a size, and the rock stands plainly wider than the mouth on both sides with the entrance dark. Nothing else changed.",
    },
    {
      n: 21,
      note: "Eighteen more tries and the stone still will not cover the mouth, so the picture is unchanged. I did find one real cause: the mouth used to sit high in the rock face while the stone stands on the ground, so it could not reach. The mouth now runs down to the ground, which fixed the shape and not the covering. The stone comes back small and low every time, and I have stopped spending on it until you say it is worth more.",
    },
    {
      n: 23,
      note: "You asked whether saying it simply and letting it fill in the details would work. It does, and this is that drawing. The wording is a third of what it was, the rays are now different widths and lean unevenly, and the ground is black. The sun still sits as a half disc rather than a sliver.",
    },
    {
      n: 25,
      note: "Seven crowns at last, and large. Your own words did it: I had read triangle and square as rows and asked for three side by side over four side by side, which drew two crowns. Asked for as a triangle of three over a square of four it came back exactly seven. They are still all alike and all white, so say whether they should differ in shape and in colour.",
    },
    {
      n: 26,
      note: "Both of your asks went into the wording, and then all three new draws came back worse than this one - a grid of eight panels, a cross, and a fan of ten rays - so the picture is unchanged. What you are looking at already has the pale sky lightening downward and beams that widen as they fall. The wording is now a third shorter; the next draw is the test of that.",
    },
    {
      n: 30,
      note: "40 is back, as you asked. No new drawing was made and the wording is unchanged, so this is the same picture you already approved.",
    },
    {
      n: 32,
      note: "You asked for the river behind the trees. The wording now says every branch and every leaf is drawn over the top of the water, and this drawing does it - the leaves cross the river instead of stopping at it. The river is still wide and straight down the middle, so say if it should be narrower.",
    },
    {
      n: 34,
      note: "Both are back, as you asked, and the rainbow is at last drawn as an emerald arch behind the throne rather than as the window's own border. The flames are still wrong: five, not seven. One other draw did give exactly seven, but it turned the whole window green and lost the blue arch head that all thirty-six share - say if you would rather have that one.",
    },
    {
      n: 36,
      note: "You asked for more grape bunches. There are six now, hung all round the cross instead of two at the top, and the wording asks for more bunches than leaves. The cross still stands clear of the vine. Nothing else changed.",
    },
  ];
  return couplets;
}
