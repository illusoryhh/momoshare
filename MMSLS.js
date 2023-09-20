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
    
    "https://www.maimemo.com/page?sid=a84f89781c1e13f117a7fe074a0bbf45&uid=26420118&pid=ccd5866f03f443c32a3ad24402134790&tid=51720c39071b208829aad952b77a82dd&view_time=1695216570&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=f27a8c5d645957e03d630b93d34b50782bf408aea9d120ac2c42499fb3f66af1&expired_time=2024-09-19T21:29:29%2008:00",
    "https://www.maimemo.com/page?sid=a84f89781c1e13f117a7fe074a0bbf45&uid=26420118&pid=ccd5866f03f443c32a3ad24402134790&tid=51720c39071b208829aad952b77a82dd&view_time=1695216570&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=f27a8c5d645957e03d630b93d34b50782bf408aea9d120ac2c42499fb3f66af1&expired_time=2024-09-19T21:29:29%2008:00",
    "https://www.maimemo.com/page?sid=a84f89781c1e13f117a7fe074a0bbf45&uid=26420118&pid=ccd5866f03f443c32a3ad24402134790&tid=51720c39071b208829aad952b77a82dd&view_time=1695216570&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=f27a8c5d645957e03d630b93d34b50782bf408aea9d120ac2c42499fb3f66af1&expired_time=2024-09-19T21:29:29%2008:00",
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
