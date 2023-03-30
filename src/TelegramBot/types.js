/**
 * @typedef {{
 *   update_id: number;
 *   message?: TelegramBot.Message;
 *   edited_message?: TelegramBot.Message;
 *   channel_post?: TelegramBot.Message;
 *   edited_channel_post?: TelegramBot.Message;
 *   inline_query?: TelegramBot.InlineQuery;
 *   chosen_inline_result?: TelegramBot.ChosenInlineResult;
 *   callback_query?: TelegramBot.CallbackQuery;
 *   shipping_query?: TelegramBot.ShippingQuery;
 *   pre_checkout_query?: TelegramBot.PreCheckoutQuery;
 *   poll?: TelegramBot.Poll;
 *   poll_answer?: TelegramBot.PollAnswer;
 *   my_chat_member?: TelegramBot.ChatMemberUpdated;
 *   chat_member?: TelegramBot.ChatMemberUpdated;
 *   chat_join_request?: TelegramBot.ChatJoinRequest;
 * }} TelegramBot.Update
 */

/**
 * @typedef {{
 *   url: string;
 *   has_custom_certificate: boolean;
 *   pending_update_count: number;
 *   ip_address?: string;
 *   last_error_date?: number;
 *   last_error_message?: string;
 *   last_synchronization_error_date?: number;
 *   max_connections?: number;
 *   allowed_updates?: string[];
 * }} TelegramBot.WebhookInfo
 */

/**
 * @typedef {{
 *   id: number;
 *   is_bot: boolean;
 *   first_name: string;
 *   last_name?: string;
 *   username?: string;
 *   language_code?: string;
 *   is_premium?: "true";
 *   added_to_attachment_menu?: "true";
 *   can_join_groups?: boolean;
 *   can_read_all_group_messages?: boolean;
 *   supports_inline_queries?: boolean;
 * }} TelegramBot.User
 */

/**
 * @typedef {{
 *   id: number;
 *   type: string;
 *   title?: string;
 *   username?: string;
 *   first_name?: string;
 *   last_name?: string;
 *   is_forum?: "true";
 *   photo?: TelegramBot.ChatPhoto;
 *   active_usernames?: string[];
 *   emoji_status_custom_emoji_id?: string;
 *   bio?: string;
 *   has_private_forwards?: "true";
 *   has_restricted_voice_and_video_messages?: "true";
 *   join_to_send_messages?: "true";
 *   join_by_request?: "true";
 *   description?: string;
 *   invite_link?: string;
 *   pinned_message?: TelegramBot.Message;
 *   permissions?: TelegramBot.ChatPermissions;
 *   slow_mode_delay?: number;
 *   message_auto_delete_time?: number;
 *   has_aggressive_anti_spam_enabled?: "true";
 *   has_hidden_members?: "true";
 *   has_protected_content?: "true";
 *   sticker_set_name?: string;
 *   can_set_sticker_set?: "true";
 *   linked_chat_id?: number;
 *   location?: TelegramBot.ChatLocation;
 * }} TelegramBot.Chat
 */

