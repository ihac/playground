import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import { URLSearchParamsInit } from "apollo-server-env";

export class PersonaLayoutAPI extends RESTDataSource {
  baseURL = "https://persona-layout-pp-in-k8s.pp.hotstar-labs.com/";

  willSendRequest(request: RequestOptions): void {
    request.headers.set("x-client-version", "1001");
    request.headers.set("x-country-code", "in");
    request.headers.set("x-subscription-type", "FREE");
    request.headers.set("x-platform-code", "ANDROID");
    request.headers.set("Accept-Language", "eng");
    request.headers.set("x-country-code", "in");
    request.headers.set(
      "X-HS-UserToken",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ1bV9hY2Nlc3MiLCJleHAiOjE2MTg4MzYwNjgsImlhdCI6MTYxODgzNTc2OCwiaXNzIjoiVFMiLCJqdGkiOiI0OTk2M2YxNmI1NDk0ZWI0YTVhNDdhYjE0NjViZWYwZiIsInN1YiI6IntcImhJZFwiOlwiOWYzMzI2MTljZGI4NDYyOTlkNTgzOTY0NDE3ZGI3ZDRcIixcInBJZFwiOlwiOTZjNjY1NjcxYTJiNGY3Y2E4MzY4MjVkNDBkMjM3NzZcIixcIm5hbWVcIjpcIkd1ZXN0IFVzZXJcIixcImlwXCI6XCIxMTQuMjUzLjI0LjE5OFwiLFwiY291bnRyeUNvZGVcIjpcImluXCIsXCJjdXN0b21lclR5cGVcIjpcIm51XCIsXCJ0eXBlXCI6XCJndWVzdFwiLFwiaXNFbWFpbFZlcmlmaWVkXCI6ZmFsc2UsXCJpc1Bob25lVmVyaWZpZWRcIjpmYWxzZSxcImRldmljZUlkXCI6XCJjMTNlNDc5Yi0zYWIxLTQ5OTUtOTA0MS1lNzVhNmIxODQwY2FcIixcInByb2ZpbGVcIjpcIkFEVUxUXCIsXCJ2ZXJzaW9uXCI6XCJ2MlwiLFwic3Vic2NyaXB0aW9uc1wiOntcImluXCI6e319LFwiaXNzdWVkQXRcIjoxNjE4ODM1NzY4NDQyfSIsInZlcnNpb24iOiIxXzAifQ._Y5OrDKdqSVZDoJDrmH31HDbz4pVFbtD6-zVFRK5t94"
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
