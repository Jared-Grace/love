# Fixture for the guard corpus, never run: the guard reads a script file a
# `bash FILE` command names only to describe it in the prompt.
ls
awk '{print $1}' data/x.txt
node scripts/ai.mjs function_auto_checked x
awk -F'|' 'BEGIN{n=1}
{ print n }' data/x.txt
