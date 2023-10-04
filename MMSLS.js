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
    
    "https://www.maimemo.com/page?sid=a8cde5494d6f401459cda1d5f567534d&uid=26420118&pid=9c9deb16df0a91266eeddf518ccb6da2&tid=9b329406fd2ef8c39d50d63131c61efd&view_time=1696406732&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=b208033f5677acc85e753fc592e8b162375653757a0b2c0255c13836e47f2eb6&expired_time=2024-10-03T16:05:31%2008:00",
    "https://www.maimemo.com/page?sid=a8cde5494d6f401459cda1d5f567534d&uid=26420118&pid=9c9deb16df0a91266eeddf518ccb6da2&tid=9b329406fd2ef8c39d50d63131c61efd&view_time=1696406732&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=b208033f5677acc85e753fc592e8b162375653757a0b2c0255c13836e47f2eb6&expired_time=2024-10-03T16:05:31%2008:00",
    "https://www.maimemo.com/page?sid=a8cde5494d6f401459cda1d5f567534d&uid=26420118&pid=9c9deb16df0a91266eeddf518ccb6da2&tid=9b329406fd2ef8c39d50d63131c61efd&view_time=1696406732&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=b208033f5677acc85e753fc592e8b162375653757a0b2c0255c13836e47f2eb6&expired_time=2024-10-03T16:05:31%2008:00",
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
