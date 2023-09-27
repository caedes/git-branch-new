#! /usr/bin/env node

import { execSync } from "child_process";
import { input, select } from "@inquirer/prompts";

import { changeTypes, ChangeType, ChangeTypeName } from "./change-types";
import branchName from "./branch-name";

interface Choice extends ChangeType {
  value: ChangeTypeName;
}

(async () => {
  const changeTypeChoices: Choice[] = changeTypes.map(
    ({ name, description }: ChangeType) => ({
      name,
      description,
      value: name,
    })
  );

  const changeTypeChoice: ChangeTypeName = (await select({
    message: "Select the type of change that you want to commit",
    choices: changeTypeChoices,
  })) as ChangeTypeName;

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
