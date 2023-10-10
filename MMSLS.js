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
    
    "https://www.maimemo.com/page?sid=519b3d27ff26ea404f257bf1bfc86c64&uid=26420118&pid=c8f92d63fed8388db0efa043ebf6b614&tid=ad4f2dd31e06f8183f11f2ef8fb99411&view_time=1696904361&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=0c0d9b04e00837c42681c8cd11a32f26eba1196b625dc127a1f9df08d994781f&expired_time=2024-10-09T10:19:20%2008:00",
    "https://www.maimemo.com/page?sid=519b3d27ff26ea404f257bf1bfc86c64&uid=26420118&pid=c8f92d63fed8388db0efa043ebf6b614&tid=ad4f2dd31e06f8183f11f2ef8fb99411&view_time=1696904361&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=0c0d9b04e00837c42681c8cd11a32f26eba1196b625dc127a1f9df08d994781f&expired_time=2024-10-09T10:19:20%2008:00",
    "https://www.maimemo.com/page?sid=519b3d27ff26ea404f257bf1bfc86c64&uid=26420118&pid=c8f92d63fed8388db0efa043ebf6b614&tid=ad4f2dd31e06f8183f11f2ef8fb99411&view_time=1696904361&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=0c0d9b04e00837c42681c8cd11a32f26eba1196b625dc127a1f9df08d994781f&expired_time=2024-10-09T10:19:20%2008:00",
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
