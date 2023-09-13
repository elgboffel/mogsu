import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  schema: "https://cdn.builder.io/api/v1/graphql/ffb2ed83b4ea4cbaa059204ca3693d3a",
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
