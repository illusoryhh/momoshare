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
    
    "https://www.maimemo.com/page?sid=745182d7cf355b93c4a8e4ad4b30e6a2&uid=26420118&pid=4ef7054c9e2a4b9bca8395455ec95d16&tid=82335410dbf9efc7205ca71dda96069c&view_time=1698067120&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=40c7b1056a8565502b711ddb0f52e5319564d4fd53f7d1f5bc8844fc44ade381&expired_time=2024-10-22T21:18:40%2008:00",
    "https://www.maimemo.com/page?sid=745182d7cf355b93c4a8e4ad4b30e6a2&uid=26420118&pid=4ef7054c9e2a4b9bca8395455ec95d16&tid=82335410dbf9efc7205ca71dda96069c&view_time=1698067120&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=40c7b1056a8565502b711ddb0f52e5319564d4fd53f7d1f5bc8844fc44ade381&expired_time=2024-10-22T21:18:40%2008:00",
    "https://www.maimemo.com/page?sid=745182d7cf355b93c4a8e4ad4b30e6a2&uid=26420118&pid=4ef7054c9e2a4b9bca8395455ec95d16&tid=82335410dbf9efc7205ca71dda96069c&view_time=1698067120&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=40c7b1056a8565502b711ddb0f52e5319564d4fd53f7d1f5bc8844fc44ade381&expired_time=2024-10-22T21:18:40%2008:00",
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
