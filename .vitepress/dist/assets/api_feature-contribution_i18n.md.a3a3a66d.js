import{_ as n,c as s,o as a,a as t}from"./app.68c6bb90.js";const g='{"title":"\u56FD\u9645\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B\u4EE3\u7801","slug":"\u793A\u4F8B\u4EE3\u7801"},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":2,"title":"locale \u8868","slug":"locale-\u8868"}],"relativePath":"api/feature-contribution/i18n.md","lastUpdated":1658299768000}',o={},p=t(`<h1 id="\u56FD\u9645\u5316" tabindex="-1">\u56FD\u9645\u5316 <a class="header-anchor" href="#\u56FD\u9645\u5316" aria-hidden="true">#</a></h1><p>\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u8BED\u8A00\u73AF\u5883\u4E0B\u663E\u793A\u4E0D\u540C\u7684\u63D2\u4EF6\u5305</p><h2 id="\u793A\u4F8B\u4EE3\u7801" tabindex="-1">\u793A\u4F8B\u4EE3\u7801 <a class="header-anchor" href="#\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a></h2><p><a href="https://github.com/eolinker/eoapi-extensions/tree/main/packages/feature/i18n" target="_blank" rel="noopener noreferrer">i18n</a></p><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u5728 package.json \u914D\u7F6E <code>i18n</code> \u5B57\u6BB5</p><div class="language-json"><pre><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eoapi-i18n&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The i18n example extension of eoapi&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span><span class="token string">&quot;scar&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;moduleID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eoapi-i18n&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;moduleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eoapi-i18n&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;moduleType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;feature&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;logo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://dummyimage.com/125x125&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup -c rollup.config.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:watch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup -w -c rollup.config.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rollup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.70.2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;features&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;apimanage.export&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;exportFunc&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${function.label}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${function.description}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://dummyimage.com/125x125&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data.json&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;i18n&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;sourceLocale&quot;</span><span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;locales&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;zh-Hans&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript"><pre><code><span class="token comment">// index.js</span>

<span class="token comment">// * \u5BFC\u51FA\u65B9\u5F0F\u5FC5\u987B\u662F\u547D\u540D\u5BFC\u51FA\uFF0C\u65B9\u6CD5\u540D\u9700\u8981\u4E0E\u914D\u7F6E\u4E2D\u7684 action \u5B57\u6BB5\u4E00\u81F4</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">exportFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// * \u4F20\u5165\u53C2\u6570\u662F Eoapi \u7684API\u6570\u636E\u7ED3\u6784</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;eoapi&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="locale-\u8868" tabindex="-1">locale \u8868 <a class="header-anchor" href="#locale-\u8868" aria-hidden="true">#</a></h2>`,9),e=[p];function c(u,r,l,i,k,q){return a(),s("div",null,e)}var h=n(o,[["render",c]]);export{g as __pageData,h as default};
