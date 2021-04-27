# CMS Menu GraphQL

Local test:

```bash
npm run start:dev

curl 'http://localhost:4000/graphql' \
  -H 'Connection: keep-alive' \
  -H 'Pragma: no-cache' \
  -H 'Cache-Control: no-cache' \
  -H 'sec-ch-ua: "Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"' \
  -H 'Accept-Language: eng' \
  -H 'x-subscription-code: FREE' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36' \
  -H 'x-client-version: 1001' \
  -H 'content-type: application/json' \
  -H 'accept: */*' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'x-platform-code: ANDROID' \
  -H 'x-country-code: in' \
  -H 'X-HS-UserToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ1bV9hY2Nlc3MiLCJleHAiOjE2MTg4MzYwNjgsImlhdCI6MTYxODgzNTc2OCwiaXNzIjoiVFMiLCJqdGkiOiI0OTk2M2YxNmI1NDk0ZWI0YTVhNDdhYjE0NjViZWYwZiIsInN1YiI6IntcImhJZFwiOlwiOWYzMzI2MTljZGI4NDYyOTlkNTgzOTY0NDE3ZGI3ZDRcIixcInBJZFwiOlwiOTZjNjY1NjcxYTJiNGY3Y2E4MzY4MjVkNDBkMjM3NzZcIixcIm5hbWVcIjpcIkd1ZXN0IFVzZXJcIixcImlwXCI6XCIxMTQuMjUzLjI0LjE5OFwiLFwiY291bnRyeUNvZGVcIjpcImluXCIsXCJjdXN0b21lclR5cGVcIjpcIm51XCIsXCJ0eXBlXCI6XCJndWVzdFwiLFwiaXNFbWFpbFZlcmlmaWVkXCI6ZmFsc2UsXCJpc1Bob25lVmVyaWZpZWRcIjpmYWxzZSxcImRldmljZUlkXCI6XCJjMTNlNDc5Yi0zYWIxLTQ5OTUtOTA0MS1lNzVhNmIxODQwY2FcIixcInByb2ZpbGVcIjpcIkFEVUxUXCIsXCJ2ZXJzaW9uXCI6XCJ2MlwiLFwic3Vic2NyaXB0aW9uc1wiOntcImluXCI6e319LFwiaXNzdWVkQXRcIjoxNjE4ODM1NzY4NDQyfSIsInZlcnNpb24iOiIxXzAifQ._Y5OrDKdqSVZDoJDrmH31HDbz4pVFbtD6-zVFRK5t94' \
  -H 'Origin: http://localhost:4000' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: http://localhost:4000/' \
  --data-raw '{"operationName":null,"variables":{},"query":"{\n  menu {\n    statusCode\n    body {\n      results {\n        title\n        menuItems {\n          name\n          subItem {\n            name\n          }\n        }\n      }\n    }\n  }\n}\n"}' \
  --compressed
```
