import { gql } from "apollo-server";

export default gql`
  type PLSResponse {
    body: PLSBody
    statusCodeValue: Int
    statusCode: String
  }

  type PLSBody {
    results: LayoutResponse
  }

  type LayoutResponse {
    uri: String
    pageType: String
    responseType: String
    trays: Page
  }

  """ Page defines something """
  type Page {
    items: [Tray!]
    responseType: String
    nextOffsetURL: String
    offset: Int
    size: Int
    totalPageResults: Int
    totalPages: Int
    totalResults: Int
  }

  type Tray {
    addIdentifier: String
    globalId: String
    id: Int
    """ This is the title of the tray """
    title: String
    traySource: String
    traySourceId: Int
    trayTypeId: Int
    uqId: String
    uri: String
    layoutType: String
    maxAge: Int
    assets: TrayAssets
    error: Error
    recLayoutType: String
  }

  type TrayAssets {
    itemIds: [String!]
    nextOffsetURL: String
    updated_at: Int
    offset: Int
    size: Int
    totalPageResults: Int
    totalPages: Int
    totalResults: Int
  }

  type Error {
    code: String
    message: String
  }

  input Param {
    uqIds: String
    offset: Int
    size: Int
    tao: Int
    tas: Int
  }

  type Query {
    compositePage(pageId: String!, param: Param, nextPage: Boolean): PLSResponse
  }
`;