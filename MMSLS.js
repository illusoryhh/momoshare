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
    
    "https://www.maimemo.com/page?sid=a246a95ad1eb343667cf6195d737a401&uid=26420118&pid=c6ecf45b1ef0e94c8409f1e0452f5697&tid=dd325fe203b54345c3bbf012207445c5&view_time=1699761696&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=b372a7f8ee746e7e13771a5d8eee98f3c3f0b422a041f7b3c58f65848ac90b75&expired_time=2024-11-11T12:01:36%2008:00",
    "https://www.maimemo.com/page?sid=a246a95ad1eb343667cf6195d737a401&uid=26420118&pid=c6ecf45b1ef0e94c8409f1e0452f5697&tid=dd325fe203b54345c3bbf012207445c5&view_time=1699761696&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=b372a7f8ee746e7e13771a5d8eee98f3c3f0b422a041f7b3c58f65848ac90b75&expired_time=2024-11-11T12:01:36%2008:00",
    "https://www.maimemo.com/page?sid=a246a95ad1eb343667cf6195d737a401&uid=26420118&pid=c6ecf45b1ef0e94c8409f1e0452f5697&tid=dd325fe203b54345c3bbf012207445c5&view_time=1699761696&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=b372a7f8ee746e7e13771a5d8eee98f3c3f0b422a041f7b3c58f65848ac90b75&expired_time=2024-11-11T12:01:36%2008:00",
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
