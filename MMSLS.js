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
    
    "https://www.maimemo.com/page?sid=519b3d27ff26ea404f257bf1bfc86c64&uid=26420118&pid=bff049c6fdf967e37e196d843898b611&tid=f06aa4801beb1806695e10d808f3669a&view_time=1696765129&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=31fffc8a4addfa00b365deafb752e418d915f5b24d9ed57fed29e6fe67a865c2&expired_time=2024-10-07T19:38:49%2008:00",
    "https://www.maimemo.com/page?sid=519b3d27ff26ea404f257bf1bfc86c64&uid=26420118&pid=bff049c6fdf967e37e196d843898b611&tid=f06aa4801beb1806695e10d808f3669a&view_time=1696765129&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=31fffc8a4addfa00b365deafb752e418d915f5b24d9ed57fed29e6fe67a865c2&expired_time=2024-10-07T19:38:49%2008:00",
    "https://www.maimemo.com/page?sid=519b3d27ff26ea404f257bf1bfc86c64&uid=26420118&pid=bff049c6fdf967e37e196d843898b611&tid=f06aa4801beb1806695e10d808f3669a&view_time=1696765129&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=31fffc8a4addfa00b365deafb752e418d915f5b24d9ed57fed29e6fe67a865c2&expired_time=2024-10-07T19:38:49%2008:00",
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
