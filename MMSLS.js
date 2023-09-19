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
    
    "https://www.maimemo.com/page?sid=eb32d44c6bb5462691c82391d2deef36&uid=26420118&pid=b830aa6849734742f7350ffb8cc9d9b4&tid=e0548054a7bc54b117c8a361dcae7fbc&view_time=1695119079&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=dd09c28fe951f48d435a346f5891319c673a557fe26a59e6c5a4f49f4de156db&expired_time=2024-09-18T18:24:39%2008:00",
    "https://www.maimemo.com/page?sid=eb32d44c6bb5462691c82391d2deef36&uid=26420118&pid=b830aa6849734742f7350ffb8cc9d9b4&tid=e0548054a7bc54b117c8a361dcae7fbc&view_time=1695119079&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=dd09c28fe951f48d435a346f5891319c673a557fe26a59e6c5a4f49f4de156db&expired_time=2024-09-18T18:24:39%2008:00",
    "https://www.maimemo.com/page?sid=eb32d44c6bb5462691c82391d2deef36&uid=26420118&pid=b830aa6849734742f7350ffb8cc9d9b4&tid=e0548054a7bc54b117c8a361dcae7fbc&view_time=1695119079&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=dd09c28fe951f48d435a346f5891319c673a557fe26a59e6c5a4f49f4de156db&expired_time=2024-09-18T18:24:39%2008:00",
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
