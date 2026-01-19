In this repo:
- There is code for transforming code from a terminal
  - There is code for a terminal
- There is code for transforming code on file save
  - There is code for a watcher that transforms a file on write
- There is code for an IDE in a browser (in progress)
  - There is code to test the apps from a browser
  - There is code for a server that serves static files and allows the browser to call a function
- There is code for apps that have been useful in my life:
  - An app to read the Bible
  - An app to search the Bible
  - An app to generate responses with Bible verses to messages
- There is code for a Bible video game (in progress)

---

This repo has a convention to use Visual Studio Code.

---

This repo has a convention that this repo and other repos are in a folder called `repos/`

So instead of this repo being in a folder called "`love`" anywhere - the path needs to be `repos/love/`

Therefore the root folder when you open in VS Code will be `repos/` not `love/`

---

There is a file:

`repos\love\data\.vscode\tasks.json`

It should be copied here:

`repos\.vscode\tasks.json`

That way the watcher, server, and terminal will all run when VS Code is started

You don't have to copy this yourself:

To run the terminal: `cd love; ./scripts/p.cmd`

Then you can run this function: `love_initialize`

That will copy `repos\love\data\.vscode\tasks.json` to `repos\.vscode\tasks.json`

---

To run the Watcher: `cd love; node scripts/r.mjs w`

To run the serVer: `cd love; node scripts/r.mjs v`

---

To run a function:

`cd love; node scripts/r.mjs fn_name arg1_string arg2_string`

Or if you are inside the terminal:

`fn_name arg1_string arg2_string`

The arguments will be passed into the function as strings

---

This repo is function-centric and written in JavaScript: Each function has its own file.

---

To create a new function:

`n fn_name` 

---

`n` is an alias for `function_new`

To see what an alias `n` is mapped to use: `u n`

`u` is an alias for `function_name_unalias`

To create a new alias `abc` for function `action_births_consequence` use: 
`a abc action_births_consequence`

There is also `ar` for `function_alias_replace`: 
`ar existing_alias function_that_will_now_use_that_alias`

And there is also `ac` for `function_alias_change`: `ac alias_old alias_new`

To open a function:

`o fn_name_or_alias` 

---

In the terminal `s partial_name1,partial_name2` will match function names that contain both `partial_name1` and `partial_name2`

---

If the watcher is running, you can write shorthands that will expand to code:

For example `$iel` in its own statement will expand to `if (false) {} else {}` on file save

Likewise: `l` expands to: `log(message);` (and missing imports will automatically be added)

However if `message` is already an identifier in the file then a unique identifier will be chosen such as `message2`

And: `add` expands to `let sum = add(left, right);`

So if you type the alias for a function (or its name), such as `l` in its own statement for `log` then arguments will be added for the function and if the function has a `return` then an assignment will be added in the expansion 

---


---

Screenshots:

IDE:

![App screenshot](readme\ide.png)

Choosing an identifier in the IDE:

![App screenshot](readme\ide_identifier_rename.png)

Previewing an app from the IDE

![App screenshot](readme\ide_preview.png)

Reply to messages:

https://jared-grace.web.app/reply.html

![App screenshot](readme\reply.png)

Bible reading:

https://jared-grace.web.app/bible.html#c=JHN01

![App screenshot](readme\bible.png)

Bible searching:

https://jared-grace.web.app/search.html

![App screenshot](readme\bible.png)

---

`mkdir repos
cd repos
git clone https://github.com/Jared-Grace/love
git pull`