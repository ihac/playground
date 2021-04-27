#! /bin/bash

npm init --yes
npm install -D apollo-server graphql apollo-datasource-rest @apollo/gateway \
    typescript @types/node ts-node nodemon eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

npx tsc --init  --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib ES2020 --module ES2020 --allowJs true --noImplicitAny true --target ES2020 --moduleResolution node
mkdir src

cat <<EOF > nodemon.json
{
  "watch": [
    "src"
  ],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "node --loader ts-node/esm ./src/index.ts"
}
EOF

cat <<EOF > .eslintignore
node_modules
build
EOF

cat <<EOF > .eslintrc
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": 1
  }
}
EOF

cat <<EOF > .gitignore
build/
EOF

## manual setting

# package.json: 
#   "type": "module",
#   "start:dev": "nodemon",
#   "lint": "eslint . --ext .ts",
