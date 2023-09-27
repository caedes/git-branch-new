import { execSync } from "child_process";
import { input, select } from "@inquirer/prompts";

import { changeTypes, ChangeType } from "./change-types";
import branchName from "./branch-name";

interface Choice extends ChangeType {
  value: string;
}

(async () => {
  const changeTypeChoices: Choice[] = changeTypes.map(
    ({ name, description }: ChangeType) => ({
      name,
      description,
      value: name,
    })
  );

  const changeTypeChoice: string = await select({
    message: "Select the type of change that you want to commit",
    choices: changeTypeChoices,
  });

  const jira: string = await input({
    message: "Enter your Jira ticket e.g. DEVEX-123",
    default: "",
  });

  const userName: string = execSync("git config user.name").toString();

  const shortDescription: string = await input({
    message: "Enter a short description of your change",
    default: "",
  });

  const fullBranchName: string = branchName(
    changeTypeChoice,
    jira,
    userName,
    shortDescription
  );

  execSync(`git checkout -b ${fullBranchName}`);
})();