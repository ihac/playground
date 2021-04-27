import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import { URLSearchParamsInit } from "apollo-server-env";

export class PersonaLayoutAPI extends RESTDataSource {
  baseURL = "https://persona-layout-pp-in-k8s.pp.hotstar-labs.com/";

  willSendRequest(request: RequestOptions): void {
    request.headers.set(
      "x-client-version",
      this.context.rawHeaders["x-client-version"]
    );
    request.headers.set(
      "x-country-code",
      this.context.rawHeaders["x-country-code"]
    );
    request.headers.set(
      "x-subscription-type",
      this.context.rawHeaders["x-subscription-type"]
    );
    request.headers.set(
      "x-platform-code",
      this.context.rawHeaders["x-platform-code"]
    );
    request.headers.set(
      "Accept-Language",
      this.context.rawHeaders["accept-language"]
    );
    request.headers.set(
      "X-HS-UserToken",
      this.context.rawHeaders["x-hs-usertoken"]
    );
  }

  async getCompositePage(
    pageId: string,
    params: URLSearchParamsInit = {}
  ): Promise<unknown> {
    return this.get(`/o/v2/page/${pageId}`, params);
  }

  async getTrays(
    pageId: string,
    params: URLSearchParamsInit = {}
  ): Promise<unknown> {
    return this.get(`/o/v2/page/${pageId}/trays`, params);
  }
}
