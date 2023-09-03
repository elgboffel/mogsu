import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  schema: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cllkrywks070o01ui6qqpb9gk/master",
  documents: ["src/**/*.graphql"],
  generates: {
    "./generated/index.ts": {
      schema: "./generated/index.ts",
      plugins: ["typescript", "typescript-operations", "typescript-graphql-request"],
      config: {
        gqlImport: "graphql-request#gql",
        dedupeFragments: true,
      },
      overwrite: true,
    },
    "schema.graphql": {
      schema: "schema.graphql",
      plugins: ["schema-ast"],
    },
  },
  watch: false,
};

export default config;
