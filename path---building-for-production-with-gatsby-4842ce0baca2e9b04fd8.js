webpackJsonp([57151859537050],{703:function(A,e){A.exports={data:{post:{id:"/Users/dcs619/Dropbox/davidstevens/content/posts/2018-09-05--building-for-production-with-gatsby/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/pankaj-patel-js-302e29f1a49b1b35d73353978c745492-f107e.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.50451752800868%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAHhJI0hP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEAAQUCX//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABYQAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAQABPyGkOP8A/9oADAMBAAIAAwAAABCX/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QrH//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QjX//xAAZEAADAQEBAAAAAAAAAAAAAAAAAREhYXH/2gAIAQEAAT8QSETU6Xm+isGgsZT/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="unsplash.com"\n        title=""\n        src="/static/pankaj-patel-js-302e29f1a49b1b35d73353978c745492-78f2b.jpg"\n        srcset="/static/pankaj-patel-js-302e29f1a49b1b35d73353978c745492-dce19.jpg 200w,\n/static/pankaj-patel-js-302e29f1a49b1b35d73353978c745492-c1413.jpg 400w,\n/static/pankaj-patel-js-302e29f1a49b1b35d73353978c745492-78f2b.jpg 800w,\n/static/pankaj-patel-js-302e29f1a49b1b35d73353978c745492-ab4c4.jpg 1200w,\n/static/pankaj-patel-js-302e29f1a49b1b35d73353978c745492-bc99b.jpg 1600w,\n/static/pankaj-patel-js-302e29f1a49b1b35d73353978c745492-34a60.jpg 2400w,\n/static/pankaj-patel-js-302e29f1a49b1b35d73353978c745492-f107e.jpg 5534w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Recently my collective thought leaders vary from <a href="https://twitter.com/sehurlburt/status/1042557375171899392">soft skills</a>, <a href="https://mobile.twitter.com/levelsio/status/956176482958639105">startup culture</a>, <a href="https://twitter.com/feministy/status/986427827481464833">remote work</a>, to <a href="https://twitter.com/Nick_Craver/status/1046841014433005570">developer rage</a>, but I instantly reacted when I saw this tweet:</p>\n<blockquote>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🌶 Hot take: Using the to-do app as the Hello World was a big step back for teaching devs.<br><br>When the Twitter app was the Hello World, it taught everyone auth, associations, async requests, 3rd party APIs, offline, etc.</p>&mdash; Jonnie Hallman (@destroytoday) <a href="https://twitter.com/destroytoday/status/1024321627612426241?ref_src=twsrc%5Etfw">July 31, 2018</a></blockquote><br />\n</blockquote>\n<p>YES. ABSOLUTELY YES.</p>\n<p>Why does it feel like that sixth new app tutorial isn’t actually teaching me anything?  Where do I squeeze in professional development with earning my keep, pursuing healthy hobbies, and being present with family?</p>\n<p>Enter Gatsby.</p>\n<h1>What is Gatsby?</h1>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/dean-pugh-office-fd7664fbf95c0355cda4fe262aa4c80b-0c070.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUDBAb/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAABtC+IdGJgv//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMREhP/2gAIAQEAAQUC0CLd24MsZnCap9nn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAwADAQAAAAAAAAAAAAAAAAERAhAxUf/aAAgBAQAGPwKr0WM1GypnT//EABwQAAICAgMAAAAAAAAAAAAAAAABESExQVGh8P/aAAgBAQABPyFK1LgWzWxkW+jHXM4It2Ue6R//2gAMAwEAAgADAAAAEODv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EEdsv//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEVH/2gAIAQIBAT8QECx7f//EAB0QAAICAwADAAAAAAAAAAAAAAERACExQYHB0fD/2gAIAQEAAT8QwBCsLeV1Q5olowhVwLae2jnTiARfBBHJUCh5n39U/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="unsplash.com"\n        title=""\n        src="/static/dean-pugh-office-fd7664fbf95c0355cda4fe262aa4c80b-78f2b.jpg"\n        srcset="/static/dean-pugh-office-fd7664fbf95c0355cda4fe262aa4c80b-dce19.jpg 200w,\n/static/dean-pugh-office-fd7664fbf95c0355cda4fe262aa4c80b-c1413.jpg 400w,\n/static/dean-pugh-office-fd7664fbf95c0355cda4fe262aa4c80b-78f2b.jpg 800w,\n/static/dean-pugh-office-fd7664fbf95c0355cda4fe262aa4c80b-ab4c4.jpg 1200w,\n/static/dean-pugh-office-fd7664fbf95c0355cda4fe262aa4c80b-bc99b.jpg 1600w,\n/static/dean-pugh-office-fd7664fbf95c0355cda4fe262aa4c80b-34a60.jpg 2400w,\n/static/dean-pugh-office-fd7664fbf95c0355cda4fe262aa4c80b-0c070.jpg 5472w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Imagine you’re the newly hired junior associate of tech recruiting.  Your client asked for a rockstar developer but you know nothing, so you Google “web development”.   Nothing useful there except a dated Wikipedia entry.  How about “modern web development”?  </p>\n<p>Ok, now you’re looking for someone who knows a few things: advanced CSS, a JavaScript framework (not jQuery), API interactions, performance optimization…  </p>\n<p>What if you, the (aspiring/junior/mid/senior) developer, don’t know all those things?  </p>\n<p><a href="https://www.gatsbyjs.org/">Gatsby</a> is a modern development framework that includes all the above:</p>\n<p>✅ Javascript (React)<br>\n✅ Prebuilt CSS (CSS-in-JS)<br>\n✅ API interactions (GraphQL)<br>\n✅ Blazing performance (Webpack/PWA)  </p>\n<h1>Why Gatsby?</h1>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/campbell-boulanger-porsche-0e7ff6d71dae2ddd599e9a7631c59a31-8a0ff.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.67565381504448%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIFBv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAF2jPZoCCH/xAAaEAADAQADAAAAAAAAAAAAAAAAAQIEERQh/9oACAEBAAEFAq13BOzzsSNckQmz/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGxABAAAHAAAAAAAAAAAAAAAAAQADICEiYZH/2gAIAQEABj8CylnYVDV6f//EABoQAAMBAQEBAAAAAAAAAAAAAAABESExQeH/2gAIAQEAAT8hiJFy5Y5y24wZfTpdJquGecP/2gAMAwEAAgADAAAAEJgv/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qqv/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQEAAwEBAQAAAAAAAAAAAAERACExQWGB/9oACAEBAAE/EFGxTgDrDmWvy0WE97cJlBpdUYDvXxyo0bfwxhQJ4LzP/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="unsplash.com"\n        title=""\n        src="/static/campbell-boulanger-porsche-0e7ff6d71dae2ddd599e9a7631c59a31-78f2b.jpg"\n        srcset="/static/campbell-boulanger-porsche-0e7ff6d71dae2ddd599e9a7631c59a31-dce19.jpg 200w,\n/static/campbell-boulanger-porsche-0e7ff6d71dae2ddd599e9a7631c59a31-c1413.jpg 400w,\n/static/campbell-boulanger-porsche-0e7ff6d71dae2ddd599e9a7631c59a31-78f2b.jpg 800w,\n/static/campbell-boulanger-porsche-0e7ff6d71dae2ddd599e9a7631c59a31-ab4c4.jpg 1200w,\n/static/campbell-boulanger-porsche-0e7ff6d71dae2ddd599e9a7631c59a31-bc99b.jpg 1600w,\n/static/campbell-boulanger-porsche-0e7ff6d71dae2ddd599e9a7631c59a31-34a60.jpg 2400w,\n/static/campbell-boulanger-porsche-0e7ff6d71dae2ddd599e9a7631c59a31-8a0ff.jpg 3709w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>I’m not a JS junkie who only uses frameworks baked in the last 6 months.  I’ve paid dues at both the mouth of node_modules and DLL hell, so if you tell me to try something new, it better be worth it.  Why couldn’t you just learn all those topics on your own?</p>\n<p>Here’s my pitch:</p>\n<p>Gatsby opens with what you need to know, polishes up what you think you know, and runs everything else under the hood.</p>\n<p>Prefer to drive at a slower pace?  <a href="https://www.gatsbyjs.org/tutorial/">This</a> is for you.</p>\n<p>Prefer to jump right in and go?  <a href="https://www.gatsbyjs.org/starters/">That</a> is for you.</p>\n<p>Prefer that I stop using car metaphors you don’t care about?  <a href="https://i.giphy.com/media/7K3p2z8Hh9QOI/giphy.webp">Me too</a>.</p>\n<p>Gatsby’s components are well-documented and easy to read, and the entire source for the project is on <a href="https://github.com/gatsbyjs/gatsby">Github</a>.  Bravo to the team for making it so accessible.</p>\n<h1>Fin</h1>\n<p>If you hadn’t already guessed, this site is built with ❤️Gatsby.</p>\n<p><em>Next</em>: Part 2 will cover some setup issues, custom functionality, and thoughts for future improvement!</p>',fields:{slug:"/building-for-production-with-gatsby/",prefix:"2018-09-05"},frontmatter:{title:"Building For Production With Gatsby, Part 1",author:"david stevens",category:"development",cover:{childImageSharp:{resize:{src:"/static/pankaj-patel-js-302e29f1a49b1b35d73353978c745492-ada8c.jpg"}}}}},authornote:{id:"/Users/dcs619/Dropbox/davidstevens/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><em><strong>David Stevens</strong> is a web developer with a decade’s worth of mistakes and problem solving to show for it.  He loves finding ways to be more efficient, doing things with intensity, and sleeping outdoors.  You can find him here and on Twitter, except when he’s spending time with his wife and daughter.</em></p>"},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/building-for-production-with-gatsby/",prev:{id:"/Users/dcs619/Dropbox/davidstevens/content/posts/2018-07-24--remote-setup/index.md absPath of file >>> MarkdownRemark",fields:{slug:"/remote-setup/",prefix:"2018-07-24"},frontmatter:{title:"Remote Life - The Setup",category:"remote"}}}}}});
//# sourceMappingURL=path---building-for-production-with-gatsby-4842ce0baca2e9b04fd8.js.map