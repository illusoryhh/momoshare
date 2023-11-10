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
    
    "https://www.maimemo.com/page?sid=c129be2677bacd5e4c1e9a33e3513707&uid=26420118&pid=3245e1c29b743671d4260121fe3c5650&tid=44e5a45d08ccacd6292cfa205e4ac119&view_time=1699607800&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=459abe7b4ea045a58e58f253420f345f9b284bb3d4544812d05a8ac4bb44945c&expired_time=2024-11-09T17:16:40%2008:00",
    "https://www.maimemo.com/page?sid=c129be2677bacd5e4c1e9a33e3513707&uid=26420118&pid=3245e1c29b743671d4260121fe3c5650&tid=44e5a45d08ccacd6292cfa205e4ac119&view_time=1699607800&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=459abe7b4ea045a58e58f253420f345f9b284bb3d4544812d05a8ac4bb44945c&expired_time=2024-11-09T17:16:40%2008:00",
    "https://www.maimemo.com/page?sid=c129be2677bacd5e4c1e9a33e3513707&uid=26420118&pid=3245e1c29b743671d4260121fe3c5650&tid=44e5a45d08ccacd6292cfa205e4ac119&view_time=1699607800&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=459abe7b4ea045a58e58f253420f345f9b284bb3d4544812d05a8ac4bb44945c&expired_time=2024-11-09T17:16:40%2008:00",
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
