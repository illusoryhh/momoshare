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
    
    "https://www.maimemo.com/page?sid=11bd682602642c5d6514478996beb675&uid=26420118&pid=bf8ad7805795c8c74e8c15d88127d1a1&tid=664d2c3e7d9809a9f012be1e9c2cb951&view_time=1698679107&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=bfd4d9c4cd5afcf600738ca70a351e5838ee73666a99ede1a1ca5218bc55d502&expired_time=2024-10-29T23:18:27%2008:00",
    "https://www.maimemo.com/page?sid=11bd682602642c5d6514478996beb675&uid=26420118&pid=bf8ad7805795c8c74e8c15d88127d1a1&tid=664d2c3e7d9809a9f012be1e9c2cb951&view_time=1698679107&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=bfd4d9c4cd5afcf600738ca70a351e5838ee73666a99ede1a1ca5218bc55d502&expired_time=2024-10-29T23:18:27%2008:00",
    "https://www.maimemo.com/page?sid=11bd682602642c5d6514478996beb675&uid=26420118&pid=bf8ad7805795c8c74e8c15d88127d1a1&tid=664d2c3e7d9809a9f012be1e9c2cb951&view_time=1698679107&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5QzW0mfQewOMijwGr74A9M&token=bfd4d9c4cd5afcf600738ca70a351e5838ee73666a99ede1a1ca5218bc55d502&expired_time=2024-10-29T23:18:27%2008:00",
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