/**
 * @typedef {{
 *   message_id: number;
 *   message_thread_id?: number;
 *   from?: TelegramBot.User;
 *   sender_chat?: TelegramBot.Chat;
 *   date: number;
 *   chat: TelegramBot.Chat;
 *   forward_from?: TelegramBot.User;
 *   forward_from_chat?: TelegramBot.Chat;
 *   forward_from_message_id?: number;
 *   forward_signature?: string;
 *   forward_sender_name?: string;
 *   forward_date?: number;
 *   is_topic_message?: "true";
 *   is_automatic_forward?: "true";
 *   reply_to_message?: TelegramBot.Message;
 *   via_bot?: TelegramBot.User;
 *   edit_date?: number;
 *   has_protected_content?: "true";
 *   media_group_id?: string;
 *   author_signature?: string;
 *   text?: string;
 *   entities?: TelegramBot.MessageEntity[];
 *   animation?: TelegramBot.Animation;
 *   audio?: TelegramBot.Audio;
 *   document?: TelegramBot.Document;
 *   photo?: TelegramBot.PhotoSize[];
 *   sticker?: TelegramBot.Sticker;
 *   video?: TelegramBot.Video;
 *   video_note?: TelegramBot.VideoNote;
 *   voice?: TelegramBot.Voice;
 *   caption?: string;
 *   caption_entities?: TelegramBot.MessageEntity[];
 *   has_media_spoiler?: "true";
 *   contact?: TelegramBot.Contact;
 *   dice?: TelegramBot.Dice;
 *   game?: TelegramBot.Game;
 *   poll?: TelegramBot.Poll;
 *   venue?: TelegramBot.Venue;
 *   location?: TelegramBot.Location;
 *   new_chat_members?: TelegramBot.User[];
 *   left_chat_member?: TelegramBot.User;
 *   new_chat_title?: string;
 *   new_chat_photo?: TelegramBot.PhotoSize[];
 *   delete_chat_photo?: "true";
 *   group_chat_created?: "true";
 *   supergroup_chat_created?: "true";
 *   channel_chat_created?: "true";
 *   message_auto_delete_timer_changed?: TelegramBot.MessageAutoDeleteTimerChanged;
 *   migrate_to_chat_id?: number;
 *   migrate_from_chat_id?: number;
 *   pinned_message?: TelegramBot.Message;
 *   invoice?: TelegramBot.Invoice;
 *   successful_payment?: TelegramBot.SuccessfulPayment;
 *   user_shared?: TelegramBot.UserShared;
 *   chat_shared?: TelegramBot.ChatShared;
 *   connected_website?: string;
 *   write_access_allowed?: TelegramBot.WriteAccessAllowed;
 *   passport_data?: TelegramBot.PassportData;
 *   proximity_alert_triggered?: TelegramBot.ProximityAlertTriggered;
 *   forum_topic_created?: TelegramBot.ForumTopicCreated;
 *   forum_topic_edited?: TelegramBot.ForumTopicEdited;
 *   forum_topic_closed?: TelegramBot.ForumTopicClosed;
 *   forum_topic_reopened?: TelegramBot.ForumTopicReopened;
 *   general_forum_topic_hidden?: TelegramBot.GeneralForumTopicHidden;
 *   general_forum_topic_unhidden?: TelegramBot.GeneralForumTopicUnhidden;
 *   video_chat_scheduled?: TelegramBot.VideoChatScheduled;
 *   video_chat_started?: TelegramBot.VideoChatStarted;
 *   video_chat_ended?: TelegramBot.VideoChatEnded;
 *   video_chat_participants_invited?: TelegramBot.VideoChatParticipantsInvited;
 *   web_app_data?: TelegramBot.WebAppData;
 *   reply_markup?: TelegramBot.InlineKeyboardMarkup;
 * }} TelegramBot.Message
 */

/**
 * @typedef {{
 *   message_id: number;
 * }} TelegramBot.MessageId
 */

/**
 * @typedef {{
 *   type: string;
 *   offset: number;
 *   length: number;
 *   url?: string;
 *   user?: TelegramBot.User;
 *   language?: string;
 *   custom_emoji_id?: string;
 * }} TelegramBot.MessageEntity
 */

/**
 * @typedef {{
 *   file_id: string;
 *   file_unique_id: string;
 *   width: number;
 *   height: number;
 *   file_size?: number;
 * }} TelegramBot.PhotoSize
 */

/**
 * @typedef {{
 *   file_id: string;
 *   file_unique_id: string;
 *   width: number;
 *   height: number;
 *   duration: number;
 *   thumbnail?: TelegramBot.PhotoSize;
 *   file_name?: string;
 *   mime_type?: string;
 *   file_size?: number;
 * }} TelegramBot.Animation
 */

/**
 * @typedef {{
 *   file_id: string;
 *   file_unique_id: string;
 *   duration: number;
 *   performer?: string;
 *   title?: string;
 *   file_name?: string;
 *   mime_type?: string;
 *   file_size?: number;
 *   thumbnail?: TelegramBot.PhotoSize;
 * }} TelegramBot.Audio
 */

/**
 * @typedef {{
 *   file_id: string;
 *   file_unique_id: string;
 *   thumbnail?: TelegramBot.PhotoSize;
 *   file_name?: string;
 *   mime_type?: string;
 *   file_size?: number;
 * }} TelegramBot.Document
 */

