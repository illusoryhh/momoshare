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
    
    "https://www.maimemo.com/page?sid=872179680f36b058a2fda559958b989e&uid=26420118&pid=077b5b8c4bb42da20e5079b240f2ec7a&tid=43091e54b112ca1d0e59274617f93e7a&view_time=1699443377&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=c59a9b4b07a89f3ab199bd9c1620b395f62bad60c7d3db4fda96c1090fcf79db&expired_time=2024-11-07T19:36:16%2008:00",
    "https://www.maimemo.com/page?sid=872179680f36b058a2fda559958b989e&uid=26420118&pid=077b5b8c4bb42da20e5079b240f2ec7a&tid=43091e54b112ca1d0e59274617f93e7a&view_time=1699443377&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=c59a9b4b07a89f3ab199bd9c1620b395f62bad60c7d3db4fda96c1090fcf79db&expired_time=2024-11-07T19:36:16%2008:00",
    "https://www.maimemo.com/page?sid=872179680f36b058a2fda559958b989e&uid=26420118&pid=077b5b8c4bb42da20e5079b240f2ec7a&tid=43091e54b112ca1d0e59274617f93e7a&view_time=1699443377&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=c59a9b4b07a89f3ab199bd9c1620b395f62bad60c7d3db4fda96c1090fcf79db&expired_time=2024-11-07T19:36:16%2008:00",
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
