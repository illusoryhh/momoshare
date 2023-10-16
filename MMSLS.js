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
    
    "https://www.maimemo.com/page?sid=b4aa2cffca186be89896f52b894e6146&uid=26420118&pid=a8f9bccd031e902f2cccc869e37bbbb6&tid=d7e01bb3aaa875bec0f2827d543b44de&view_time=1697421008&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=8d6bc0b5ae66d33cb0ceeb6009cf6b2e8ae51e0d62298c1d8335616619a702a6&expired_time=2024-10-15T09:50:07%2008:00",
    "https://www.maimemo.com/page?sid=b4aa2cffca186be89896f52b894e6146&uid=26420118&pid=a8f9bccd031e902f2cccc869e37bbbb6&tid=d7e01bb3aaa875bec0f2827d543b44de&view_time=1697421008&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=8d6bc0b5ae66d33cb0ceeb6009cf6b2e8ae51e0d62298c1d8335616619a702a6&expired_time=2024-10-15T09:50:07%2008:00",
    "https://www.maimemo.com/page?sid=b4aa2cffca186be89896f52b894e6146&uid=26420118&pid=a8f9bccd031e902f2cccc869e37bbbb6&tid=d7e01bb3aaa875bec0f2827d543b44de&view_time=1697421008&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=8d6bc0b5ae66d33cb0ceeb6009cf6b2e8ae51e0d62298c1d8335616619a702a6&expired_time=2024-10-15T09:50:07%2008:00",
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