/**
 * @typedef {{
 *   file_id: string;
 *   file_unique_id: string;
 *   width: number;
 *   height: number;
 *   duration: number;
 *   thumbnail?: TelegramBot.PhotoSize;
 *   file_name?: string;
 *   mime_type?: string;
 *   file_size?: number;
 * }} TelegramBot.Video
 */

/**
 * @typedef {{
 *   file_id: string;
 *   file_unique_id: string;
 *   length: number;
 *   duration: number;
 *   thumbnail?: TelegramBot.PhotoSize;
 *   file_size?: number;
 * }} TelegramBot.VideoNote
 */

/**
 * @typedef {{
 *   file_id: string;
 *   file_unique_id: string;
 *   duration: number;
 *   mime_type?: string;
 *   file_size?: number;
 * }} TelegramBot.Voice
 */

/**
 * @typedef {{
 *   phone_number: string;
 *   first_name: string;
 *   last_name?: string;
 *   user_id?: number;
 *   vcard?: string;
 * }} TelegramBot.Contact
 */

/**
 * @typedef {{
 *   emoji: string;
 *   value: number;
 * }} TelegramBot.Dice
 */

/**
 * @typedef {{
 *   text: string;
 *   voter_count: number;
 * }} TelegramBot.PollOption
 */

/**
 * @typedef {{
 *   poll_id: string;
 *   user: TelegramBot.User;
 *   option_ids: number[];
 * }} TelegramBot.PollAnswer
 */

/**
 * @typedef {{
 *   id: string;
 *   question: string;
 *   options: TelegramBot.PollOption[];
 *   total_voter_count: number;
 *   is_closed: boolean;
 *   is_anonymous: boolean;
 *   type: string;
 *   allows_multiple_answers: boolean;
 *   correct_option_id?: number;
 *   explanation?: string;
 *   explanation_entities?: TelegramBot.MessageEntity[];
 *   open_period?: number;
 *   close_date?: number;
 * }} TelegramBot.Poll
 */

/**
 * @typedef {{
 *   longitude: number;
 *   latitude: number;
 *   horizontal_accuracy?: number;
 *   live_period?: number;
 *   heading?: number;
 *   proximity_alert_radius?: number;
 * }} TelegramBot.Location
 */

/**
 * @typedef {{
 *   location: TelegramBot.Location;
 *   title: string;
 *   address: string;
 *   foursquare_id?: string;
 *   foursquare_type?: string;
 *   google_place_id?: string;
 *   google_place_type?: string;
 * }} TelegramBot.Venue
 */

/**
 * @typedef {{
 *   data: string;
 *   button_text: string;
 * }} TelegramBot.WebAppData
 */

/**
 * @typedef {{
 *   traveler: TelegramBot.User;
 *   watcher: TelegramBot.User;
 *   distance: number;
 * }} TelegramBot.ProximityAlertTriggered
 */

/**
 * @typedef {{
 *   message_auto_delete_time: number;
 * }} TelegramBot.MessageAutoDeleteTimerChanged
 */

/**
 * @typedef {{
 *   name: string;
 *   icon_color: number;
 *   icon_custom_emoji_id?: string;
 * }} TelegramBot.ForumTopicCreated
 */

/**
 * @typedef {{
 *   name?: string;
 *   icon_custom_emoji_id?: string;
 * }} TelegramBot.ForumTopicEdited
 */

/**
 * @typedef {{
 *   request_id: number;
 *   user_id: number;
 * }} TelegramBot.UserShared
 */

/**
 * @typedef {{
 *   request_id: number;
 *   chat_id: number;
 * }} TelegramBot.ChatShared
 */

/**
 * @typedef {{
 *   start_date: number;
 * }} TelegramBot.VideoChatScheduled
 */

/**
 * @typedef {{
 *   duration: number;
 * }} TelegramBot.VideoChatEnded
 */

/**
 * @typedef {{
 *   users: TelegramBot.User[];
 * }} TelegramBot.VideoChatParticipantsInvited
 */

