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
  "THE NOTE NOW CARRIES THE ATTEMPT THAT WAS ON SCREEN WHEN IT WAS FILED, AND THAT NUMBER IS PART OF THE NOTE. Couplet 7 was asked to have its white hills recoloured and the kept drawing had no white in it anywhere; the note had been filed while the arrows were back on an older attempt. Three edits were spent on that older picture before the number was read. Read the attempt on the note before reading the fault.";
  "AN EDIT CAN RECOLOUR A REGION AND CANNOT REMOVE A THING, and that is now four failures wide rather than a guess. A rod, a set of lead lines across a veil, the same lead lines across a set of rays, and a stripe of white glass all survived instructions that named them and said to take them out; every recolouring asked for in the same round landed. So a note asking for a colour is answerable inside the picture the reader is looking at, and a note asking for something to go needs the words changing and a fresh drawing.";
  let couplets = [
    {
      n: 6,
      note: "Yes - it is black outside the border now, and that was an edit, so the arch, the cross and all three red bands are the same pixels you saw. Worth knowing: the shared sheet already asks for black out to all four edges, so this drawing had simply disobeyed it and no rule had to change. Still wrong: the cross came out a shade more olive than brown.",
    },
    {
      n: 7,
      note: "Your note was filed on attempt 6 and the kept one is 15, which has no white in it anywhere except the border - so there are no white hills left to recolour. I spent three edits on 6 before I read the number, and all three missed the white and moved the sky instead. Nothing here changed. Arrow back and forward and tell me which of the two you want.",
    },
    {
      n: 9,
      note: "Yes - the wide white pane behind the two drops is a light sky blue now. It was an edit, so the spearhead, both drops, the dark blue panes and the green are exactly as they were. The first try also lightened the blue band and turned the border into grey stone, so this is the second one. Light blue is outside the eight colours; I changed no rule, the edit just paints it.",
    },
    {
      n: 11,
      note: "Both asks are right and neither landed, so the picture is unchanged. Black outside the frame and straight lead lines are both already what the shared sheet asks for, so this drawing had simply disobeyed them. I rewrote the words to say the field is three whole panes and drew three more: two came back straight-lined and black outside but with no thorns, no crown and no halo, and the third kept those and went black all over. Say if more draws are worth it, or if this one stays.",
    },
    {
      n: 14,
      note: "The white background is a light sky blue now and the veil keeps all four stripes. It was an edit, so the veil, the rod and the arch head are the same pixels. The lines across the veil I could not remove - that is the fourth removal an edit has refused, so removal looks to be outside what it can do at all. Taking them out needs the words changed and a fresh drawing.",
    },
    {
      n: 15,
      note: "Done - the fire runs the whole length of the sword now, both sides, crossguard down to the point, the way 15 had it. It was an edit of the picture you were on, so the blade, the crossguard, the sheath and the blue field are unchanged. The sheath is still there because the symbol says half sheathed.",
    },
    {
      n: 24,
      note: "Yes - the photographic one has the white stone arch round it now, with black outside. Nothing inside it changed: the rolled stone, the glow, every ray colour and the sky are the same pixels. This is the only window in the set that is photographic, which the shared sheet forbids everywhere else. Say whether it stays the exception or the rest come to meet it.",
    },
    {
      n: 25,
      note: "Taking your answer literally, nothing needed doing and nothing changed. The crowns already differ by shape and by the colour of the jewels in them, which is what you said made them different. I have written the exception into the shared sheet: a crown may be gold, and where several stand together they are gold and told apart by jewels from the eight colours. That is the only gold allowed anywhere outside the Scripture.",
    },
    {
      n: 26,
      note: "Not done, and the kept picture is unchanged. An unbroken ray is already asked for twice, once in this couplet and once in the shared sheet, and it is drawn across anyway. I rewrote the clause to say where the two lead lines do run rather than refusing them, and drew twice more: one came back with the fan clean but every ray white, the other kept the colours and was bricked across worse than this. Glowing rays are the bigger question - the sheet forbids shading, gradient and highlight on all thirty-six.",
    },
    {
      n: 32,
      note: "Done the second way you offered: the cross and the rays behind it are white now and nothing red is left. It was an edit, so the two trees, the river, the field and the sky are the same pixels you saw. The cross is still something the drawing invented - your words name only the river, the two trees and the pale amethyst field.",
    },
    {
      n: 33,
      note: "Done - the panes behind the teardrop are deep crimson at the top and violet at the sides, and the teardrop itself is untouched. It was an edit, which is why the drop survived this time; three earlier tries had all eaten part of it. The green at the foot and the white border are unchanged.",
    },
  ];
  return couplets;
}
