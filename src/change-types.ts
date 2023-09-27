export interface ChangeType {
  name: string;
  description: string;
}

export const changeTypes: ChangeType[] = [
  {
    name: "test",
    description: "Adding missing tests",
  },
  {
    name: "feat",
    description: "A new feature",
  },
  {
    name: "fix",
    description: "A bug fix",
  },
  {
    name: "chore",
    description: "Build process or auxiliary tool changes",
  },
  {
    name: "docs",
    description: "Documentation only changes",
  },
  {
    name: "refactor",
    description: "A code change that neither fixes a bug or adds a feature",
  },
  {
    name: "style",
    description: "Markup, white-space, formatting, missing semi-colons...",
  },
  {
    name: "ci",
    description: "CI related changes",
  },
  {
    name: "perf",
    description: "A code change that improves performance",
  },
];
