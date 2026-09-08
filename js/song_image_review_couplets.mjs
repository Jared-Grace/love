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
      note: "Answering your note: the cross and the field are different colours now. The field is emerald green and cobalt, which is what this couplet asks for by name. The last one was pale tan, the same colour as the cross, because four exceptions in the shared style sheet had started reading as general permission. Still wrong: the wood grain on the cross is more shades than the rule allows.",
    },
    {
      n: 7,
      note: "Both your notes are answered. There is no white and no grey anywhere in the field, and the lead lines stop at each cross instead of running through it. Nothing in this couplet changed - the fault was in the shared style sheet and it is fixed there. Still wrong: the green hill fills two of the three field bands, so they read as one band.",
    },
    {
      n: 9,
      note: "Answering your question: no, the background should not be white. The rule forbidding it was already there and the picture broke it anyway, which is what led me to the real cause in the shared sheet. This couplet is unchanged. Two new ones are worth arrowing between - 11 has no white at all but five bands instead of three, and 12 has a white band at the foot.",
    },
    {
      n: 11,
      note: "Black is written into the wording now, so a redraw comes back black instead of green. Both bands are black and the head of the arch stays cobalt. The old picture was black by luck, this one is black by instruction.",
    },
    {
      n: 14,
      note: "Answering your question: no, there should be no white in the background. The rule forbidding a white or grey or pale field was written after the old picture was drawn, which is how the white got in. The wording is unchanged - only the sheet is new.",
    },
    {
      n: 15,
      note: "Flames and half sheathed, as you asked, said as a state the way 8 says a tear. Lower half of the blade inside the sheath, upper half bare above the mouth and wrapped in orange and yellow flame. The crossguard moved up to the top of the bare blade, since it can no longer sit at the sheath mouth.",
    },
    {
      n: 26,
      note: "Its own words asked for pale sky twice and the field clause was refusing it flat. Pale is now granted where a symbol names it, which was the whole cause of the sky staying deep blue. I also changed clear sky blue to pale cobalt, since clear sky blue is not one of the eight colours and so was never being honoured. Watch the two white rays - on a pale sky they may wash out.",
    },
    {
      n: 32,
      note: "Brighter is now legal, but the palette leaves almost nothing here. The field cannot take blue, brown or green because the symbol spends all three, pale red reads as pink which is refused by name, and white and grey are out. So pale violet, the amethyst of Revelation 21 verse 20, and the river lighter too, clear as crystal from Revelation 22 verse 1.",
    },
    {
      n: 33,
      note: "The tear was refusing brightness in its own words: all of one blue throughout. That is cut, so the two shade rule can reach it - lighter over most of the glass and deeper along the edges. That is the depth you suggested for the crown of thorns.",
    },
  ];
  return couplets;
}
