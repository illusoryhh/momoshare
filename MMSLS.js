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
    
    "https://www.maimemo.com/page?sid=81b5304b94750db167ba12e101a9c477&uid=26420118&pid=1e1c2d8cc4410d9789b87cb16cc2b8c1&tid=ed04c86b6700ca66ebee19dd06d841bd&view_time=1699282448&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=63a94ada3ba1b5c745518ce2529502f0da5b150d4b9efdb44776e8705c64610f&expired_time=2024-11-05T22:54:08%2008:00",
    "https://www.maimemo.com/page?sid=81b5304b94750db167ba12e101a9c477&uid=26420118&pid=1e1c2d8cc4410d9789b87cb16cc2b8c1&tid=ed04c86b6700ca66ebee19dd06d841bd&view_time=1699282448&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=63a94ada3ba1b5c745518ce2529502f0da5b150d4b9efdb44776e8705c64610f&expired_time=2024-11-05T22:54:08%2008:00",
    "https://www.maimemo.com/page?sid=81b5304b94750db167ba12e101a9c477&uid=26420118&pid=1e1c2d8cc4410d9789b87cb16cc2b8c1&tid=ed04c86b6700ca66ebee19dd06d841bd&view_time=1699282448&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=63a94ada3ba1b5c745518ce2529502f0da5b150d4b9efdb44776e8705c64610f&expired_time=2024-11-05T22:54:08%2008:00",
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
