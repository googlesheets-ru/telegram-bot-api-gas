/* exported TelegramBot */
class TelegramBot {
  constructor(token) {
    this.token = token;
  }
  getURL() {
    return 'https://api.telegram.org/bot' + this.token;
  }

  /**
   *
   * @param {string} method Available method https://core.telegram.org/bots/api#available-methods
   * @param {any} data
   * @returns {globalThis.URL_Fetch.HTTPResponse}
   */
  getResponse(method, data) {
    const httpResponse = UrlFetchApp.fetch(this.getURL() + '/' + method, {
      method: 'post',
      payload: data,
      muteHttpExceptions: true,
    });

    return httpResponse;
  }

  getUpdates() {
    return UrlFetchApp.fetch(`${this.getURL()}/getUpdates`);
  }

  getMe() {
    return this.getResponse('getMe').getContentText();
  }

  getFile(fileId) {
    return this.getResponse('getFile', { file_id: fileId }).getContentText();
  }

  setWebhook(url) {
    return this.getResponse('setWebhook', { url: url }).getContentText();
  }

  getWebhookInfo() {
    return this.getResponse('getWebhookInfo').getContentText();
  }

  sendMessage(chatId, text, parseMode) {
    parseMode = parseMode || '';
    return this.getResponse('sendMessage', {
      chat_id: '' + chatId,
      text: text,
      parse_mode: parseMode,
    }).getContentText();
  }

  sendMessageRaw(options) {
    return this.getResponse('sendMessage', options).getContentText();
  }

  sendPhoto(chatId, photo, caption) {
    return this.getResponse('sendPhoto', {
      chat_id: '' + chatId,
      photo: photo,
      caption: caption || '',
    }).getContentText();
  }

  sendDocument(chatId, document, caption) {
    return this.getResponse('sendDocument', {
      chat_id: '' + chatId,
      document: document,
      caption: caption || '',
    }).getContentText();
  }
}
