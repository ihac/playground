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
    params: URLSearchParamsInit = {},
    nextPage = false
  ): Promise<unknown> {
    const res = await this.get(`/o/v2/page/${pageId}`, params);
    if (!nextPage) {
      return res;
    }
    return this.get(res.body.results.trays.nextOffsetURL).then((nres) => {
      return {
        ...nres,
        body: {
          ...nres.body,
          results: {
            ...nres.body.results,
            trays: {
              ...nres.body.results.trays,
              items: [
                ...res.body.results.trays.items,
                ...nres.body.results.trays.items,
              ],
            },
          },
        },
      };
    });
  }

  async sendRawRequest(url: string): Promise<unknown> {
    return this.get(url);
  }

  async getTrays(
    pageId: string,
    params: URLSearchParamsInit = {}
  ): Promise<unknown> {
    return this.get(`/o/v2/page/${pageId}/trays`, params);
  }
}
