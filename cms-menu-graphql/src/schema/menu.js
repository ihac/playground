import { gql } from "apollo-server";

export default gql`
  type Response {
    body: Results
    statusCodeValue: Int
    statusCode: String
  }

  type Results {
    results: MenuResponse
  }

  type MenuResponse {
    title: String
    responseType: String
    menuItems: [MenuItem!]
  }

  type MenuItem {
      id: Int
      name: String
      pageUri: String
      categoryId: Int
      contentId: Int
      pageType: String
      subItem: [MenuItem!]
      menuItemViewType: String
      displayName: String
      urlModifier: String
      pageProvider: String
      globalId: String
      pageId: String
  }

  type Query {
    menu: Response
  }
`;