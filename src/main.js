// const test =document.querySelector('#test')

const div = dom.create('<div>newdiv</div>');
console.log(div);
dom.after(test,div);

const div2 = dom.create('<div>beforediv</div>');
console.log(div2);
dom.before(test,div2);

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)

const p2 = dom.create('<p class="red">段落标签22</p> ')
dom.append(test2,p2)

 let arry = dom.empty(test2);
 console.dir(arry);

 const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'title', 'Hi, I am Frank')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)


dom.text(test, '这是新的内容')
console.log(dom.text(test))

dom.style(test, {border: '1px solid red', color: 'blue'})
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.has(test,'blue'))

const fn = ()=>{
  console.log('点击了')
}
dom.on(test, 'click', fn);
dom.off(test, 'click', fn)


const testDiv = dom.find('#test')[0]
console.log(testDiv)


console.log(dom.parent(test))

const s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))
console.log(dom.next(s2))
console.log(dom.previous(s2))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n)=> dom.style(n, 'color', 'red'))

console.log(dom.index(s2))