/* exported TelegramBot */
class TelegramBot {
  constructor(token) {
    this.token = token;
  }

  /**
   * @type {{string}}
   */
  get url() {
    return 'https://api.telegram.org/bot' + this.token;
  }

  /**
   *
   * @param {string} method Available method https://core.telegram.org/bots/api#available-methods
   * @param {any} data
   * @returns {globalThis.URL_Fetch.HTTPResponse}
   */
  getResponse(method, data) {
    const httpResponse = UrlFetchApp.fetch(this.url + '/' + method, {
      method: 'post',
      payload: data,
      muteHttpExceptions: true,
    });
    return httpResponse;
  }

  /**
   *
   * @returns {TelegramBot.Update[]}
   */
  getUpdates() {
    return JSON.parse(this.getResponse('getUpdates').getContentText());
  }

  getMe() {
    return JSON.parse(this.getResponse('getMe').getContentText());
  }

  getFile(fileId) {
    return JSON.parse(this.getResponse('getFile', { file_id: fileId }).getContentText());
  }

  setWebhook(url) {
    return JSON.parse(this.getResponse('setWebhook', { url: url }).getContentText());
  }

  getWebhookInfo() {
    return JSON.parse(this.getResponse('getWebhookInfo').getContentText());
  }

  sendMessage(chatId, text, parseMode) {
    parseMode = parseMode || '';
    const httpResponse = this.getResponse('sendMessage', {
      chat_id: '' + chatId,
      text: text,
      parse_mode: parseMode,
    });
    const contentText = httpResponse.getContentText();
    return JSON.parse(contentText);
  }

  sendMessageRaw(options) {
    return JSON.parse(this.getResponse('sendMessage', options).getContentText());
  }

  sendPhoto(chatId, photo, caption, parseMode) {
    parseMode = parseMode || '';
    const httpResponse = this.getResponse('sendPhoto', {
      chat_id: '' + chatId,
      photo: photo,
      caption: caption || '',
      parse_mode: parseMode,
    });
    const contentText = httpResponse.getContentText();
    return JSON.parse(contentText);
  }

  sendDocument(chatId, document, caption) {
    return JSON.parse(
      this.getResponse('sendDocument', {
        chat_id: '' + chatId,
        document: document,
        caption: caption || '',
      }).getContentText(),
    );
  }
}
