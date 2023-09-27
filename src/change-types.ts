const changeTypeName = {
  test: "test",
  feat: "feat",
  fix: "fix",
  chore: "chore",
  docs: "docs",
  refactor: "refactor",
  style: "style",
  ci: "ci",
  perf: "perf",
} as const;

type ChangeTypeNameKey = keyof typeof changeTypeName;
export type ChangeTypeName = (typeof changeTypeName)[ChangeTypeNameKey];

export interface ChangeType {
  name: ChangeTypeName;
  description: string;
}

export const changeTypes: ChangeType[] = [
  {
    name: changeTypeName.test,
    description: "Adding missing tests",
  },
  {
    name: changeTypeName.feat,
    description: "A new feature",
  },
  {
    name: changeTypeName.fix,
    description: "A bug fix",
  },
  {
    name: changeTypeName.chore,
    description: "Build process or auxiliary tool changes",
  },
  {
    name: changeTypeName.docs,
    description: "Documentation only changes",
  },
  {
    name: changeTypeName.refactor,
    description: "A code change that neither fixes a bug or adds a feature",
  },
  {
    name: changeTypeName.style,
    description: "Markup, white-space, formatting, missing semi-colons...",
  },
  {
    name: changeTypeName.ci,
    description: "CI related changes",
  },
  {
    name: changeTypeName.perf,
    description: "A code change that improves performance",
  },
];