/**
 * @typedef {{
 *   total_count: number;
 *   photos: TelegramBot.PhotoSize[][];
 * }} TelegramBot.UserProfilePhotos
 */

/**
 * @typedef {{
 *   file_id: string;
 *   file_unique_id: string;
 *   file_size?: number;
 *   file_path?: string;
 * }} TelegramBot.File
 */

/**
 * @typedef {{
 *   url: string;
 * }} TelegramBot.WebAppInfo
 */

/**
 * @typedef {{
 *   keyboard: TelegramBot.KeyboardButton[][];
 *   is_persistent?: boolean;
 *   resize_keyboard?: boolean;
 *   one_time_keyboard?: boolean;
 *   input_field_placeholder?: string;
 *   selective?: boolean;
 * }} TelegramBot.ReplyKeyboardMarkup
 */

/**
 * @typedef {{
 *   text: string;
 *   request_user?: TelegramBot.KeyboardButtonRequestUser;
 *   request_chat?: TelegramBot.KeyboardButtonRequestChat;
 *   request_contact?: boolean;
 *   request_location?: boolean;
 *   request_poll?: TelegramBot.KeyboardButtonPollType;
 *   web_app?: TelegramBot.WebAppInfo;
 * }} TelegramBot.KeyboardButton
 */

/**
 * @typedef {{
 *   request_id: number;
 *   user_is_bot?: boolean;
 *   user_is_premium?: boolean;
 * }} TelegramBot.KeyboardButtonRequestUser
 */

/**
 * @typedef {{
 *   request_id: number;
 *   chat_is_channel: boolean;
 *   chat_is_forum?: boolean;
 *   chat_has_username?: boolean;
 *   chat_is_created?: boolean;
 *   user_administrator_rights?: TelegramBot.ChatAdministratorRights;
 *   bot_administrator_rights?: TelegramBot.ChatAdministratorRights;
 *   bot_is_member?: boolean;
 * }} TelegramBot.KeyboardButtonRequestChat
 */

/**
 * @typedef {{
 *   type?: string;
 * }} TelegramBot.KeyboardButtonPollType
 */

/**
 * @typedef {{
 *   remove_keyboard: "true";
 *   selective?: boolean;
 * }} TelegramBot.ReplyKeyboardRemove
 */

/**
 * @typedef {{
 *   inline_keyboard: TelegramBot.InlineKeyboardButton[][];
 * }} TelegramBot.InlineKeyboardMarkup
 */

/**
 * @typedef {{
 *   text: string;
 *   url?: string;
 *   callback_data?: string;
 *   web_app?: TelegramBot.WebAppInfo;
 *   login_url?: TelegramBot.LoginUrl;
 *   switch_inline_query?: string;
 *   switch_inline_query_current_chat?: string;
 *   callback_game?: TelegramBot.CallbackGame;
 *   pay?: boolean;
 * }} TelegramBot.InlineKeyboardButton
 */

/**
 * @typedef {{
 *   url: string;
 *   forward_text?: string;
 *   bot_username?: string;
 *   request_write_access?: boolean;
 * }} TelegramBot.LoginUrl
 */

/**
 * @typedef {{
 *   id: string;
 *   from: TelegramBot.User;
 *   message?: TelegramBot.Message;
 *   inline_message_id?: string;
 *   chat_instance: string;
 *   data?: string;
 *   game_short_name?: string;
 * }} TelegramBot.CallbackQuery
 */

/**
 * @typedef {{
 *   force_reply: "true";
 *   input_field_placeholder?: string;
 *   selective?: boolean;
 * }} TelegramBot.ForceReply
 */

/**
 * @typedef {{
 *   small_file_id: string;
 *   small_file_unique_id: string;
 *   big_file_id: string;
 *   big_file_unique_id: string;
 * }} TelegramBot.ChatPhoto
 */

/**
 * @typedef {{
 *   invite_link: string;
 *   creator: TelegramBot.User;
 *   creates_join_request: boolean;
 *   is_primary: boolean;
 *   is_revoked: boolean;
 *   name?: string;
 *   expire_date?: number;
 *   member_limit?: number;
 *   pending_join_request_count?: number;
 * }} TelegramBot.ChatInviteLink
 */

