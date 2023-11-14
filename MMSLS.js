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
    
    "https://www.maimemo.com/page?sid=5d6ca140ca446588cff45b018690b2e9&uid=26420118&pid=a373cc19647c05c02040fbd0f49b04b9&tid=2dd638a26f1bb45079c4c4b93d0a3300&view_time=1699956393&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=de5b2911865def7847dd8c77d38483308479418aef338a2d6781e88c25d3799d&expired_time=2024-11-13T18:06:32%2008:00",
    "https://www.maimemo.com/page?sid=5d6ca140ca446588cff45b018690b2e9&uid=26420118&pid=a373cc19647c05c02040fbd0f49b04b9&tid=2dd638a26f1bb45079c4c4b93d0a3300&view_time=1699956393&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=de5b2911865def7847dd8c77d38483308479418aef338a2d6781e88c25d3799d&expired_time=2024-11-13T18:06:32%2008:00",
    "https://www.maimemo.com/page?sid=5d6ca140ca446588cff45b018690b2e9&uid=26420118&pid=a373cc19647c05c02040fbd0f49b04b9&tid=2dd638a26f1bb45079c4c4b93d0a3300&view_time=1699956393&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=de5b2911865def7847dd8c77d38483308479418aef338a2d6781e88c25d3799d&expired_time=2024-11-13T18:06:32%2008:00",
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
