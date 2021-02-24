(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{387:function(t,a,s){"use strict";s.r(a);var r=s(40),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"一篇文章让你了解dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一篇文章让你了解dns"}},[t._v("#")]),t._v(" 一篇文章让你了解DNS")]),t._v(" "),s("p",[t._v("对读过计算机网络这本书的同学们来说，DNS并不是什么陌生的东西，但是仍然有不少同学对这块知识不太熟悉。DNS到底是啥？这篇文章将尽量以通俗的语言解释，希望读完对你有所帮助。")]),t._v(" "),s("h2",{attrs:{id:"什么是dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是dns"}},[t._v("#")]),t._v(" 什么是DNS")]),t._v(" "),s("p",[t._v("DNS（Domain Name System）域名系统，就是一个能把域名解析成对应ip地址的分布式系统。当我们在网址中输入www.baidu.com的时候，就通过DNS把这一串域名转化为了百度服务器的ip地址，浏览器才能向服务器发送请求。为什么需要DNS呢？很简单，让你在地址栏输入长长的32位的ip地址，你受得了吗？浏览器解析ip地址是很轻松的，但对我们用户来说，记住这一大串ip地址是很不现实的，于是DNS域名系统就出现了。")]),t._v(" "),s("h2",{attrs:{id:"dns的结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns的结构"}},[t._v("#")]),t._v(" DNS的结构")]),t._v(" "),s("p",[t._v("互联网域名命名系统采用的是层次树状结构。先来看看www.baidu.com这个域名，最右边的com是顶级域名，baidu是二级域名，www是三级域名，再往下还可以继续划分四级域名等等。每一级域名都由上一级的域名管理机构管理。顶级域名之上还有一个根，其实就是一个管理机构，全世界的所有顶级域名都由这个根进行管理，了解一下就好。每一级的域名都可以划分出多个下级域名，而不需要经过上级机构批准。整个DNS域名系统就像倒置的一棵树，最上边是根，根下面管理着多个顶级域名，每个顶级域名管理着多个二级域名，依次往下，直到这棵域名树的树叶，也就是具体的主机的名字，就无法再往下分了。")]),t._v(" "),s("p",[t._v("上面是抽象化的域名系统结构，而实际上的域名服务器的工作是通过"),s("strong",[t._v("划分分区")]),t._v("的方式进行的。比如说这里有两个域名服务器A和B，A管理着域名树上的几支枝干和枝干上的叶子，这块被A管辖的区域就叫做“区”，A就是这个区的“权限域名服务器”。B管理着另外几支枝干，B就是B那个区的权限域名服务器。很好理解吧？")]),t._v(" "),s("h2",{attrs:{id:"域名服务器的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名服务器的类型"}},[t._v("#")]),t._v(" 域名服务器的类型")]),t._v(" "),s("p",[t._v("域名服务器共有四种类型，每种类型的服务器都只对域名体系中的一部分进行管辖。各司其职嘛，搭配起来干活才不累！\n第一种，根域名服务器，管理着所有顶级域名。这是最重要的服务器类别，如果全世界所有根域名服务器都挂了，那大家全都上不了网。根域名服务器就是皇帝，皇帝死了国也亡了，所以对根域名服务器的保护特别用心。\n第二种，顶级域名服务器，管理着其下的所有二级域名。\n第三种，权限域名服务器，就是上文提到的那个，像是居委会之类的角色，这一片的人都归它管。\n第四种，本地域名服务器。它不属于域名服务器层级结构，但是对域名系统非常重要。每一个互联网服务提供商ISP，或者一个大学，甚至大学里的一个系，都可能拥有一个本地域名服务器。一般本地域名服务器距离我们的主机都非常近，不超过几个路由的距离。")]),t._v(" "),s("h2",{attrs:{id:"dns查询的具体过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns查询的具体过程"}},[t._v("#")]),t._v(" DNS查询的具体过程")]),t._v(" "),s("p",[t._v("重头戏来啦~上面逼逼叨叨了一大堆，最后还是得看看DNS的具体工作流程才有助于我们理解嘛。")]),t._v(" "),s("h3",{attrs:{id:"主机向本地域名服务器发请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主机向本地域名服务器发请求"}},[t._v("#")]),t._v(" 主机向本地域名服务器发请求")]),t._v(" "),s("p",[t._v("以手动输入地址为例，浏览器根据地址栏里的地址，会首先到主机的缓存中寻找对应的域名-ip映射信息；主机的缓存是从本地域名服务器那里下载下来的。如果主机缓存里没有，就会发送请求给本地域名服务器，让本地域名服务器帮忙查询。主机向本地域名服务器查询的过程是"),s("strong",[t._v("递归查询")]),t._v("，这里我们只要知道一件事：发送查询请求给本地域名服务器之后主机就啥也不用干了，只要等着本地域名服务器的答复，要么是查询到的ip地址，要么是查询失败。")]),t._v(" "),s("p",[t._v("本地域名服务器收到来自主机的请求之后，首先在自己的高速缓存里查找（这里有些同学可能会有疑问，主机缓存不是从本地域名服务器缓存那里下载过来的吗，为什么还要在本地域名服务器上再找一次？因为下载这个行为是在主机启动的时候进行的，可能在启动后的时间里本地域名服务器的缓存表更新了，所以在本地域名服务器上有必要再查一次），有没有别的主机曾经也查找过相同的域名，如果有，就能够从缓存里直接拿到上次查询的结果，直接把这个结果发回给主机就好了。如果缓存里没有，可能是缓存过期了（本地域名服务器会定期清理过期的缓存项目），也可能是还没有别的主机查询过相同的域名，那本地域名服务器就看看要查询的ip目的地址和自己属不属于同一个ISP。如果属于同一个ISP，就可以直接把ip地址发给主机，不用再进行后面的查询。")]),t._v(" "),s("h3",{attrs:{id:"本地域名服务器向根域名服务器发请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地域名服务器向根域名服务器发请求"}},[t._v("#")]),t._v(" 本地域名服务器向根域名服务器发请求")]),t._v(" "),s("p",[t._v("如果上面的操作都没有找到想要的ip地址，那主机域名服务器就得作为客户，向别的域名服务器发起查询请求了。向哪个服务器发起请求呢？答案是根域名服务器。（顺便一提，根域名服务器采用任播技术，就是很多个根域名服务器具有同一个ip地址，哪个服务器离我们最近，就由哪个服务器提供服务）")]),t._v(" "),s("h3",{attrs:{id:"本地域名服务器向顶级域名服务器发请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地域名服务器向顶级域名服务器发请求"}},[t._v("#")]),t._v(" 本地域名服务器向顶级域名服务器发请求")]),t._v(" "),s("p",[t._v("根域名服务器一般不会直接告诉本地域名服务器结果，而是指出接下来要去哪儿找————去某某顶级域名服务器那儿找。假设它说要去com这个顶级域名找，好，本地域名服务器就向com这个顶级域名的服务器发送查询请求。")]),t._v(" "),s("h3",{attrs:{id:"本地域名服务器向权限域名服务器发请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地域名服务器向权限域名服务器发请求"}},[t._v("#")]),t._v(" 本地域名服务器向权限域名服务器发请求")]),t._v(" "),s("p",[t._v("com的顶级域名服务器接收到请求之后，如果没法直接找到结果，就会告诉本地域名服务器，我这儿找不到，但是你可以去我下级的某某权限域名服务器找找。于是本地域名服务器又向权限域名服务器发请求。")]),t._v(" "),s("h3",{attrs:{id:"权限域名服务器返回结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限域名服务器返回结果"}},[t._v("#")]),t._v(" 权限域名服务器返回结果")]),t._v(" "),s("p",[t._v("权限域名服务器就是居委会，对居民的情况再清楚不过了，它就把我们想要的最终结果ip地址发回给本地域名服务器。如果我们输入的域名有误，那权限域名服务器是找不到这个不存在的ip地址的，我们这儿没住这个人呐！就会告诉本地域名服务器查询失败。")]),t._v(" "),s("h3",{attrs:{id:"本地域名服务器将结果发回主机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地域名服务器将结果发回主机"}},[t._v("#")]),t._v(" 本地域名服务器将结果发回主机")]),t._v(" "),s("p",[t._v("本地域名服务器在不停查询了这么多服务器之后，终于得到了一个结果，把结果发回给主机，主机就可以进行通信了。\n"),s("img",{attrs:{src:"/img/%E7%BD%91%E7%BB%9C%E9%80%9A%E4%BF%A1/DNS%E6%9F%A5%E8%AF%A2.png",alt:"DNS查询"}}),t._v("\n上面本地域名服务器向多个服务器查询的方式叫做"),s("strong",[t._v("迭代查询")]),t._v("。也可以采用递归查询的方式，这取决于最初的查询请求报文的设置。如果采用递归查询，那每次查询的主体就是每一层的服务器，查询过程是本地————>根域名————>顶级域名————>权限域名，返回结果也是原路返回。")])])}),[],!1,null,null,null);a.default=v.exports}}]);