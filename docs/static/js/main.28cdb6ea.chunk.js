(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(9),o=n.n(r),i=(n(16),n(1)),p=n(2),c=n(4),u=n(3),l=n(6),m=n(5),k=(n(17),n(18),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.poke,t=e.name,n=e.url,a=e.types,r=this.props.favPoke;return s.a.createElement("div",{className:"card__container",onClick:r},s.a.createElement("img",{alt:t,src:n}),s.a.createElement("h2",{className:"poke__name"},t),s.a.createElement("ul",{className:"poke__types"},a.map(function(e,t){return s.a.createElement("li",{className:"type__item",key:t},e)})))}}]),t}(s.a.Component)),h=n(7),v=n.n(h),b=(n(21),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.favPoke,n=e.list;return s.a.createElement("ul",{className:"poke__container"},n.map(function(e,n){return s.a.createElement("li",{className:"poke__list",key:n},s.a.createElement(k,{poke:e,favPoke:t}))}))}}]),t}(s.a.Component));k.propTypes={list:v.a.array,favPoke:v.a.func};var d=b,g=[{id:1,name:"bulbasaur",types:["poison","grass"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{id:2,name:"ivysaur",types:["poison","grass"],evolution:"bulbasaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{id:3,name:"venusaur",types:["poison","grass"],evolution:"ivysaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{id:4,name:"charmander",types:["fire"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{id:5,name:"charmeleon",types:["fire"],evolution:"charmander",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{id:6,name:"charizard",types:["flying","fire"],evolution:"charmeleon",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{id:7,name:"squirtle",types:["water"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{id:8,name:"wartortle",types:["water"],evolution:"squirtle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{id:9,name:"blastoise",types:["water"],evolution:"wartortle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{id:10,name:"caterpie",types:["bug"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}],f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={pokemon:g,isClicked:null},n.handleFav=n.handleFav.bind(Object(l.a)(n)),n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"handleFav",value:function(e){var t=e.currentTarget;this.setState(function(e){return{isClicked:e.isClicked?t.className=null:t.className="card__container fav"}})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"poke__title"},s.a.createElement("img",{className:"poke__logo",src:"https://1000logos.net/wp-content/uploads/2017/05/Logo-Pokemon.jpg",alt:"pokemon__logo"})),s.a.createElement(d,{list:this.state.pokemon,favPoke:this.handleFav}))}}]),t}(s.a.Component);o.a.render(s.a.createElement(f,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.28cdb6ea.chunk.js.map