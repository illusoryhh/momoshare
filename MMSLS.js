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
    
    "https://www.maimemo.com/page?sid=6838c9d29ebb2d18ddfdccfc7e35d381&uid=26420118&pid=e9a60ac0a4030bc7150f99b0cd231005&tid=aefa225b0a601fd75446997735454537&view_time=1697201665&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=4086a61f9e1519697689e53af3cf325036e8f91815b5892c0066acb8126313fd&expired_time=2024-10-12T20:54:25%2008:00",
    "https://www.maimemo.com/page?sid=6838c9d29ebb2d18ddfdccfc7e35d381&uid=26420118&pid=e9a60ac0a4030bc7150f99b0cd231005&tid=aefa225b0a601fd75446997735454537&view_time=1697201665&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=4086a61f9e1519697689e53af3cf325036e8f91815b5892c0066acb8126313fd&expired_time=2024-10-12T20:54:25%2008:00",
    "https://www.maimemo.com/page?sid=6838c9d29ebb2d18ddfdccfc7e35d381&uid=26420118&pid=e9a60ac0a4030bc7150f99b0cd231005&tid=aefa225b0a601fd75446997735454537&view_time=1697201665&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=4086a61f9e1519697689e53af3cf325036e8f91815b5892c0066acb8126313fd&expired_time=2024-10-12T20:54:25%2008:00",
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
