(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(28842)}])},94107:function(e,t,s){"use strict";var r=s(85893),a=(s(67294),s(14517));t.Z=function(e){var t=e.coin,s=e.amount;e.currency;return(0,r.jsxs)("div",{className:"flex flex-col items-end justify-end",children:[(0,r.jsx)("p",{className:"text-xs text-gray-500 opacity-80",children:"Price"}),(0,r.jsxs)("div",{className:"flex items-center text-black",children:[(0,r.jsx)(a.Z,{type:t,className:"mr-1.5"}),(0,r.jsx)("span",{className:"pr-3 text-xl",children:s})]})]})}},28842:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return $}});var r,a,n,l,i=s(47568),o=s(26042),c=s(69396),d=s(10797),m=s(10092),x=s(85893),u=s(67294),h=s(25617),f=s(60545),p=s(82169),g=s(64146),b=s(96624),y=s.n(b),v=s(9669),j=s.n(v),N=s(41664),w=s.n(N),k=s(76383),T=s(30719),F=(s(30933),s(74650),s(68811)),C=s.n(F),Z=s(89979),P=s(25675),B=s.n(P),_=s(99534),E=s(14517),A=s(94107),U=s(70794),M=function(e){var t=e.item,s=e.btnBuy,r=(0,_.Z)(e,["item","btnBuy"]),a=t.tokenId,n=t.image,l=t.name,i=t.like,d=t.seller,m=t.price;return(0,x.jsx)(w(),{href:"/sale?tokenId=".concat(a,"&seller=").concat(d,"&price=").concat(m),children:(0,x.jsxs)("div",(0,c.Z)((0,o.Z)({},r),{children:[(0,x.jsx)(B(),{src:n,alt:"image-".concat(a),layout:"fill",objectFit:"cover",className:"rounded-[10px]"}),(0,x.jsx)("div",{className:"absolute bottom-0 w-full bg-athens-gray flex justify-between p-4 rounded-b-[10px]",children:(0,x.jsxs)("div",{className:"w-full flex justify-between",children:[(0,x.jsx)("span",{className:"text-base text-shuttle-gray",children:l}),(0,x.jsx)(A.Z,{coin:"ether",amount:(0,U.Z)(m?m._hex:"1000000000000000000").dividedBy((0,U.Z)("1000000000000000000")).toString(),currency:"$"})]})}),s?(0,x.jsx)("div",{className:"absolute flex left-4 bottom-32",children:(0,x.jsx)(k.Z,{className:"py-1 text-lg bg-white text-orange px-11 rounded-3xl",children:"Buy"})}):null,i?(0,x.jsxs)("div",{className:"absolute flex items-center right-4 bottom-28",children:[(0,x.jsx)("div",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-silver mr-1.5",children:(0,x.jsx)(E.Z,{type:"heart"})}),(0,x.jsx)("span",{className:"text-sm text-rolling-stone",children:Intl.NumberFormat({maximumSignificantDigits:3}).format(t.like)})]}):null]}))})},S=function(e){var t=e.items,s=(0,u.useRef)(null),r=(0,u.useRef)(null);return(0,x.jsxs)("div",{className:"relative w-[80vw] md:w-fit",children:[(0,x.jsx)("div",{ref:s,className:C().swiperButtonPrev,children:(0,x.jsx)(B(),{src:"/assets/icons/arrow-prev.svg",alt:"arrow-prev",width:32,height:24})}),(0,x.jsx)("div",{ref:r,className:C().swiperButtonNext,children:(0,x.jsx)(B(),{src:"/assets/icons/arrow-next.svg",alt:"arrow-next",width:32,height:24})}),(0,x.jsx)(T.tq,{effect:"cards",grabCursor:!0,modules:[Z.c4,Z.W_],navigation:{prevEl:s.current,nextEl:r.current},onBeforeInit:function(e){e.params.navigation.prevEl=s.current,e.params.navigation.nextEl=r.current},className:"w-full md:w-[390px] h-[435px]",children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,x.jsx)(T.o5,{className:"flex items-center justify-center rounded-[10px]",children:(0,x.jsx)(M,{item:e,id:t,btnBuy:!0,className:"w-full h-[435px] rounded-[10px] relative"})},t)}))})]})},I=s(93967),D=s.n(I),W=function(){var e=(0,u.useState)({}),t=e[0],s=e[1],r=[{name:"All",icon:"category-all"},{name:"Products",icon:"technology"},{name:"Promotions",icon:"ticket"},{name:"Companies",icon:"real-estate"},{name:"Services",icon:"technology"},{name:"Brand",icon:"copyright"},{name:"Tickets",icon:"ticket"}];return(0,x.jsxs)("div",{className:"flex flex-col",children:[(0,x.jsx)("p",{className:"text-base font-medium text-trout mb-1.5",children:"Categories"}),(0,x.jsx)("div",{className:"w-56 py-3 bg-white rounded-2xl",children:null===r||void 0===r?void 0:r.map((function(e,r){return(0,x.jsxs)("div",{className:D()("flex py-5 pl-6 mr-0.5 bg-white group cursor-pointer relative hover:bg-orange/[0.08] hover:before:block hover:before:absolute hover:before:left-0 hover:before:h-full hover:before:w-1 hover:before:top-0 hover:before:bg-orange",{"bg-orange/[0.08] before:block before:absolute before:left-0 before:h-full before:w-1 before:top-0 before:bg-orange":t.name===e.name}),onClick:function(){return function(e){s(e)}(e)},title:"Category",children:[(0,x.jsx)(E.Z,{type:e.icon,className:D()("group-hover:fill-orange",{"fill-orange":t.name===e.name})}),(0,x.jsx)("span",{className:D()("text-base  ml-7 group-hover:text-orange group-hover:font-bold",{"text-orange font-bold":t.name===e.name,"text-rolling-stone":t.name!==e.name}),children:e.name})]},"category-".concat(r))}))})]})},q=s(94323),G=s(51183),H=function(e){var t=e.item,s=e.id,r=(0,_.Z)(e,["item","id"]);return(0,x.jsxs)("div",(0,c.Z)((0,o.Z)({},r),{children:[(0,x.jsx)("div",{className:"relative w-full h-32",children:(0,x.jsx)(B(),{src:"/assets/creators/".concat(t.bgUrl),alt:"bg-".concat(s),layout:"fill",objectFit:"cover",className:"rounded-[10px]"})}),(0,x.jsxs)("div",{className:"flex flex-col items-center justify-center w-full -mt-[70px]",children:[(0,x.jsx)(B(),{src:"/assets/creators/".concat(t.avatarUrl),alt:"avatar-".concat(s),width:140,height:140,className:"flex items-center border-8 border-white rounded-full"}),(0,x.jsx)("span",{className:"text-xl text-black/[0.8] mt-1 font-medium",children:t.name}),(0,x.jsx)("span",{className:"text-base text-rolling-stone leading-[22px] px-7 mt-3 text-center",children:t.description})]})]}))},R=function(e){var t=e.type,s=e.titleImg,r=e.title,a=e.moreBtn,n=e.items,l=(0,_.Z)(e,["type","titleImg","title","moreBtn","items"]),i=(0,u.useRef)(null),o=(0,u.useRef)(null);return(0,x.jsxs)("div",{className:"flex flex-col mb-14",children:[(0,x.jsxs)("div",{className:"flex md:flex-row flex-col gap-y-3 items-center justify-between mb-8",children:[(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)(B(),{src:s,alt:"hot",width:24,height:24}),(0,x.jsx)("span",{className:"ml-2 text-lg font-medium text-trout",children:r})]}),(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)("div",{ref:i,children:(0,x.jsx)("div",{className:"flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-gallery",children:(0,x.jsx)(q.Z,{className:"w-5 h-5 text-pale-sky","aria-hidden":"true"})})}),(0,x.jsx)("div",{ref:o,children:(0,x.jsx)("div",{className:"flex items-center justify-center w-12 h-12 ml-4 rounded-full cursor-pointer bg-gallery",children:(0,x.jsx)(G.Z,{className:"w-5 h-5 text-pale-sky","aria-hidden":"true"})})}),(0,x.jsx)(k.Z,{className:"ml-6 text-lg text-orange",children:a})]})]}),(0,x.jsx)(T.tq,{slidesPerView:"auto",spaceBetween:24,modules:[Z.W_],navigation:{prevEl:i.current,nextEl:o.current},onBeforeInit:function(e){e.params.navigation.prevEl=i.current,e.params.navigation.nextEl=o.current},className:l.swiperClassName,children:null===n||void 0===n?void 0:n.map((function(e,s){return(0,x.jsx)(T.o5,{className:"md:w-1/4",children:"creator"==t?(0,x.jsx)(H,{item:e,id:s,className:"w-full h-full rounded-[16px] p-3 bg-white border-solid border border-vermilion/[0.16]"}):(0,x.jsx)(M,{item:e,id:s,className:"w-full h-full rounded-[10px] bg-athens-gray relative"})},s)}))})]})},z=s(63519),L=s(55929),V=s(80227),O=s(43135),X=s(24456),Y=s(11434),Q=function(e){var t=e.activeTab,s=e.type,r=e.onClick;return(0,x.jsx)("button",{type:"button",onClick:function(){return r(s)},className:"".concat(s==t?"text-white":"text-darkText"," py-4 px-8 bg-transparent font-bold text-lg z-10 rounded-md"),children:s})},J=function(e){var t=e.activeTab,s=e.setActiveTab;return(0,x.jsxs)("div",{className:"flex justify-center w-fit mx-auto relative bg-[#D7DCE8] mt-5 rounded-md",children:[(0,x.jsx)(Q,{type:"Merchants",activeTab:t,onClick:s}),(0,x.jsx)("div",{className:"absolute w-1/2 bg-orange ".concat("Merchants"==t?"left-0 rounded-l-md":"left-2/4 rounded-r-md"," h-full top-0 transition-all duration-300")}),(0,x.jsx)(Q,{type:"Customers",activeTab:t,onClick:s})]})},K=f.getDefaultProvider(O.xC.RPC_URL,{etherscan:"B3HD76NSM9XGM1MKAWFQCWMU8GPRAUD1I1",infura:"33f72aa1b4f441bc8f3a244da53533b4"}),$=function(){var e=(0,u.useState)([]),t=e[0],s=e[1],f=(0,u.useState)(!1),b=f[0],v=f[1],N=(0,u.useState)("Merchants"),T=N[0],F=N[1],C=(0,h.v9)((function(e){return e.user.address})),Z=(0,h.v9)((function(e){return e.user.provider})),P=(0,h.v9)((function(e){return e.user.blockchain}));(0,u.useEffect)((function(){var e=function(){var e=(0,i.Z)((function(){var e,t,x,u,h,f,b;return(0,m.__generator)(this,(function(v){switch(v.label){case 0:console.log("provider:",Z),"Ethereum"===P?(r=O.xC.tokenContractAddr,a=O.xC.marketplaceContractAddr):"Binance"===P&&(r=O.t4.tokenContractAddr,a=O.t4.marketplaceContractAddr),Z?Z.getSigner():new p.r(O.xC.RPC_URL),n=new g.CH(r,X.Z,K),l=new g.CH(a,Y.Z,K),v.label=1;case 1:return v.trys.push([1,4,,5]),console.log("getting sales"),[4,l.getSales()];case 2:return e=v.sent(),console.log("got sales:",e),t=e[0],x=e[1],u=e[2],h=e[3],f=[],[4,y().all(x.map(function(){var e=(0,i.Z)((function(e,s){var r,a,l;return(0,m.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,n.uri(e)];case 1:return r=i.sent().replace("ipfs://","https://ipfs.io/ipfs/"),[4,j().get(r)];case 2:return a=i.sent().data,console.log("metadat:",a),f.push((0,c.Z)((0,o.Z)({},a),{price:u[s],seller:t[s],amount:h[s],tokenId:e})),[3,4];case 3:return l=i.sent(),console.log("error getting metadata:",l),[3,4];case 4:return[2]}}))}));return function(t,s){return e.apply(this,arguments)}}()))];case 3:return v.sent(),console.log("saledata:",f),s((0,d.Z)(f)),console.log("current sales:",f),[3,5];case 4:return b=v.sent(),console.log("error",b),[3,5];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[Z,C]);return(0,x.jsxs)(u.Fragment,{children:[(0,x.jsx)("section",{className:"flex flex-col px-8 py-14",children:(0,x.jsxs)("div",{className:"mb-24 flex flex-col md:flex-row gap-y-9",children:[(0,x.jsxs)("div",{className:"flex flex-col flex-1 items-start justify-start",children:[(0,x.jsx)("p",{className:"mb-6 font-medium text-trout text-4xl md:text-15xl max-w-[600px]",children:"Transform your Customers into Investors"}),(0,x.jsx)("p",{className:"text-lg text-pale-sky mb-14",children:"Internet businesses of all sizes - from startups to large enterprises use paybymint as a payment solution to accept crypto payments, track orders and send payouts on the blockchain. Businesses are able to accept crypto payment when customers mint a fraction of their NFT rather than direct payment. "}),(0,x.jsxs)("div",{className:"flex items-center text-lg",children:[(0,x.jsx)(w(),{href:"https://calendly.com/paybymint",passHref:!0,children:(0,x.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(k.Z,{className:"py-4 text-white px-10 md:px-14 rounded-3xl bg-orange",children:"Schedule a Demo"})})}),(0,x.jsx)(w(),{href:"/create-item",passHref:!0,children:(0,x.jsx)(k.Z,{className:"py-4 ml-6 bg-white border border-solid px-10 md:px-14 rounded-3xl text-orange border-orange",children:"Get Started"})})]})]}),(0,x.jsx)("div",{className:"flex flex-1 items-center justify-center",children:(0,x.jsx)(S,{items:t})})]})}),(0,x.jsxs)("section",{id:"feed",className:"flex flex-col md:flex-row gap-y-5 px-8 py-10 bg-athens-gray",children:[(0,x.jsx)(W,{}),(0,x.jsx)("div",{className:"pl-0 md:pl-8",children:(0,x.jsx)("div",{className:"flex flex-wrap gap-4 mb-8 items-center justify-center",children:t.map((function(e){return(0,x.jsx)(M,{item:e,className:"w-[360px] h-[450px] rounded-[10px] relative drop-shadow-[0_4px_48px_rgba(183,194,207,0.7)]"},e.tokenId)}))})})]}),(0,x.jsxs)("section",{className:"flex flex-col px-8 pt-16 mb-24",children:[(0,x.jsxs)("button",{onClick:function(){return v(!b)},className:"mb-8 text-3xl font-bold text-rolling-stone flex justify-between px-6 hover:text-orange",children:[(0,x.jsx)("span",{children:"What is PayByMint?"}),b?(0,x.jsx)(L.Z,{className:"w-7 h-7 font-extrabold","aria-hidden":"true"}):(0,x.jsx)(z.Z,{className:"w-7 h-7 font-extrabold","aria-hidden":"true"})]}),b&&(0,x.jsxs)("div",{className:"flex flex-col md:grid md:grid-cols-2 gap-10",children:[(0,x.jsx)("p",{children:"Paybymint is a Blockchain payment and investment solution in the NFT space. An NFT platform that enables customers to pay for goods/services by purchasing a fraction of the merchant\u2019s NFT rather than direct payment."}),(0,x.jsx)("p",{children:"Businesses are being able to accept payment from customers by letting customers purchase their NFTs as the money realized from the NFT sale covers expenses for the goods/services rendered. This can be achieved through Fractionalized NFTs also known as FNFT."})," ",(0,x.jsxs)("p",{children:["This will create a viable economy for the merchant on the blockchain and also be a form of investment and passive income to the customer. Simply put;"," ",(0,x.jsx)("span",{className:"font-bold",children:"\u201cPaying for a merchant\u2019s goods or services by purchasing the merchant\u2019s own token(currency) either to retain as an asset or resell to future customers. Whenever a resale is made, 70% of revenue from the sale goes back to the merchant to cover expenses for the goods or services to be rendered\u201d."})," ","This means that the customer is paying for goods/ services rendered and in the same process acquiring a digital asset."]}),(0,x.jsx)("p",{children:"Ownership is through a smart contract that transfers a piece or fraction of the merchant\u2019s NFT, equivalent to the invoice issued for the goods or services received. Subsequently, the purchased NFT fraction may then be listed on the platform by the customer so future customers can iterate the process. For example, the merchant launches an NFT that contain 1 million fractions. After the initial 1million has been purchased by numerous customers through payment for one type of goods or another, future customers paying for goods/service through this method will still have a chance but this time will be purchasing in the secondary market from initial customers who are current NFT fraction holders who have listed their fractions for sale as secondary sellers, and the cycle continues."})," ",(0,x.jsx)("p",{children:"The NFT Value growth rate is determined by the standard rate defined and regulated by the Paybymint Smart contract. (0.5% per 100,000 fractions sold)"})," ",(0,x.jsx)("p",{children:"Paybymint smart contract states that 75% of revenue generated from every secondary sale goes back to the merchant to cover for the cost of goods or services rendered while 25% remains with the nft holder as dividend."})," ",(0,x.jsx)("p",{children:"The customer who is a fraction owner may list their fraction for sale as a secondary seller. When new customers make payment, the algorithm picks up fractions according to who listed first. In cases where a fraction listed to be sold is less than the intended fraction to be purchased, the algorithm picks little pieces of fractions from other sellers to make up the fraction. Customers will be able to list any number of fractions they wish from their NFT fraction. The algorithm will select and sell only the listed fraction from each owner."})]})]}),(0,x.jsxs)("section",{className:"flex flex-col px-8 pt-16 mb-24",children:[(0,x.jsx)("span",{className:"mb-8 text-3xl text-center font-bold text-rolling-stone",children:"How It Works"}),(0,x.jsx)(J,{activeTab:T,setActiveTab:F}),"Merchants"===T?(0,x.jsxs)("div",{className:"flex gap-y-8 flex-col md:flex-row text-center mt-24",children:[(0,x.jsxs)("div",{className:"flex flex-1 flex-col items-center p-2",children:[(0,x.jsx)(E.Z,{type:"wallet"}),(0,x.jsx)("h4",{className:"text-[#333] font-bold text-lg m-2",children:"Set up your Business Digital wallet"}),(0,x.jsx)("p",{children:"Once you\u2019ve set up your wallet of choice, connect it to Paybymint by clicking the wallet icon in the top right corner. We currently support MetaMask and Binance. "})]}),(0,x.jsxs)("div",{className:"flex flex-1 flex-col items-center p-2",children:[(0,x.jsx)(E.Z,{type:"nft"}),(0,x.jsx)("h4",{className:"text-[#333] font-bold text-lg m-2",children:"Create NFT to represent your brand or product"}),(0,x.jsx)("p",{children:"Upload your brand NFT(image, video, audio, or 3D art), and determine NFT total value in ETH, add a title and description. NFT can be brand logo, product image etc "})]}),(0,x.jsxs)("div",{className:"flex flex-1 flex-col items-center p-2",children:[(0,x.jsx)(E.Z,{type:"list"}),(0,x.jsx)("h4",{className:"text-[#333] font-bold text-lg m-2",children:"List Your NFT"}),(0,x.jsx)("p",{children:"When you list your NFT, a link to your NFT is automatically generated for you. Use link to redirect your customers at point of check out from your website to continue payment on Paybymint. "})]}),(0,x.jsxs)("div",{className:"flex flex-1 flex-col items-center p-2",children:[(0,x.jsx)(E.Z,{type:"deposit"}),(0,x.jsx)("h4",{className:"text-[#333] font-bold text-lg m-2",children:"Eth is Deposited instantly to your Digital wallet"}),(0,x.jsx)("p",{children:"When Customers pay for your product on Paybymint. Eth is deposit directly to your Business Digital wallet address Transaction email is automatically sent to business email address on file to identify and Fulfill order "})]})]}):(0,x.jsxs)("div",{className:"flex flex-col gap-y-8 md:flex-row text-center mt-24",children:[(0,x.jsxs)("div",{className:"flex flex-1 flex-col items-center p-2",children:[(0,x.jsx)(E.Z,{type:"users"}),(0,x.jsx)("h4",{className:"text-[#333] font-bold text-lg m-2",children:"Get Started as a Customer "}),(0,x.jsx)("p",{children:"You will be redirected at checkout from merchant\u2019s website to Merchant\u2019s NFT page on Paybymint. "})]}),(0,x.jsxs)("div",{className:"flex flex-1 flex-col items-center p-2",children:[(0,x.jsx)(E.Z,{type:"wallet"}),(0,x.jsx)("h4",{className:"text-[#333] font-bold text-lg m-2",children:"Set up your wallet of choice"}),(0,x.jsx)("p",{children:"Connect it to Paybymint by clicking the wallet icon in the top right corner. We currently support MetaMask and Binance. "})]}),(0,x.jsxs)("div",{className:"flex flex-1 flex-col items-center p-2",children:[(0,x.jsx)(E.Z,{type:"deposit"}),(0,x.jsx)("h4",{className:"text-[#333] font-bold text-lg m-2",children:"Pay By Minting"}),(0,x.jsx)("p",{children:"Pay for product or service rendered by merchant by minting a fraction of merchant\u2019s NFT equivalence of your total bill. After payment, NFT is automatically transferred into your Account."})]}),(0,x.jsxs)("div",{className:"flex flex-1 flex-col items-center p-2",children:[(0,x.jsx)(E.Z,{type:"list"}),(0,x.jsx)("h4",{className:"text-[#333] font-bold text-lg m-2",children:"List your NFT "}),(0,x.jsx)("p",{children:"You have the option of listing your as a secondary seller for other paying customers to buy at new rate thereby generating revenue for you."})]})]})]}),(0,x.jsxs)("section",{className:"flex flex-col px-8 pt-24",children:[(0,x.jsxs)("div",{className:"flex items-center mb-4",children:[(0,x.jsx)(B(),{src:"/assets/hot-collection.png",alt:"hot",width:53,height:53}),(0,x.jsx)("span",{className:"ml-3 text-3xl font-bold text-rolling-stone",children:"Hot Deals"})]}),(0,x.jsx)(R,{type:"nft",titleImg:"/assets/trending.png",title:"Trending NFTs",moreBtn:"Discover More Trending NFTs",items:[{title:"The planted eyes",image:"/assets/nfts/trending1.png",userName:"Amanda Ebubechukwu",avatarUrl:"avatar1.png"},{title:"The planted eyes",image:"/assets/nfts/trending2.png",userName:"Amanda Ebubechukwu",avatarUrl:"avatar1.png"},{title:"The planted eyes",image:"/assets/nfts/trending3.png",userName:"Amanda Ebubechukwu",avatarUrl:"avatar1.png"},{title:"The planted eyes",image:"/assets/nfts/trending4.png",userName:"Amanda Ebubechukwu",avatarUrl:"avatar1.png"}],swiperClassName:"w-full h-[435px]"}),(0,x.jsx)(R,{type:"nft",titleImg:"/assets/like.png",title:"Mostly liked NFTs",moreBtn:"Discover Mostly Liked NFTs",items:[{title:"The planted eyes",image:"/assets/nfts/like1.png",userName:"Amanda Ebubechukwu",avatarUrl:"avatar1.png"},{title:"The planted eyes",image:"/assets/nfts/like2.png",userName:"Amanda Ebubechukwu",avatarUrl:"avatar1.png"},{title:"The planted eyes",image:"/assets/nfts/like3.png",userName:"Amanda Ebubechukwu",avatarUrl:"avatar1.png"},{title:"The planted eyes",image:"/assets/nfts/like4.png",userName:"Amanda Ebubechukwu",avatarUrl:"avatar1.png"}],swiperClassName:"w-full h-[435px]"})]}),(0,x.jsxs)("section",{className:"flex flex-col px-8 pt-24",children:[(0,x.jsxs)("div",{className:"flex items-center justify-between mb-8",children:[(0,x.jsx)("span",{className:"text-3xl font-bold text-rolling-stone",children:"User Guide"}),(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)("span",{className:"text-lg text-orange",children:"Full User Guidance"}),(0,x.jsx)(k.Z,{type:"button",className:"ml-6 text-lg text-orange rounded-full border border-orange w-[52px] h-[52px] flex justify-center items-center",children:(0,x.jsx)(V.Z,{className:"w-5 h-5 text-orange","aria-hidden":"true"})})]})]}),(0,x.jsxs)("div",{className:"flex flex-col md:flex-row items-center",children:[(0,x.jsxs)("div",{className:"flex flex-col items-center mr-12 -rotate-90 md:rotate-0",children:[(0,x.jsx)(k.Z,{type:"button",icon:"bold-arrow-top",className:"flex items-center justify-center w-8 h-8 mb-7 bg-gallery"}),(0,x.jsx)(k.Z,{type:"button",icon:"bold-arrow-down",className:"flex items-center justify-center w-8 h-8 bg-gallery"})]}),(0,x.jsxs)("div",{className:"bg-athens-gray rounded-[10px] flex-1 p-8",children:[(0,x.jsxs)("div",{className:"flex mb-8 guide-question",children:[(0,x.jsx)(B(),{src:"/assets/question-mark.png",alt:"guide-question",width:32,height:32}),(0,x.jsx)("span",{className:"flex-1 text-black/[0.8] font-semibold text-2xl leading-7 ml-6",children:"How do I create a NFT?"})]}),(0,x.jsxs)("div",{className:"flex items-start guide-answer",children:[(0,x.jsx)(B(),{src:"/assets/robot.png",alt:"guide-answer",width:32,height:32}),(0,x.jsx)("span",{className:"flex-1 text-black/[0.8] text-lg leading-7 ml-6",children:"Click [Create] and choose your file to upload. We currently support JPG, PNG, GIF, PDF, MP4, MP3, MPEG, AVI, WAV, and SVG. Please note that your NFT cannot be changed or revised once created. To create a revised/new NFT, you will have to start the process again."})]})]})]})]}),(0,x.jsxs)("section",{className:"flex flex-col px-8 pt-16 mb-24",children:[(0,x.jsx)("span",{className:"mb-8 text-3xl font-bold text-rolling-stone",children:"About Us"}),(0,x.jsx)("div",{className:"flex flex-wrap gap-10 justify-center",children:[{title:"Innovative Creators",imgUrl:"innovative.png",width:82,height:82},{title:"High Profit & Bonuses",imgUrl:"profit.png",width:68,height:82},{title:"Diverese and Quality Artworks",imgUrl:"artwork.png",width:60,height:82},{title:"Unique Platform",imgUrl:"unique.png",width:82,height:82}].map((function(e,t){return(0,x.jsxs)("div",{className:"flex items-center justify-between px-8 py-9 bg-athens-gray rounded-[10px] w-full md:w-5/12",children:[(0,x.jsx)("span",{className:"text-2xl leading-7 text-black/[0.8]",children:e.title}),(0,x.jsx)(B(),{src:"/assets/".concat(e.imgUrl),alt:"about-us-".concat(t),width:e.width,height:e.height})]},t)}))})]})]})}},68811:function(e){e.exports={swiperButtonNext:"EffectCardSwiper_swiperButtonNext__4a02b",swiperButtonPrev:"EffectCardSwiper_swiperButtonPrev__BhvzP"}}},function(e){e.O(0,[831,669,794,545,941,774,888,179],(function(){return t=75557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);