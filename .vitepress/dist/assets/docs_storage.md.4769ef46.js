import{_ as e,c as t,o as a,a as o}from"./app.68c6bb90.js";var r="/assets/2022-06-15-18-59-37.7e49213d.png",i="/assets/2022-06-15-19-00-12.9df57f40.png",s="/assets/2022-06-16-12-22-11.dbb7d882.png";const v='{"title":"\u5185\u7F51\u90E8\u7F72","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5185\u7F51\u90E8\u7F72","slug":"\u5185\u7F51\u90E8\u7F72"},{"level":2,"title":"\u670D\u52A1\u5668\u90E8\u7F72","slug":"\u670D\u52A1\u5668\u90E8\u7F72"},{"level":3,"title":"\u5B89\u88C5\u6570\u636E\u5E93","slug":"\u5B89\u88C5\u6570\u636E\u5E93"},{"level":3,"title":"\u670D\u52A1\u90E8\u7F72","slug":"\u670D\u52A1\u90E8\u7F72"},{"level":3,"title":"\u670D\u52A1\u5347\u7EA7","slug":"\u670D\u52A1\u5347\u7EA7"},{"level":2,"title":"\u5BA2\u6237\u7AEF\u914D\u7F6E","slug":"\u5BA2\u6237\u7AEF\u914D\u7F6E"}],"relativePath":"docs/storage.md","lastUpdated":1657693499000}',n={},l=o(`<h2 id="\u5185\u7F51\u90E8\u7F72" tabindex="-1">\u5185\u7F51\u90E8\u7F72 <a class="header-anchor" href="#\u5185\u7F51\u90E8\u7F72" aria-hidden="true">#</a></h2><p>Eoapi \u63D0\u4F9B\u4E24\u5957\u6570\u636E\u6E90\uFF1A</p><ul><li>\u672C\u5730\u6570\u636E\u6E90\uFF1A\u53EF\u5355\u673A/\u79BB\u7EBF\u4F7F\u7528\uFF0CIndexedDB \u6570\u636E\u5E93</li><li>\u8FDC\u7A0B\u6570\u636E\u6E90\uFF1A\u53EF\u8FDC\u7A0B\u534F\u4F5C\uFF0CNode.js+MySQL</li></ul><h2 id="\u670D\u52A1\u5668\u90E8\u7F72" tabindex="-1">\u670D\u52A1\u5668\u90E8\u7F72 <a class="header-anchor" href="#\u670D\u52A1\u5668\u90E8\u7F72" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5\u6570\u636E\u5E93" tabindex="-1">\u5B89\u88C5\u6570\u636E\u5E93 <a class="header-anchor" href="#\u5B89\u88C5\u6570\u636E\u5E93" aria-hidden="true">#</a></h3><p>\u5B89\u88C5 <a href="https://zhuanlan.zhihu.com/p/27960044" target="_blank" rel="noopener noreferrer">MySQL</a> \u5B89\u88C5\u540E\u5F00\u542F MySQL\uFF0C\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A eoapi \u7684\u6570\u636E\u5E93\u3002</p><div class="language-"><pre><code>mysql -u root -p
create DATABASE eoapi;
</code></pre></div><h3 id="\u670D\u52A1\u90E8\u7F72" tabindex="-1">\u670D\u52A1\u90E8\u7F72 <a class="header-anchor" href="#\u670D\u52A1\u90E8\u7F72" aria-hidden="true">#</a></h3><ol><li>\u5728\u670D\u52A1\u5668 Clone \u4ED3\u5E93</li></ol><div class="language-"><pre><code>git clone https://github.com/eolinker/eoapi-remote-server
</code></pre></div><ol start="2"><li>\u6309\u7167 README \u90E8\u7F72\u597D\u540E\uFF0C\u914D\u7F6E ormconfig.json \u6587\u4EF6</li></ol><div class="language-"><pre><code>{
  &quot;type&quot;: &quot;mysql&quot;,
  &quot;host&quot;: &quot;localhost&quot;,
  &quot;port&quot;: 3306,
  &quot;username&quot;: &quot;root&quot;,
  &quot;password&quot;: &quot;xxxxxx&quot;,//\u6570\u636E\u5E93\u5BC6\u7801
  &quot;database&quot;: &quot;eoapi&quot;,//\u6570\u636E\u5E93\u540D\u79F0
  &quot;synchronize&quot;: false,
  &quot;logging&quot;: false,
  &quot;entities&quot;: [&quot;dist/entities/**/*.js&quot;],
  &quot;migrations&quot;: [&quot;dist/migrations/**/*.js&quot;],
  &quot;migrationsRun&quot;: true,
  &quot;cli&quot;: {
    &quot;migrationsDir&quot;: &quot;src/migrations&quot;
  }
}
</code></pre></div><ol start="3"><li>\u914D\u7F6E .env \u8BBF\u95EE\u8FDC\u7A0B\u670D\u52A1\u9700\u8981\u52A0 token \u9274\u6743\uFF0C\u683C\u5F0F\u4E3A <code>API_KEY=xxx</code></li></ol><div class="language-"><pre><code>API_KEY=1ab2c3d4e5f61ab2c3d4e5f6
</code></pre></div><p><img src="`+r+`" alt=""></p><ol start="3"><li>\u542F\u52A8\u670D\u52A1 \u9996\u6B21\u542F\u52A8\u9700\u8981\u5B89\u88C5\u4F9D\u8D56</li></ol><div class="language-"><pre><code>npm install
</code></pre></div><p>\u542F\u52A8\u9879\u76EE</p><div class="language-"><pre><code>npm start
</code></pre></div><p>\u5982\u56FE\uFF0C\u9879\u76EE\u542F\u52A8\u6210\u529F <img src="`+i+`" alt=""></p><h3 id="\u670D\u52A1\u5347\u7EA7" tabindex="-1">\u670D\u52A1\u5347\u7EA7 <a class="header-anchor" href="#\u670D\u52A1\u5347\u7EA7" aria-hidden="true">#</a></h3><p>\u5173\u95ED\u670D\u52A1\u540E\uFF0C\u8FD0\u884C\u8FC1\u79FB\u811A\u672C\uFF0C\u518D\u91CD\u542F\u670D\u52A1\u5373\u53EF\u3002</p><div class="language-"><pre><code>npm run migration:run
</code></pre></div><h2 id="\u5BA2\u6237\u7AEF\u914D\u7F6E" tabindex="-1">\u5BA2\u6237\u7AEF\u914D\u7F6E <a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u70B9\u51FB\u914D\u7F6E\uFF0C\u586B\u5165\u670D\u52A1\u5668\u5730\u5740\u3001Token \u540E\u5373\u53EF\u8FDC\u7A0B\u534F\u4F5C\u5373\u53EF\u4F7F\u7528\u8FDC\u7A0B\u6570\u636E\u6E90\u3002 <img src="`+s+'" alt=""></p>',25),d=[l];function u(c,p,h,q,g,_){return a(),t("div",null,d)}var f=e(n,[["render",u]]);export{v as __pageData,f as default};
