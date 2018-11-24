This project is tracked in YouTrack project
https://dev-training.myjetbrains.com/youtrack/agiles/95-1/96-1

GitHub Repository https://github.com/GrzegorzCzm/car-care is integrated with above YT project


Commands to run project: 
yarn start
yarn build
yarn test
yarn eject


GitHub => YouTrack Integration:

Basic command for commits to manage YouTrack project
<commit comment> #<YT-ID> <YT-Command> <YT-Command>
<from new line comment visible as YT comment>

To execute command on more than one issue then use (#<YT-ID>, #<YT-ID) <YT-Command>

Example:
(#TST-12, #TST-324, #TST-433) Fixed Reviewed by john.d Revision ${revision}

Commands example:
In Progress
To Verify
Done
Reviewed by <user>
Revision ${revision}

You can use the ${revision} a placeholder in a commit message. The placeholder is be replaced with the actual hash of the VCS commit.

Example of commands:
https://www.jetbrains.com/help/youtrack/standalone/Apply-Commands-in-VCS-Commits.html

_____________________________________________________________________________________

Project was build using starter kit:(https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


____________________________________________________________________________________

UI Library used in project: https://material-ui.com/


___________________________________________________________________________________

Nameing convention:

branch names: <feat/impl/test/adm>_<YT ID>_<description>
commits: 
    <commit comment> #<YT-ID> [<YT-Command>]
    <from new line comment visible as YT comment>

- first commmit on new branch can have "In Progress" command
- last commit on branch before merg to master/story branch have to has "To Verify" command


stories on YouTrack:
[feat] <desc>

tasks on YouTrack:
[impl/test/adm] <desc>

impl - task for implementation
test - task for test
adm - some administration task
