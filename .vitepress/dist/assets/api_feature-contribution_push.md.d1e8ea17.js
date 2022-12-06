import{_ as n,c as s,o as a,a as t}from"./app.68c6bb90.js";const y='{"title":"\u63A8\u9001","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B\u4EE3\u7801","slug":"\u793A\u4F8B\u4EE3\u7801"},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"}],"relativePath":"api/feature-contribution/push.md","lastUpdated":1658299768000}',p={},o=t(`<h1 id="\u63A8\u9001" tabindex="-1">\u63A8\u9001 <a class="header-anchor" href="#\u63A8\u9001" aria-hidden="true">#</a></h1><p>\u63A8\u9001\u7C7B\u63D2\u4EF6\u5141\u8BB8\u6211\u4EEC\u5C06 Eoapi \u4E0A\u7684\u6570\u636E\u4E00\u952E\u63A8\u9001\u5230\u5404\u4E2A\u5E94\u7528\u5E73\u53F0\uFF0C\u4F8B\u5982\uFF1A</p><ul><li>\u63A8\u9001\u5230\u7F51\u5173\u4E0A\u5B8C\u6210 API \u4E0A\u7EBF</li><li>\u548C\u4F4E\u4EE3\u7801\u5E73\u53F0\u7ED3\u5408\uFF0C\u5C06 API \u5FEB\u901F\u53D8\u6210\u4F4E\u4EE3\u7801\u5E73\u53F0\u4E2D\u53EF\u4F7F\u7528\u7684\u7EC4\u4EF6\u7B49\u3002</li></ul><h2 id="\u793A\u4F8B\u4EE3\u7801" tabindex="-1">\u793A\u4F8B\u4EE3\u7801 <a class="header-anchor" href="#\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a></h2><p>\u4E00\u952E\u5C06 API \u63A8\u9001\u5230\u5176\u4ED6\u5E73\u53F0\uFF1A<a href="https://github.com/eolinker/eoapi-extensions/tree/main/packages/feature/push/eolink" target="_blank" rel="noopener noreferrer">eoapi push eolink</a></p><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">// index.js</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">exportFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;eoapi&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// * \u5BFC\u51FA\u65B9\u5F0F\u5FC5\u987B\u662F\u547D\u540D\u5BFC\u51FA\uFF0C\u65B9\u6CD5\u540D\u9700\u8981\u4E0E\u914D\u7F6E\u4E2D\u7684 action \u5B57\u6BB5\u4E00\u81F4</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">sync_to_remote</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> url<span class="token punctuation">,</span> token <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// * \u4F20\u5165\u53C2\u6570\u662F Eoapi \u7684API\u6570\u636E\u7ED3\u6784</span>
  <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>
    <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// * \u5C06\u6570\u636E\u8F6C\u6210\u6587\u4EF6\u6D41</span>
    <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// * \u5730\u5740\u5728eoapi\u4E2D\u914D\u7F6E</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> token <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> formData<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-json"><pre><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eoapi-foo&quot;</span><span class="token punctuation">,</span> <span class="token comment">// npm\u5305\u540D\u79F0</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Eoapi extension for push api data&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;moduleID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eoapi-foo&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u63D2\u4EF6ID\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49</span>
  <span class="token property">&quot;moduleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eoapi-foo&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u63D2\u4EF6\u540D\u79F0\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49</span>
  <span class="token property">&quot;moduleType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;feature&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;logo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://s3.bmp.ovh/imgs/2022/05/18/d8d200e3dc050831.png&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup -c rollup.config.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:watch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup -w -c rollup.config.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rollup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.70.2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;features&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;apimanage.sync&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sync_to_remote&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u9700\u8981\u4E0E index.js \u4E2D\u7684\u4E3B\u51FD\u6570\u540D\u4FDD\u6301\u4E00\u81F4</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Target&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u663E\u793A\u5728 UI \u4E0A\u63A8\u9001\u533A\u57DF\u7684\u540D\u79F0</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u63D2\u4EF6\u7684\u7B80\u8981\u63CF\u8FF0</span>
      <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;extestion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;configuration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u63D2\u4EF6\u7684\u914D\u7F6E\u4FE1\u606F</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Push&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;eolink.remoteServer.url&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8FDC\u7A0B\u670D\u52A1\u5668\u5730\u5740&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;eolink.remoteServer.token&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;XXXXXXXX&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Token&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),e=[o];function c(u,r,l,k,i,q){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{y as __pageData,m as default};
