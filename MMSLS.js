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
    
    "https://www.maimemo.com/page?sid=7b7a8947bf1c9d0f2c10fe444448b924&uid=26420118&pid=f88883857f0ece7cb78af56b0f495143&tid=a2a97afda2a21d8b5541f8cac02c160d&view_time=1698800736&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=75ea3328af4192902c1bbaf5282a0e0b985913d0b43ac9b8571f8781565019d5&expired_time=2024-10-31T09:05:36%2008:00",
    "https://www.maimemo.com/page?sid=7b7a8947bf1c9d0f2c10fe444448b924&uid=26420118&pid=f88883857f0ece7cb78af56b0f495143&tid=a2a97afda2a21d8b5541f8cac02c160d&view_time=1698800736&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=75ea3328af4192902c1bbaf5282a0e0b985913d0b43ac9b8571f8781565019d5&expired_time=2024-10-31T09:05:36%2008:00",
    "https://www.maimemo.com/page?sid=7b7a8947bf1c9d0f2c10fe444448b924&uid=26420118&pid=f88883857f0ece7cb78af56b0f495143&tid=a2a97afda2a21d8b5541f8cac02c160d&view_time=1698800736&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=75ea3328af4192902c1bbaf5282a0e0b985913d0b43ac9b8571f8781565019d5&expired_time=2024-10-31T09:05:36%2008:00",
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
