export function app_g_view_phase_conversation() {
  "The phase the view is in while a conversation is on screen.";
  "Seven other files spell this same word and none of them means this. There is a";
  "field of that name on a prayer and on an npc, and a field name is written into";
  "every saved game, so routing those through this would tie what is on disk to";
  "what the screen is doing - rename the phase afterwards and every save already";
  "written stops being readable. The report of repeated spellings names this file";
  "beside those seven; they are two different things wearing one word.";
  "The saving is a blanket dump rather than a chosen schema, which is what settles this: the whole game object goes to json with two fields taken out, so every field name anywhere under it is already written on disks nobody here can reach. That is the one exception the duplicate-spelling work item carves out for itself, so the merge it proposes is refused on the item's own terms rather than on a preference.";
  "The report used to offer the merge anyway and had no way not to: it read the spelling out of the file as text, and its only guard was that two getters must not hold one spelling, which the field name could never trip because it has no getter to be the second. So the offer came back every time somebody asked what was worth doing, and each reader paid again to work out that it must be refused.";
  "It reads the site now rather than the spelling. A word handed second to one of the field calls, or standing inside the brackets of a lookup, is naming a field rather than carrying a value, and a file whose every mention is of that kind is no longer offered. That is why this paragraph is a record and not a warning - the sentences above stay because they say why, and the report enforces it without being able to read them.";
  "The field has since been given a name of its own and frozen, so the sites that were being offered here now call that one and no longer spell anything. Two things still spell this word without meaning either: a weight named for the part of a day spent in conversation, and a category in the index of written content. Neither is written into a save, so neither is frozen, and neither belongs to this.";
  let r = "conversation";
  return r;
}
