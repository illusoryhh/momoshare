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
    
    "https://www.maimemo.com/page?sid=6838c9d29ebb2d18ddfdccfc7e35d381&uid=26420118&pid=6336fb28cbf861f4b8116c4c567fe128&tid=3ca67a289cd15c1653ddf08313fe610a&view_time=1697299649&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=6dab5b00511e95ce1c5014f571cce2d0ea24fef545c5121a4babf880940c57c0&expired_time=2024-10-14T00:07:29%2008:00",
    "https://www.maimemo.com/page?sid=6838c9d29ebb2d18ddfdccfc7e35d381&uid=26420118&pid=6336fb28cbf861f4b8116c4c567fe128&tid=3ca67a289cd15c1653ddf08313fe610a&view_time=1697299649&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=6dab5b00511e95ce1c5014f571cce2d0ea24fef545c5121a4babf880940c57c0&expired_time=2024-10-14T00:07:29%2008:00",
    "https://www.maimemo.com/page?sid=6838c9d29ebb2d18ddfdccfc7e35d381&uid=26420118&pid=6336fb28cbf861f4b8116c4c567fe128&tid=3ca67a289cd15c1653ddf08313fe610a&view_time=1697299649&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=6dab5b00511e95ce1c5014f571cce2d0ea24fef545c5121a4babf880940c57c0&expired_time=2024-10-14T00:07:29%2008:00",
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
