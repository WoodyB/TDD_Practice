From https://levelup.gitconnected.com/tdd-with-typescript-and-jest-starter-project-cca94fd089f5
Note: Needed one little fix in jest.config.jest

 transform: {
      "^.+\\.(ts|tsx)$": ["ts-jest", {tsconfig: "tsconfig.json"}]
    },
