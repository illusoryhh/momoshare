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
    
    "https://www.maimemo.com/page?sid=d941d03a12e9776d7de18aa7e8b31858&uid=26420118&pid=eadb9c5bed8d2456db22fab94a9f9ba6&tid=680b144c66fae2f334f39bd659e555eb&view_time=1695743236&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=f6ca81295ac6b5dcabd922df86ca434f3ed3ed33e7978272ffce3ab2d02e12e9&expired_time=2024-09-25T23:47:16%2008:00",
    "https://www.maimemo.com/page?sid=d941d03a12e9776d7de18aa7e8b31858&uid=26420118&pid=eadb9c5bed8d2456db22fab94a9f9ba6&tid=680b144c66fae2f334f39bd659e555eb&view_time=1695743236&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=f6ca81295ac6b5dcabd922df86ca434f3ed3ed33e7978272ffce3ab2d02e12e9&expired_time=2024-09-25T23:47:16%2008:00",
    "https://www.maimemo.com/page?sid=d941d03a12e9776d7de18aa7e8b31858&uid=26420118&pid=eadb9c5bed8d2456db22fab94a9f9ba6&tid=680b144c66fae2f334f39bd659e555eb&view_time=1695743236&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=f6ca81295ac6b5dcabd922df86ca434f3ed3ed33e7978272ffce3ab2d02e12e9&expired_time=2024-09-25T23:47:16%2008:00",
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
