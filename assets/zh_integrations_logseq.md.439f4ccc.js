import{_ as a,c as r,a as e,b as t,t as o,d as i,o as s}from"./app.b667a437.js";const L=JSON.parse('{"title":"Logseq","description":"","frontmatter":{"title":"Logseq","editLink":true},"headers":[{"level":2,"title":"演示","slug":"演示","link":"#演示","children":[]},{"level":2,"title":"设置 Omnivore Logseq 插件","slug":"设置-omnivore-logseq-插件","link":"#设置-omnivore-logseq-插件","children":[]},{"level":2,"title":"自定义从 Omnivore 同步到 Logseq 的数据","slug":"自定义从-omnivore-同步到-logseq-的数据","link":"#自定义从-omnivore-同步到-logseq-的数据","children":[]},{"level":2,"title":"控制导入到 Logseq 的数据的布局","slug":"控制导入到-logseq-的数据的布局","link":"#控制导入到-logseq-的数据的布局","children":[{"level":3,"title":"可用于页面模板的变量","slug":"可用于页面模板的变量","link":"#可用于页面模板的变量","children":[]},{"level":3,"title":"可用于荧光笔高亮显示模板的变量","slug":"可用于荧光笔高亮显示模板的变量","link":"#可用于荧光笔高亮显示模板的变量","children":[]}]},{"level":2,"title":"社区指南","slug":"社区指南","link":"#社区指南","children":[]}],"relativePath":"zh/integrations/logseq.md","lastUpdated":1676558672000}'),n={name:"zh/integrations/logseq.md"},h={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),g=i('<p>Omninove 通过 <a href="https://github.com/omnivore-app/logseq-omnivore" target="_blank" rel="noreferrer">logseq-omnivore</a> 插件与 Logseq 集成。该插件允许自定义从 Omnivore 数据同步到 Logseq，控制数据的布局和同步频率。</p><nav class="table-of-contents"><ul><li><a href="#演示">演示</a></li><li><a href="#设置-omnivore-logseq-插件">设置 Omnivore Logseq 插件</a></li><li><a href="#自定义从-omnivore-同步到-logseq-的数据">自定义从 Omnivore 同步到 Logseq 的数据</a></li><li><a href="#控制导入到-logseq-的数据的布局">控制导入到 Logseq 的数据的布局</a><ul><li><a href="#可用于页面模板的变量">可用于页面模板的变量</a></li><li><a href="#可用于荧光笔高亮显示模板的变量">可用于荧光笔高亮显示模板的变量</a></li></ul></li><li><a href="#社区指南">社区指南</a></li></ul></nav><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-hidden="true">#</a></h2>',3),c=e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Cc6DbBtOs14",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),u=i('<h2 id="设置-omnivore-logseq-插件" tabindex="-1">设置 Omnivore Logseq 插件 <a class="header-anchor" href="#设置-omnivore-logseq-插件" aria-hidden="true">#</a></h2><ul><li>在 Logseq 市场中搜索 Omnivore 并安装插件</li><li>在浏览器中打开<a href="https://omnivore.app/settings/api" target="_blank" rel="noreferrer">https://omnivore.app/settings/api</a> 并创建 API 令牌 (有关创建令牌的详细信息，请参阅 <a href="./api.html">API</a> )</li><li>在 Logseq 中打开 Omnivore 插件设置，然后粘贴您的 API 密钥</li></ul><h2 id="自定义从-omnivore-同步到-logseq-的数据" tabindex="-1">自定义从 Omnivore 同步到 Logseq 的数据 <a class="header-anchor" href="#自定义从-omnivore-同步到-logseq-的数据" aria-hidden="true">#</a></h2><p><a href="../../integrations/images/logseq-sync-filter.png">Logseq 同步筛选器</a></p><p>Omnivore Logseq 插件提供了三个导入数据的选项：</p><ul><li>导入我的所有文章: 这将导入您保存到 Omnivore 的每篇文章以及您添加到文章中的标签 (tags)，荧光笔高亮显示和注释。</li><li>仅导入荧光笔高亮显示: 这将导入您保存的具有荧光笔高亮显示的每篇文章。</li><li>高级: 这允许您定义要导入的搜索筛选。例如，使用 <code>label:Newsletter</code>.</li></ul><h2 id="控制导入到-logseq-的数据的布局" tabindex="-1">控制导入到 Logseq 的数据的布局 <a class="header-anchor" href="#控制导入到-logseq-的数据的布局" aria-hidden="true">#</a></h2><p>Omnivore Logseq 插件使用 <a href="https://mustache.github.io/" target="_blank" rel="noreferrer">mustache</a> 模板语言来定义如何将导入的数据保存到 Logseq。插件设置允许您定义页面布局和荧光笔高亮显示布局的模板。</p><h3 id="可用于页面模板的变量" tabindex="-1">可用于页面模板的变量 <a class="header-anchor" href="#可用于页面模板的变量" aria-hidden="true">#</a></h3><ul><li>title</li><li>slug</li><li>siteName</li><li>originalArticleUrl</li><li>url</li><li>author</li><li>savedAt</li><li>updatedAt</li><li>pageType (article 或 PDF)</li><li>description</li><li>labels: A list of labels attached to the page</li></ul><h3 id="可用于荧光笔高亮显示模板的变量" tabindex="-1">可用于荧光笔高亮显示模板的变量 <a class="header-anchor" href="#可用于荧光笔高亮显示模板的变量" aria-hidden="true">#</a></h3><ul><li>quote</li><li>annotation</li><li>labels</li><li>updatedAt</li></ul><h2 id="社区指南" tabindex="-1">社区指南 <a class="header-anchor" href="#社区指南" aria-hidden="true">#</a></h2><ul><li><a href="https://briansunter.com/graph/#/page/omnivore-logseq-guide?anchor=ls-block-62b28de3-0e9e-456e-bf29-7e2541213aa5" target="_blank" rel="noreferrer">omnivore-logseq-guide</a> -- 由 <a href="https://briansunter.com/" target="_blank" rel="noreferrer">Brian Sunter</a> 撰写的有用设置和使用指南。</li><li>中文翻译: <a href="https://sywhb.github.io/#/page/omnivore-logseq%20%E6%8C%87%E5%8D%97" target="_blank" rel="noreferrer">omnivore-logseq-guide</a></li></ul>',14);function m(l,p,_,f,q,v){return s(),r("div",null,[e("h1",h,[t(o(l.$frontmatter.title)+" ",1),d]),g,c,u])}const k=a(n,[["render",m]]);export{L as __pageData,k as default};
