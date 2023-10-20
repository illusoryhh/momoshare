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
    
    "https://www.maimemo.com/page?sid=c00d7980b35438413756f841f4fcc98c&uid=26420118&pid=a1878ee730e0a450b14dbd7344206229&tid=529cdaa94fe26daa87ed4efff81bc7ac&view_time=1697774229&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=df4a48ebb9030a46f57f99abd724a5f90b1482ebd0b86226a612405e86c04648&expired_time=2024-10-19T11:57:09%2008:00",
    "https://www.maimemo.com/page?sid=c00d7980b35438413756f841f4fcc98c&uid=26420118&pid=a1878ee730e0a450b14dbd7344206229&tid=529cdaa94fe26daa87ed4efff81bc7ac&view_time=1697774229&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=df4a48ebb9030a46f57f99abd724a5f90b1482ebd0b86226a612405e86c04648&expired_time=2024-10-19T11:57:09%2008:00",
    "https://www.maimemo.com/page?sid=c00d7980b35438413756f841f4fcc98c&uid=26420118&pid=a1878ee730e0a450b14dbd7344206229&tid=529cdaa94fe26daa87ed4efff81bc7ac&view_time=1697774229&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=df4a48ebb9030a46f57f99abd724a5f90b1482ebd0b86226a612405e86c04648&expired_time=2024-10-19T11:57:09%2008:00",
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
