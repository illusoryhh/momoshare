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
    
    "https://www.maimemo.com/page?sid=eebc42d31bb457fcbb56c6a1688f80aa&uid=26420118&pid=f542fb78c24b1f186b7fd2a7d86f0d0b&tid=6bff9c37250ecc85e9348cfc3f96b06b&view_time=1695487038&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=68e3236daf6d9beb9ae24ff5372b8ffd87e480085c0174b1e5a0803f3ddf389c&expired_time=2024-09-23T00:37:17%2008:00",
    "https://www.maimemo.com/page?sid=eebc42d31bb457fcbb56c6a1688f80aa&uid=26420118&pid=f542fb78c24b1f186b7fd2a7d86f0d0b&tid=6bff9c37250ecc85e9348cfc3f96b06b&view_time=1695487038&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=68e3236daf6d9beb9ae24ff5372b8ffd87e480085c0174b1e5a0803f3ddf389c&expired_time=2024-09-23T00:37:17%2008:00",
    "https://www.maimemo.com/page?sid=eebc42d31bb457fcbb56c6a1688f80aa&uid=26420118&pid=f542fb78c24b1f186b7fd2a7d86f0d0b&tid=6bff9c37250ecc85e9348cfc3f96b06b&view_time=1695487038&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=68e3236daf6d9beb9ae24ff5372b8ffd87e480085c0174b1e5a0803f3ddf389c&expired_time=2024-09-23T00:37:17%2008:00",
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
