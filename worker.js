export default {
  async fetch(request) {
    const url = new URL(request.url);
    const targetUrl = "https://www.pubgmobile.com/act/a20210922unbind/green_v071/" + url.search;

    const modifiedHeaders = new Headers(request.headers);
    modifiedHeaders.set("User-Agent", "Mozilla/5.0 (Linux; Android 10; PUBG)");
    modifiedHeaders.set("Referer", "https://www.pubgmobile.com/");
    
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: modifiedHeaders,
      redirect: "follow"
    });

    return response;
  }
};
