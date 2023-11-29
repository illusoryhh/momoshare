/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/page?sid=2fcf683f6ab845b2f379ea4caf26ca3a&uid=26420118&pid=4ae1160f59431ccc747c36b6479beeb4&tid=46c74cf68e9380432d6015483bf79298&view_time=1701245223&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=4cb9695d65b946f96c3eff268fe522e80b73fc5c491e0634d85eeb62b234f55f&expired_time=2024-11-28T16:07:02%2008:00",
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
    
    "https://www.maimemo.com/page?sid=2fcf683f6ab845b2f379ea4caf26ca3a&uid=26420118&pid=4ae1160f59431ccc747c36b6479beeb4&tid=46c74cf68e9380432d6015483bf79298&view_time=1701245223&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=4cb9695d65b946f96c3eff268fe522e80b73fc5c491e0634d85eeb62b234f55f&expired_time=2024-11-28T16:07:02%2008:00",
    "https://www.maimemo.com/page?sid=2fcf683f6ab845b2f379ea4caf26ca3a&uid=26420118&pid=4ae1160f59431ccc747c36b6479beeb4&tid=46c74cf68e9380432d6015483bf79298&view_time=1701245223&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=4cb9695d65b946f96c3eff268fe522e80b73fc5c491e0634d85eeb62b234f55f&expired_time=2024-11-28T16:07:02%2008:00",
    "https://www.maimemo.com/page?sid=2fcf683f6ab845b2f379ea4caf26ca3a&uid=26420118&pid=4ae1160f59431ccc747c36b6479beeb4&tid=46c74cf68e9380432d6015483bf79298&view_time=1701245223&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=4cb9695d65b946f96c3eff268fe522e80b73fc5c491e0634d85eeb62b234f55f&expired_time=2024-11-28T16:07:02%2008:00",
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
