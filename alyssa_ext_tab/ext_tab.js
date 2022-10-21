chrome.runtime.onInstalled.addListener(async() => {
  let url = chrome.runtime.getURL('ext_tab.html');
  let tab = await chrome.tabs.create({url});
  console.log(`Created tab ${tab.id}`);
  });