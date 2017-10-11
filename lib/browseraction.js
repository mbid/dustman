'use strict'

function updateBrowserAction (state) {
  if (state.paused === true) {
    browser.browserAction.setBadgeText({text: '🚫'})
    browser.browserAction.setBadgeBackgroundColor({color: [0, 0, 0, 0]})
    browser.browserAction.setTitle({title: 'Dustman (paused)'})
  } else {
    browser.browserAction.setBadgeText({text: ''})
    browser.browserAction.setTitle({title: 'Dustman'})
  }

  if (state.settings.saveClosedPages === true) {
    browser.browserAction.setPopup(
      {popup: browser.extension.getURL('panel/panel.html')}
    )
  } else {
    browser.browserAction.setPopup({popup: ''})
  }
}