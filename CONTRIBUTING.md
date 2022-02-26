# Contributing

  
## Pull Requests
The title of the pull request should tell the reviewer what the changes are focused on. If there is a commit that is irrelevant to what the pull request is focused on, then create a new pull request specific to that commit.

**Pull Request Review**<br>
At least one person must review the pull request before being accepted for merging. The code changes must be tested beforehand and not run into any glaring issues. Any error relevant to the pull request must be fixed if they pop up during testing.

## Commits
Changes in the commit must accurately represent what the commit message is saying. A clear and concise commit message helps us identify what the commit is about.

Commits should typically follow this command: ```git commit -m "<commit msg>"```
Try to break up the changes into small commit changes. For example, if one code change is about changing a class name and another is about fixing an infinite loop bug, then they should be split up into two commit messages. Do not make the commit message too vague and avoid making it too long.

**Bad**<br>
Commit #1: ```Updated version number and refactored some code```

**Good**<br>
Commit #1: ```Updated software version number```<br>
Commit #2: ```Refactored JSON parser to speed up load time```

The bad commit example has two problems. First, updating version number and refactoring code have no connection to each other whatsoever. Second, "refactored some code" is vague and does not tell us what was refactored.

On the other hand, the good commit example is better. Both commits are separate and better tells us what the commit is focused on. Also, we have a better understanding of what was refactored.


## Branches
Having multiple branches allow developers to organize their project more easily. There are two branches that will stay consistent throughout the project:
* ```main``` - Latest branch that is deployed to the app
* ```dev``` - Latest developer branch where all changes will go to before being merged into the main branch

Other branches will focus on features that will be implemented into the app, even experimental ones.

## Style Guidelines
Follow standard coding style guidelines:
* [JavaScript](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript)
* [React Native](https://gilshaan.medium.com/react-native-coding-standards-and-best-practices-5b4b5c9f4076) -- Not really "standard" but does follow good practices

**Naming Convention**<br>
Variables and functions should be camel case: ```camelCase```<br>
Classes and file names should be pascal case: ```PascalCase```


**Declaring variables**<br>
Avoid using ```var``` and only use ```let``` or ```const``` when declaring variables


## Coding Guidelines
As mentioned above, read style guidelines to further understand how to write consistent code.

Here are some examples to follow and avoid.

**Semi  Colon**<br>
Always use semi colon at the end of the code to avoid potential issues (they do happen).
```js
let index = 0;
```

**Tabbing**<br>
Only use tabs (1 tab = 4 spaces).

**Bracket Opening**<br>
Keep opening bracket on the same line as conditions, functions, classes, etc:
```js
if (x > 5) {
	// do stuff
}
```
Do NOT do this:
```js
if (x > 5)
{
	// do stuff
}
```

**Comments**<br>
Comments should easily make the developer understand what is going on. Use them above functions, large code blocks, and any lines that look confusing.
