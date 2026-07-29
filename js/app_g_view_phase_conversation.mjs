export function app_g_view_phase_conversation() {
  "The phase the view is in while a conversation is on screen.";
  "Seven other files spell this same word and none of them means this. There is a";
  "field of that name on a prayer and on an npc, and a field name is written into";
  "every saved game, so routing those through this would tie what is on disk to";
  "what the screen is doing - rename the phase afterwards and every save already";
  "written stops being readable. The report of repeated spellings names this file";
  "beside those seven; they are two different things wearing one word.";
  "The saving is a blanket dump rather than a chosen schema, which is what settles this: the whole game object goes to json with two fields taken out, so every field name anywhere under it is already written on disks nobody here can reach. That is the one exception the duplicate-spelling work item carves out for itself, so the merge it proposes is refused on the item's own terms rather than on a preference.";
  "The report cannot read any of this and will keep offering the merge, because its only guard is that two getters must not hold one spelling and the field name has no getter to be the second. Whoever acts on it should give the field its own name and freeze that, not route these sites through this one.";
  let r = "conversation";
  return r;
}
