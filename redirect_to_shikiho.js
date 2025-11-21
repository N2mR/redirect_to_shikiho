chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open_shikiho",
    title: "四季報オンラインで開く",
    contexts: ["page"]
  });
});


chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open_shikiho") {
    const url = tab.url;
    const match = url.match(/quote\/(\d+)\.T/);
    if (match) {
      const code = match[1];
      const shikihoUrl = `https://shikiho.toyokeizai.net/stocks/${code}`;

      chrome.tabs.create({ url: shikihoUrl });
    }
  }
});