## SSR源码

### client
1. webapck方式
    - 为何还要启用webpackDevSErver？ ，ssr不是有 server端吗
```js
const { startServerBuild } = await import('ssr-webpack')
const { getServerWebpack } = await import('../config/server')
const serverConfigChain = new WebpackChain()

const { startClientServer } = await import('ssr-webpack')
const { getClientWebpack } = await import('../config')
const clientConfigChain = new WebpackChain()
await Promise.all([startServerBuild(getServerWebpack(serverConfigChain)), startClientServer(getClientWebpack(clientConfigChain))])


// startServerBuild =》 build server =》 severbundle
// startClientServer =》run WebpackDevServer =》 client manifest + assets
// 通过观察，ssr src/server 与 WebpackDevServer 没有关系
//  src/server 纯粹是服务端代码， controller会生成一个 cxt 留给 render
//  render 经过severbundle方法行具体任务，主要是 根据 ctx.path 找到当前路由的组件，fetchData， 创建 App，data，router，转 stream，再stream。pipe()


```
2. vite方式





### server
1. nest
2. midway