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
    
    "https://www.maimemo.com/page?sid=371d866789db98340502f2d929567948&uid=26420118&pid=4672f3a134b77bbd9b8bd3b139f45784&tid=499f0ea6cacaa98f2482c811dffa2ff6&view_time=1695310445&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=394f6a8527f435f7a1a44e4985cce77a27afe1e1290af1b5ca27e4f950156b60&expired_time=2024-09-20T23:34:05%2008:00",
    "https://www.maimemo.com/page?sid=371d866789db98340502f2d929567948&uid=26420118&pid=4672f3a134b77bbd9b8bd3b139f45784&tid=499f0ea6cacaa98f2482c811dffa2ff6&view_time=1695310445&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=394f6a8527f435f7a1a44e4985cce77a27afe1e1290af1b5ca27e4f950156b60&expired_time=2024-09-20T23:34:05%2008:00",
    "https://www.maimemo.com/page?sid=371d866789db98340502f2d929567948&uid=26420118&pid=4672f3a134b77bbd9b8bd3b139f45784&tid=499f0ea6cacaa98f2482c811dffa2ff6&view_time=1695310445&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=394f6a8527f435f7a1a44e4985cce77a27afe1e1290af1b5ca27e4f950156b60&expired_time=2024-09-20T23:34:05%2008:00",
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