/**
 * @typedef {{
 *   is_anonymous: boolean;
 *   can_manage_chat: boolean;
 *   can_delete_messages: boolean;
 *   can_manage_video_chats: boolean;
 *   can_restrict_members: boolean;
 *   can_promote_members: boolean;
 *   can_change_info: boolean;
 *   can_invite_users: boolean;
 *   can_post_messages?: boolean;
 *   can_edit_messages?: boolean;
 *   can_pin_messages?: boolean;
 *   can_manage_topics?: boolean;
 * }} TelegramBot.ChatAdministratorRights
 */

/**
 * @typedef {{
 *   status: string;
 *   user: TelegramBot.User;
 *   is_anonymous: boolean;
 *   custom_title?: string;
 * }} TelegramBot.ChatMemberOwner
 */

/**
 * @typedef {{
 *   status: string;
 *   user: TelegramBot.User;
 *   can_be_edited: boolean;
 *   is_anonymous: boolean;
 *   can_manage_chat: boolean;
 *   can_delete_messages: boolean;
 *   can_manage_video_chats: boolean;
 *   can_restrict_members: boolean;
 *   can_promote_members: boolean;
 *   can_change_info: boolean;
 *   can_invite_users: boolean;
 *   can_post_messages?: boolean;
 *   can_edit_messages?: boolean;
 *   can_pin_messages?: boolean;
 *   can_manage_topics?: boolean;
 *   custom_title?: string;
 * }} TelegramBot.ChatMemberAdministrator
 */

/**
 * @typedef {{
 *   status: string;
 *   user: TelegramBot.User;
 * }} TelegramBot.ChatMemberMember
 */

/**
 * @typedef {{
 *   status: string;
 *   user: TelegramBot.User;
 *   is_member: boolean;
 *   can_send_messages: boolean;
 *   can_send_audios: boolean;
 *   can_send_documents: boolean;
 *   can_send_photos: boolean;
 *   can_send_videos: boolean;
 *   can_send_video_notes: boolean;
 *   can_send_voice_notes: boolean;
 *   can_send_polls: boolean;
 *   can_send_other_messages: boolean;
 *   can_add_web_page_previews: boolean;
 *   can_change_info: boolean;
 *   can_invite_users: boolean;
 *   can_pin_messages: boolean;
 *   can_manage_topics: boolean;
 *   until_date: number;
 * }} TelegramBot.ChatMemberRestricted
 */

/**
 * @typedef {{
 *   status: string;
 *   user: TelegramBot.User;
 * }} TelegramBot.ChatMemberLeft
 */

/**
 * @typedef {{
 *   status: string;
 *   user: TelegramBot.User;
 *   until_date: number;
 * }} TelegramBot.ChatMemberBanned
 */

/**
 * @typedef {{
 *   chat: TelegramBot.Chat;
 *   from: TelegramBot.User;
 *   date: number;
 *   old_chat_member: TelegramBot.ChatMember;
 *   new_chat_member: TelegramBot.ChatMember;
 *   invite_link?: TelegramBot.ChatInviteLink;
 * }} TelegramBot.ChatMemberUpdated
 */

/**
 * @typedef {{
 *   chat: TelegramBot.Chat;
 *   from: TelegramBot.User;
 *   user_chat_id: number;
 *   date: number;
 *   bio?: string;
 *   invite_link?: TelegramBot.ChatInviteLink;
 * }} TelegramBot.ChatJoinRequest
 */

/**
 * @typedef {{
 *   can_send_messages?: boolean;
 *   can_send_audios?: boolean;
 *   can_send_documents?: boolean;
 *   can_send_photos?: boolean;
 *   can_send_videos?: boolean;
 *   can_send_video_notes?: boolean;
 *   can_send_voice_notes?: boolean;
 *   can_send_polls?: boolean;
 *   can_send_other_messages?: boolean;
 *   can_add_web_page_previews?: boolean;
 *   can_change_info?: boolean;
 *   can_invite_users?: boolean;
 *   can_pin_messages?: boolean;
 *   can_manage_topics?: boolean;
 * }} TelegramBot.ChatPermissions
 */

