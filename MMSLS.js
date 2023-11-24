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
    
    "https://www.maimemo.com/page?sid=f12c288e20e8df381034403780fd031c&uid=26420118&pid=e9200cedca0d9c0ba1a2e0664f34e8e7&tid=bd8ff630e4278e748574844c67192eb1&view_time=1700826839&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=f2688ded87b2116d37cbc6954627258730a8692d45e14356f35fe5468ad864c6&expired_time=2024-11-23T19:53:59%2008:00",
    "https://www.maimemo.com/page?sid=f12c288e20e8df381034403780fd031c&uid=26420118&pid=e9200cedca0d9c0ba1a2e0664f34e8e7&tid=bd8ff630e4278e748574844c67192eb1&view_time=1700826839&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=f2688ded87b2116d37cbc6954627258730a8692d45e14356f35fe5468ad864c6&expired_time=2024-11-23T19:53:59%2008:00",
    "https://www.maimemo.com/page?sid=f12c288e20e8df381034403780fd031c&uid=26420118&pid=e9200cedca0d9c0ba1a2e0664f34e8e7&tid=bd8ff630e4278e748574844c67192eb1&view_time=1700826839&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=f2688ded87b2116d37cbc6954627258730a8692d45e14356f35fe5468ad864c6&expired_time=2024-11-23T19:53:59%2008:00",
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
