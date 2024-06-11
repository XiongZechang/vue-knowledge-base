<template>
  <div class="k_index">
    <Navbar/>
    <div class="home">
      <div class="home-right">
        <div class="right-version">
          <div class="llm-chat-demo">
            <span class="chat-demo">Chat Knowledgebase</span><span class="version"> V1</span>
          </div>
        </div>
        <div class="right-body" :class="messages.length === 0 ? 'nodata' : ''" ref="messageContainer">
          <div v-for="(message, index) in messages" class="main-message" :key="index"
               :class="{'user-message': message.sender === 'user', 'friend-message': message.sender === 'friend'}">
            <!-- 显示用户标识和图片 -->
            <div class="message-sender"
                 :class="{'user-message': message.sender === 'user', 'friend-message': message.sender === 'friend'}">
              <img v-if="message.sender === 'user'" src="../../assets/user.png" alt="User Icon" width="20px">
              <img v-else-if="message.sender === 'friend'" src="../../assets/robot.png" alt="Friend Icon" width="20px">
              <span class="message-sender-name"
                :class="message.sender === 'user' ? 'user-color' : 'friend-color'">{{ message.sender }}:</span>
            </div>
            <div v-if="message.sender === 'user'" class="user-message">{{ message.content }}</div>
            <div v-else class="friend-message" v-html="message.content"></div>
          </div>
        </div>
          <div class="right-input" @keyup.enter="handleSearch1">
            <!-- 输入框 -->
            <el-input v-model="queryKeyword" placeholder="给Chat Knowledgebase发送消息" size="large" class="input">
              <template #append>
                <el-button v-if="!loading" type="primary" @click="handleSearch1">
                  <img width="16" class="up-load" src="../../assets/upload.png">
                </el-button>
                <el-button v-if="loading" type="primary" @click="closeEventSource">
                  <img width="16" class="up-load" src="../../assets/等待.png" >
                </el-button>
              </template>
            </el-input>
            <!-- 查询按钮 -->
          </div>
        <div class="sec-notice">Chat Knowledgebase may also make mistakes. Please consider checking important information.</div>
   
  
      </div>
    </div>
  </div>
  </template>
  <!-- https://console.xfyun.cn/services/bm35 -->
  <script>
  import { defineComponent } from 'vue';
  import MarkdownIt from 'markdown-it';
  import markdownItFootnote from 'markdown-it-footnote';
  import markdownItTaskLists from 'markdown-it-task-lists';
  import markdownItAbbr from 'markdown-it-abbr';
  import markdownItContainer from 'markdown-it-container';
  import hljs from 'highlight.js';
  import markdownItHighlightjs from 'markdown-it-highlightjs';
  import { Navbar } from '../../layout/components';
  import CryptoJs  from 'crypto-js'
  import { Base64 } from 'js-base64';
  export default defineComponent({
    name: 'chat',
    components: {
      Navbar,
    },
    computed: {
      // 将 Markdown 文本渲染为 HTML
      html() {
        return this.md.render(this.message);
      }
    },
    data() {
      return {
        md: new MarkdownIt()
            .use(markdownItFootnote)
            .use(markdownItTaskLists, {enabled: true})
            .use(markdownItAbbr)
            .use(markdownItContainer, 'warning')
            .use(markdownItHighlightjs, {hljs}), 
        queryKeyword: '',
        tempResult: {},
        loading: false,
        messages: [],
        socket: null,
        eventSource: null, // 添加事件源变量
        stopIcon: '../../assets/upload.png',
        uploadIcon: '../../assets/上传.png',
        requestObj:{
          APPID: 'b9df0395',
          APISecret: 'YzFhYmYxNTJiOGUyYmJkYTdlNzBjYWQy',
          APIKey: '35acb84ad8c210fe105a1132fea3ac35',
          Uid: 'xzc',
          sparkResult: '',
        },
        weburl: 'wss://spark-api.xf-yun.com/v3.5/chat',
      }
    },
    methods: {
      getWebsocketUrl(){
        return new Promise((resovle, reject) => {
          // let url = "wss://spark-api.xf-yun.com/v1.1/chat";
          let url = 'wss://spark-api.xf-yun.com/v3.5/chat' // 可以改成2.1的接口
          let host = 'spark-api.xf-yun.com' // 主机地址
          let apiKeyName = 'api_key' // API密钥的参数名
          let date = new Date().toGMTString() // 当前时间的GMT字符串表示
          let algorithm = 'hmac-sha256'// 使用的哈希算法
          let headers = 'host date request-line' // 鉴权所需的头部信息
          // let signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v1.1/chat HTTP/1.1`;
          let signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v3.5/chat HTTP/1.1` // 构建用于生成签名的原始字符串
          // 加密方法
          let signatureSha = CryptoJs.HmacSHA256(
            signatureOrigin,
            this.requestObj.APISecret
          )
          // 生成的加密签名
          let signature = CryptoJs.enc.Base64.stringify(signatureSha)
          // 构建鉴权头部信息
          let authorizationOrigin = `${apiKeyName}="${this.requestObj.APIKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`
          let authorization = Base64.encode(authorizationOrigin)
          // 构建最终的 WebSocket URL
          url = `${url}?authorization=${authorization}&date=${encodeURI(
            date
          )}&host=${host}`
          resovle(url)
        })
      },
      
      async handleSearch1() {
        if (this.loading) {
          return;
        }
        const keyword = this.queryKeyword;
        this.loading = true;
        // 获取请求地址
        const myUrl = await this.getWebsocketUrl()
        this.messages.push({
            content: keyword,
            sender: 'user'
          });
        let socket = new WebSocket(myUrl)
        socket.addEventListener('open', (event) => {
          console.log('开启连接！！', event)
          // 发送消息
          let params = {
            header: {
              app_id: this.requestObj.APPID,
              uid: this.requestObj.Uid,
            },
            parameter: {
              chat: {
                domain: 'generalv3.5',
                temperature: 0.5,
                max_tokens: 4096,
              },
            },
            payload: {
              message: {
                text: [
                  { role: 'user', content: this.queryKeyword }, 
                ],
              },
            },
          }
          socket.send(JSON.stringify(params))
        })
        let sseMessage = {
          orgcontent: '',
          content: '',
          sender: 'friend',
          zxakey: '123'
        };
        this.$nextTick(() => {
          this.scrollToBottom();
        });
        let friendMessage = sseMessage;
        let messgecnt = 0;
        this.messages.push(friendMessage);
        socket.addEventListener('message', (event) => {
          let data = JSON.parse(event.data)
          this.queryKeyword = '';
          console.log('收到消息！！', data)
          // 累加接收到的数据到 friendMessage.orgcontent 中
          friendMessage.orgcontent += data.payload.choices.text[0].content.toLocaleString();
          friendMessage.orgcontent = friendMessage.orgcontent.replace(/\*\*\s*([^*]*?)\s*(:\s*)?\*\*/g, '**$1$2**');
          // 更新 friendMessage.content，这里假设 md.render 可以处理累加的字符串
          friendMessage.content = this.md.render(friendMessage.orgcontent);
          this.$forceUpdate();
          this.scrollToBottom();
          if (data.header.code !== 0) {
            console.log('出错了', data.header.code, ':', data.header.message)
            // 出错了"手动关闭连接"
            socket.close()
          }
          if (data.header.code === 0) {
            // 对话已经完成
            if (data.payload.choices.text && data.header.status === 2) {
              this.loading = false;
              this.scrollToBottom();
              setTimeout(() => {
                // "对话完成，手动关闭连接"
                socket.close()
              }, 3000)
            }
          }
        })
        socket.addEventListener('close', (event) => {
          this.queryKeyword = ''
          this.loading = false;
          console.log('连接关闭！！', event)
          friendMessage.content = this.md.render(friendMessage.orgcontent);
          // 清空输入框
        })
        socket.addEventListener('error', (event) => {})
      },
      closeEventSource() {
        this.loading = false;
        if (this.eventSource) {
          this.eventSource.close();
        }
      },
      scrollToBottom() {
        const messageContainer = this.$refs.messageContainer;
        if (messageContainer) {
          messageContainer.scrollTop = messageContainer.scrollHeight;
        }
      },
    },
  })
  </script>
  
  <style scoped>
  .k_index{
    margin: 0 150px;
    height: 100%;
    /* position: relative; */
  }
  .home {
    height: 100%;
    width: 100%;
    display: flex;
  }
  
  .home-right {
    width: 100%;
  }
  
  .right-version {
    /* width: 100%; */
    margin: auto;
    /* background-color: #F9FFD8; */
    height: 5%;
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: 15px;
    margin-bottom: 12px;
  }
  
  .version {
    color: rgb(155, 155, 155);
  }
  
  .llm-chat-demo {
    width: 80%;
    margin: auto;
    /* margin-left: 20px; */
    /* font-family: "黑体", "SimHei", sans-serif; */
    font-family: "Microsoft YaHei", sans-serif, system;
    font-variation-settings: normal;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    color-scheme: light;
  }
  
  .chat-demo {
    opacity: 0.65; /* 设置透明度为 0.7，您可以根据需要调整这个值 */
  }
  
  .right-body {
    height: 75%;
    overflow-y: auto;
  }
  
  .user-color {
    color: #75A4C9;
  }
  
  .friend-color {
    color: #9D69B1;
  }
  .nodata {
    background-image: url("../../assets/chat.png");
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center 40%;
  }
  
  .main-message {
    margin: auto;
    width: 80%;
    justify-content: center;
  }
  
  .message-sender-name {
    margin-left: 10px;
    /* font-family: "黑体", "SimHei", sans-serif; */
    font-family: Söhne, ui-sans-serif, system;
    font-weight: 550;
    font-size: 18px;
  }
  
  .right-input {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6.5%;
    position: relative;
  }
  
  .sec-notice {
    height: 8%;
    font-size: 16px;
    font-family: Söhne, ui-sans-serif;
    color: rgb(155, 155, 155);
    display: flex;
    justify-content: center;
  }
  
  .input {
    width: 80%;
    margin-right: 5px;
  }
  
  .up-load {
    /* width: 30px; */
  }
  
  :v-deep(.el-button) {
    padding: 5px 6px;
  }
  
  :v-deep(.el-input__inner) {
    height: 52px;
    border-radius: 15px;
    border: 1px solid #DCDFE6;
  }
  
  :v-deep(.el-button--primary) {
    position: relative;
    right: 3.5%;
    background-color: rgba(180, 180, 180, 0.3) !important;
    color: black !important;
    border-color: rgba(180, 180, 180, 0.3) !important;
  }
  
  .user-message {
    text-align: left;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 15px;
  
  }
  
  .friend-message {
    background-color: rgba(227, 255, 255, 0.2); /* 这里的 0.5 是透明度，你可以根据需要调整 */
    text-align: left;
    padding: 5px;
    margin-bottom: 5px;
  }
  
  :v-deep(.friend-message pre .hljs) {
    border-radius: 10px !important; /* 圆角 */
    background-color: #FAF7F7; /* 例子中的背景色 */
  }
  
  /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
    width: 6px; /* 设置滚动条宽度 */
  }
  
  /* 设置滚动条轨道的样式 */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* 设置滚动条轨道的背景色 */
  }
  
  /* 设置滚动条滑块的样式 */
  ::-webkit-scrollbar-thumb {
    background: #888; /* 设置滚动条滑块的背景色 */
    border-radius: 3px; /* 设置滚动条滑块的圆角 */
  }
  
  /* 鼠标悬停时滚动条滑块的样式 */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* 设置鼠标悬停时滚动条滑块的背景色 */
  }
  </style>
  