/**
 * @typedef {{
 *   location: TelegramBot.Location;
 *   address: string;
 * }} TelegramBot.ChatLocation
 */

/**
 * @typedef {{
 *   message_thread_id: number;
 *   name: string;
 *   icon_color: number;
 *   icon_custom_emoji_id?: string;
 * }} TelegramBot.ForumTopic
 */

/**
 * @typedef {{
 *   command: string;
 *   description: string;
 * }} TelegramBot.BotCommand
 */

/**
 * @typedef {{
 *   type: string;
 * }} TelegramBot.BotCommandScopeDefault
 */

/**
 * @typedef {{
 *   type: string;
 * }} TelegramBot.BotCommandScopeAllPrivateChats
 */

/**
 * @typedef {{
 *   type: string;
 * }} TelegramBot.BotCommandScopeAllGroupChats
 */

/**
 * @typedef {{
 *   type: string;
 * }} TelegramBot.BotCommandScopeAllChatAdministrators
 */

/**
 * @typedef {{
 *   type: string;
 *   chat_id: number | string;
 * }} TelegramBot.BotCommandScopeChat
 */

/**
 * @typedef {{
 *   type: string;
 *   chat_id: number | string;
 * }} TelegramBot.BotCommandScopeChatAdministrators
 */

/**
 * @typedef {{
 *   type: string;
 *   chat_id: number | string;
 *   user_id: number;
 * }} TelegramBot.BotCommandScopeChatMember
 */

/**
 * @typedef {{
 *   description: string;
 * }} TelegramBot.BotDescription
 */

/**
 * @typedef {{
 *   short_description: string;
 * }} TelegramBot.BotShortDescription
 */

/**
 * @typedef {{
 *   type: string;
 * }} TelegramBot.MenuButtonCommands
 */

/**
 * @typedef {{
 *   type: string;
 *   text: string;
 *   web_app: TelegramBot.WebAppInfo;
 * }} TelegramBot.MenuButtonWebApp
 */

/**
 * @typedef {{
 *   type: string;
 * }} TelegramBot.MenuButtonDefault
 */

/**
 * @typedef {{
 *   migrate_to_chat_id?: number;
 *   retry_after?: number;
 * }} TelegramBot.ResponseParameters
 */

/**
 * @typedef {{
 *   type: string;
 *   media: string;
 *   caption?: string;
 *   parse_mode?: string;
 *   caption_entities?: TelegramBot.MessageEntity[];
 *   has_spoiler?: boolean;
 * }} TelegramBot.InputMediaPhoto
 */

/**
 * @typedef {{
 *   type: string;
 *   media: string;
 *   thumbnail?: TelegramBot.InputFile | string;
 *   caption?: string;
 *   parse_mode?: string;
 *   caption_entities?: TelegramBot.MessageEntity[];
 *   width?: number;
 *   height?: number;
 *   duration?: number;
 *   supports_streaming?: boolean;
 *   has_spoiler?: boolean;
 * }} TelegramBot.InputMediaVideo
 */

/**
 * @typedef {{
 *   type: string;
 *   media: string;
 *   thumbnail?: TelegramBot.InputFile | string;
 *   caption?: string;
 *   parse_mode?: string;
 *   caption_entities?: TelegramBot.MessageEntity[];
 *   width?: number;
 *   height?: number;
 *   duration?: number;
 *   has_spoiler?: boolean;
 * }} TelegramBot.InputMediaAnimation
 */

/**
 * @typedef {{
 *   type: string;
 *   media: string;
 *   thumbnail?: TelegramBot.InputFile | string;
 *   caption?: string;
 *   parse_mode?: string;
 *   caption_entities?: TelegramBot.MessageEntity[];
 *   duration?: number;
 *   performer?: string;
 *   title?: string;
 * }} TelegramBot.InputMediaAudio
 */

/**
 * @typedef {{
 *   type: string;
 *   media: string;
 *   thumbnail?: TelegramBot.InputFile | string;
 *   caption?: string;
 *   parse_mode?: string;
 *   caption_entities?: TelegramBot.MessageEntity[];
 *   disable_content_type_detection?: boolean;
 * }} TelegramBot.InputMediaDocument
 */