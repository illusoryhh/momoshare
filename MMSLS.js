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
    
    "https://www.maimemo.com/page?sid=c2914e2b2ec48a0fd7388f33d04d0efc&uid=26420118&pid=34242d128ffd2fa95d836f439d65873b&tid=08b46e480bb0b59c15fb669f5b36bb22&view_time=1698455134&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=9a9d1937b63494548e54cabb853e7306c71250b86a8800669d27164ea90b7ac8&expired_time=2024-10-27T09:05:34%2008:00",
    "https://www.maimemo.com/page?sid=c2914e2b2ec48a0fd7388f33d04d0efc&uid=26420118&pid=34242d128ffd2fa95d836f439d65873b&tid=08b46e480bb0b59c15fb669f5b36bb22&view_time=1698455134&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=9a9d1937b63494548e54cabb853e7306c71250b86a8800669d27164ea90b7ac8&expired_time=2024-10-27T09:05:34%2008:00",
    "https://www.maimemo.com/page?sid=c2914e2b2ec48a0fd7388f33d04d0efc&uid=26420118&pid=34242d128ffd2fa95d836f439d65873b&tid=08b46e480bb0b59c15fb669f5b36bb22&view_time=1698455134&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=9a9d1937b63494548e54cabb853e7306c71250b86a8800669d27164ea90b7ac8&expired_time=2024-10-27T09:05:34%2008:00",
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
