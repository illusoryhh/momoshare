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
    
    "https://www.maimemo.com/page?sid=f2c35ce1c83e452dfe4f93c7b074288a&uid=26420118&pid=691e97cfdb940abb3b08195d2f2d12c1&tid=606d940ff9df08eed6091c99960f7368&view_time=1699095716&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=d9652fedd36527a42e59a798c02493acf54ca1912bd53d6bc25e796d5e338b82&expired_time=2024-11-03T19:01:56%2008:00",
    "https://www.maimemo.com/page?sid=f2c35ce1c83e452dfe4f93c7b074288a&uid=26420118&pid=691e97cfdb940abb3b08195d2f2d12c1&tid=606d940ff9df08eed6091c99960f7368&view_time=1699095716&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=d9652fedd36527a42e59a798c02493acf54ca1912bd53d6bc25e796d5e338b82&expired_time=2024-11-03T19:01:56%2008:00",
    "https://www.maimemo.com/page?sid=f2c35ce1c83e452dfe4f93c7b074288a&uid=26420118&pid=691e97cfdb940abb3b08195d2f2d12c1&tid=606d940ff9df08eed6091c99960f7368&view_time=1699095716&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=d9652fedd36527a42e59a798c02493acf54ca1912bd53d6bc25e796d5e338b82&expired_time=2024-11-03T19:01:56%2008:00",
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
