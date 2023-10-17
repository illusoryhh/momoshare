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
    
    "https://www.maimemo.com/page?sid=6965b541cbd3a203409eed12d83d53dd&uid=26420118&pid=cc4e5ca887efaca8e87706590296ec6a&tid=ef337e7409f4eda3342dba40903b23b3&view_time=1697515091&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=ec6fdb9d1d2355afafa990e6524c6e3e0fab32a4599f36057674eae0a0817c54&expired_time=2024-10-16T11:58:11%2008:00",
    "https://www.maimemo.com/page?sid=6965b541cbd3a203409eed12d83d53dd&uid=26420118&pid=cc4e5ca887efaca8e87706590296ec6a&tid=ef337e7409f4eda3342dba40903b23b3&view_time=1697515091&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=ec6fdb9d1d2355afafa990e6524c6e3e0fab32a4599f36057674eae0a0817c54&expired_time=2024-10-16T11:58:11%2008:00",
    "https://www.maimemo.com/page?sid=6965b541cbd3a203409eed12d83d53dd&uid=26420118&pid=cc4e5ca887efaca8e87706590296ec6a&tid=ef337e7409f4eda3342dba40903b23b3&view_time=1697515091&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=ec6fdb9d1d2355afafa990e6524c6e3e0fab32a4599f36057674eae0a0817c54&expired_time=2024-10-16T11:58:11%2008:00",
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
