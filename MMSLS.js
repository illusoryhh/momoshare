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
    
    "https://www.maimemo.com/page?sid=58fdcd08ff4a556ae4f4cd62fde668be&uid=26420118&pid=9c9deb16df0a91266eeddf518ccb6da2&tid=9b329406fd2ef8c39d50d63131c61efd&view_time=1696556592&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=b0a210dd51fc0afd13c89090eb3ee232c1319e72b2fc237ab456d95aaff0c012&expired_time=2024-10-05T09:43:11%2008:00",
    "https://www.maimemo.com/page?sid=58fdcd08ff4a556ae4f4cd62fde668be&uid=26420118&pid=9c9deb16df0a91266eeddf518ccb6da2&tid=9b329406fd2ef8c39d50d63131c61efd&view_time=1696556592&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=b0a210dd51fc0afd13c89090eb3ee232c1319e72b2fc237ab456d95aaff0c012&expired_time=2024-10-05T09:43:11%2008:00",
    "https://www.maimemo.com/page?sid=58fdcd08ff4a556ae4f4cd62fde668be&uid=26420118&pid=9c9deb16df0a91266eeddf518ccb6da2&tid=9b329406fd2ef8c39d50d63131c61efd&view_time=1696556592&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=b0a210dd51fc0afd13c89090eb3ee232c1319e72b2fc237ab456d95aaff0c012&expired_time=2024-10-05T09:43:11%2008:00",
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
