/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=26420118&pid=c0599c0cf6d175b10d24b92a06f38ca6&tid=e677be136705102df54db317e526f24c",
    "https://www.maimemo.com/share/page?uid=26420118&pid=c0599c0cf6d175b10d24b92a06f38ca6&tid=e677be136705102df54db317e526f24c",
    "https://www.maimemo.com/share/page?uid=26420118&pid=c0599c0cf6d175b10d24b92a06f38ca6&tid=e677be136705102df54db317e526f24c",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/page?sid=1ac84ac2189006d63ff9ee1329449955&uid=26420118&pid=e7c49de522441452fd11421326c0aae3&tid=ca1ac2e6f0894f9dd32b4558bf10e256&view_time=1698910634&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=7ca60894710cc107fafe0edbeaa5c2b0c95126fa52fc963f10499e7117f4bcc7&expired_time=2024-11-01T15:37:13%2008:00",
    "https://www.maimemo.com/page?sid=1ac84ac2189006d63ff9ee1329449955&uid=26420118&pid=e7c49de522441452fd11421326c0aae3&tid=ca1ac2e6f0894f9dd32b4558bf10e256&view_time=1698910634&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=7ca60894710cc107fafe0edbeaa5c2b0c95126fa52fc963f10499e7117f4bcc7&expired_time=2024-11-01T15:37:13%2008:00",
    "https://www.maimemo.com/page?sid=1ac84ac2189006d63ff9ee1329449955&uid=26420118&pid=e7c49de522441452fd11421326c0aae3&tid=ca1ac2e6f0894f9dd32b4558bf10e256&view_time=1698910634&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=7ca60894710cc107fafe0edbeaa5c2b0c95126fa52fc963f10499e7117f4bcc7&expired_time=2024-11-01T15:37:13%2008:00",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
