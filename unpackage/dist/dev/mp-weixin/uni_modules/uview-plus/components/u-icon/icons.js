"use strict";
const icons = {
  "uicon-level": "\uE693",
  "uicon-column-line": "\uE68E",
  "uicon-checkbox-mark": "\uE807",
  "uicon-folder": "\uE7F5",
  "uicon-movie": "\uE7F6",
  "uicon-star-fill": "\uE669",
  "uicon-star": "\uE65F",
  "uicon-phone-fill": "\uE64F",
  "uicon-phone": "\uE622",
  "uicon-apple-fill": "\uE881",
  "uicon-chrome-circle-fill": "\uE885",
  "uicon-backspace": "\uE67B",
  "uicon-attach": "\uE632",
  "uicon-cut": "\uE948",
  "uicon-empty-car": "\uE602",
  "uicon-empty-coupon": "\uE682",
  "uicon-empty-address": "\uE646",
  "uicon-empty-favor": "\uE67C",
  "uicon-empty-permission": "\uE686",
  "uicon-empty-news": "\uE687",
  "uicon-empty-search": "\uE664",
  "uicon-github-circle-fill": "\uE887",
  "uicon-rmb": "\uE608",
  "uicon-person-delete-fill": "\uE66A",
  "uicon-reload": "\uE788",
  "uicon-order": "\uE68F",
  "uicon-server-man": "\uE6BC",
  "uicon-search": "\uE62A",
  "uicon-fingerprint": "\uE955",
  "uicon-more-dot-fill": "\uE630",
  "uicon-scan": "\uE662",
  "uicon-share-square": "\uE60B",
  "uicon-map": "\uE61D",
  "uicon-map-fill": "\uE64E",
  "uicon-tags": "\uE629",
  "uicon-tags-fill": "\uE651",
  "uicon-bookmark-fill": "\uE63B",
  "uicon-bookmark": "\uE60A",
  "uicon-eye": "\uE613",
  "uicon-eye-fill": "\uE641",
  "uicon-mic": "\uE64A",
  "uicon-mic-off": "\uE649",
  "uicon-calendar": "\uE66E",
  "uicon-calendar-fill": "\uE634",
  "uicon-trash": "\uE623",
  "uicon-trash-fill": "\uE658",
  "uicon-play-left": "\uE66D",
  "uicon-play-right": "\uE610",
  "uicon-minus": "\uE618",
  "uicon-plus": "\uE62D",
  "uicon-info": "\uE653",
  "uicon-info-circle": "\uE7D2",
  "uicon-info-circle-fill": "\uE64B",
  "uicon-question": "\uE715",
  "uicon-error": "\uE6D3",
  "uicon-close": "\uE685",
  "uicon-checkmark": "\uE6A8",
  "uicon-android-circle-fill": "\uE67E",
  "uicon-android-fill": "\uE67D",
  "uicon-ie": "\uE87B",
  "uicon-IE-circle-fill": "\uE889",
  "uicon-google": "\uE87A",
  "uicon-google-circle-fill": "\uE88A",
  "uicon-setting-fill": "\uE872",
  "uicon-setting": "\uE61F",
  "uicon-minus-square-fill": "\uE855",
  "uicon-plus-square-fill": "\uE856",
  "uicon-heart": "\uE7DF",
  "uicon-heart-fill": "\uE851",
  "uicon-camera": "\uE7D7",
  "uicon-camera-fill": "\uE870",
  "uicon-more-circle": "\uE63E",
  "uicon-more-circle-fill": "\uE645",
  "uicon-chat": "\uE620",
  "uicon-chat-fill": "\uE61E",
  "uicon-bag-fill": "\uE617",
  "uicon-bag": "\uE619",
  "uicon-error-circle-fill": "\uE62C",
  "uicon-error-circle": "\uE624",
  "uicon-close-circle": "\uE63F",
  "uicon-close-circle-fill": "\uE637",
  "uicon-checkmark-circle": "\uE63D",
  "uicon-checkmark-circle-fill": "\uE635",
  "uicon-question-circle-fill": "\uE666",
  "uicon-question-circle": "\uE625",
  "uicon-share": "\uE631",
  "uicon-share-fill": "\uE65E",
  "uicon-shopping-cart": "\uE621",
  "uicon-shopping-cart-fill": "\uE65D",
  "uicon-bell": "\uE609",
  "uicon-bell-fill": "\uE640",
  "uicon-list": "\uE650",
  "uicon-list-dot": "\uE616",
  "uicon-zhihu": "\uE6BA",
  "uicon-zhihu-circle-fill": "\uE709",
  "uicon-zhifubao": "\uE6B9",
  "uicon-zhifubao-circle-fill": "\uE6B8",
  "uicon-weixin-circle-fill": "\uE6B1",
  "uicon-weixin-fill": "\uE6B2",
  "uicon-twitter-circle-fill": "\uE6AB",
  "uicon-twitter": "\uE6AA",
  "uicon-taobao-circle-fill": "\uE6A7",
  "uicon-taobao": "\uE6A6",
  "uicon-weibo-circle-fill": "\uE6A5",
  "uicon-weibo": "\uE6A4",
  "uicon-qq-fill": "\uE6A1",
  "uicon-qq-circle-fill": "\uE6A0",
  "uicon-moments-circel-fill": "\uE69A",
  "uicon-moments": "\uE69B",
  "uicon-qzone": "\uE695",
  "uicon-qzone-circle-fill": "\uE696",
  "uicon-baidu-circle-fill": "\uE680",
  "uicon-baidu": "\uE681",
  "uicon-facebook-circle-fill": "\uE68A",
  "uicon-facebook": "\uE689",
  "uicon-car": "\uE60C",
  "uicon-car-fill": "\uE636",
  "uicon-warning-fill": "\uE64D",
  "uicon-warning": "\uE694",
  "uicon-clock-fill": "\uE638",
  "uicon-clock": "\uE60F",
  "uicon-edit-pen": "\uE612",
  "uicon-edit-pen-fill": "\uE66B",
  "uicon-email": "\uE611",
  "uicon-email-fill": "\uE642",
  "uicon-minus-circle": "\uE61B",
  "uicon-minus-circle-fill": "\uE652",
  "uicon-plus-circle": "\uE62E",
  "uicon-plus-circle-fill": "\uE661",
  "uicon-file-text": "\uE663",
  "uicon-file-text-fill": "\uE665",
  "uicon-pushpin": "\uE7E3",
  "uicon-pushpin-fill": "\uE86E",
  "uicon-grid": "\uE673",
  "uicon-grid-fill": "\uE678",
  "uicon-play-circle": "\uE647",
  "uicon-play-circle-fill": "\uE655",
  "uicon-pause-circle-fill": "\uE654",
  "uicon-pause": "\uE8FA",
  "uicon-pause-circle": "\uE643",
  "uicon-eye-off": "\uE648",
  "uicon-eye-off-outline": "\uE62B",
  "uicon-gift-fill": "\uE65C",
  "uicon-gift": "\uE65B",
  "uicon-rmb-circle-fill": "\uE657",
  "uicon-rmb-circle": "\uE677",
  "uicon-kefu-ermai": "\uE656",
  "uicon-server-fill": "\uE751",
  "uicon-coupon-fill": "\uE8C4",
  "uicon-coupon": "\uE8AE",
  "uicon-integral": "\uE704",
  "uicon-integral-fill": "\uE703",
  "uicon-home-fill": "\uE964",
  "uicon-home": "\uE965",
  "uicon-hourglass-half-fill": "\uE966",
  "uicon-hourglass": "\uE967",
  "uicon-account": "\uE628",
  "uicon-plus-people-fill": "\uE626",
  "uicon-minus-people-fill": "\uE615",
  "uicon-account-fill": "\uE614",
  "uicon-thumb-down-fill": "\uE726",
  "uicon-thumb-down": "\uE727",
  "uicon-thumb-up": "\uE733",
  "uicon-thumb-up-fill": "\uE72F",
  "uicon-lock-fill": "\uE979",
  "uicon-lock-open": "\uE973",
  "uicon-lock-opened-fill": "\uE974",
  "uicon-lock": "\uE97A",
  "uicon-red-packet-fill": "\uE690",
  "uicon-photo-fill": "\uE98B",
  "uicon-photo": "\uE98D",
  "uicon-volume-off-fill": "\uE659",
  "uicon-volume-off": "\uE644",
  "uicon-volume-fill": "\uE670",
  "uicon-volume": "\uE633",
  "uicon-red-packet": "\uE691",
  "uicon-download": "\uE63C",
  "uicon-arrow-up-fill": "\uE6B0",
  "uicon-arrow-down-fill": "\uE600",
  "uicon-play-left-fill": "\uE675",
  "uicon-play-right-fill": "\uE676",
  "uicon-rewind-left-fill": "\uE679",
  "uicon-rewind-right-fill": "\uE67A",
  "uicon-arrow-downward": "\uE604",
  "uicon-arrow-leftward": "\uE601",
  "uicon-arrow-rightward": "\uE603",
  "uicon-arrow-upward": "\uE607",
  "uicon-arrow-down": "\uE60D",
  "uicon-arrow-right": "\uE605",
  "uicon-arrow-left": "\uE60E",
  "uicon-arrow-up": "\uE606",
  "uicon-skip-back-left": "\uE674",
  "uicon-skip-forward-right": "\uE672",
  "uicon-rewind-right": "\uE66F",
  "uicon-rewind-left": "\uE671",
  "uicon-arrow-right-double": "\uE68D",
  "uicon-arrow-left-double": "\uE68C",
  "uicon-wifi-off": "\uE668",
  "uicon-wifi": "\uE667",
  "uicon-empty-data": "\uE62F",
  "uicon-empty-history": "\uE684",
  "uicon-empty-list": "\uE68B",
  "uicon-empty-page": "\uE627",
  "uicon-empty-order": "\uE639",
  "uicon-man": "\uE697",
  "uicon-woman": "\uE69C",
  "uicon-man-add": "\uE61C",
  "uicon-man-add-fill": "\uE64C",
  "uicon-man-delete": "\uE61A",
  "uicon-man-delete-fill": "\uE66A",
  "uicon-zh": "\uE70A",
  "uicon-en": "\uE692"
};
exports.icons = icons;