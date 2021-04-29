#! /bin/bash

rover subgraph introspect http://localhost:4001/graphql > src/schema/pls.graphql
rover subgraph introspect http://localhost:4002/graphql > src/schema/cms.graphql
rover supergraph compose --config src/schema/supergraph-config.yaml > src/schema/supergraph.graphql

npm run start:dev
