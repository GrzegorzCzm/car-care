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

_____________________________________________________________________________________

Project was build using starter kit:(https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

