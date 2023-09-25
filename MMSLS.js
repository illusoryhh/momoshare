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
    
    "https://www.maimemo.com/page?sid=371d866789db98340502f2d929567948&uid=26420118&pid=f6a29b3caceb2ac456c1391a13c57b1e&tid=574f16d86cb69bb28637ef1417c48c56&view_time=1695561007&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=f3f5491c8e8865d1b79ddcccb5ee9d0df0ce230fa131cae851183626101f301a&expired_time=2024-09-23T21:10:07%2008:00",
    "https://www.maimemo.com/page?sid=371d866789db98340502f2d929567948&uid=26420118&pid=f6a29b3caceb2ac456c1391a13c57b1e&tid=574f16d86cb69bb28637ef1417c48c56&view_time=1695561007&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=f3f5491c8e8865d1b79ddcccb5ee9d0df0ce230fa131cae851183626101f301a&expired_time=2024-09-23T21:10:07%2008:00",
    "https://www.maimemo.com/page?sid=371d866789db98340502f2d929567948&uid=26420118&pid=f6a29b3caceb2ac456c1391a13c57b1e&tid=574f16d86cb69bb28637ef1417c48c56&view_time=1695561007&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=f3f5491c8e8865d1b79ddcccb5ee9d0df0ce230fa131cae851183626101f301a&expired_time=2024-09-23T21:10:07%2008:00",
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
