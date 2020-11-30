window.dom = {
    create(string) {
        const container = document.createElement('template');
        container .innerHTML = string.trim();
        return container.content.firstChild;
    },
    after(node,node2){
        console.log(`node2${node2}`)
        node.parentNode.insertBefore(node2,null);
        // 如果 referenceNode 为 null 则 newNode 将被插入到子节点的末尾。
    },
    before(node,node2){
        console.log(`node2${node2}`)
        node.parentNode.insertBefore(node2,node);

    },
    append(parent,node){
        parent.appendChild(node);
    },
    wrap(node,parent){//新增parent
        dom.before(node,parent);//将parent插到node前面
        dom.append(parent,node);//然后将node加入到parent中，那么node会从原来的位置中断开
    },

    remove(node){//移除node节点
        node.parentNode.removeChild(node);
        return node;//防止移除之后还要用到，所以可以返回回去。

    },
    empty(node){//清空node节点里面的元素
        const arry = [];
        let x = node.firstChild;
        console.log(x);
        while(x){
            arry.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return arry;
    },
    attr(node,name,value){//重载
        if(arguments.length ===3){//设置节点node的name属性值为value
            node.setAttribute(name,value);
        }else if(arguments.length){//获取node节点name属性的值。
            return node.getAttribute(name);
        }
    },
    text(node,string){
        if(arguments.length === 2){
            if('innerText' in node){//适配
                node.innerText = string;
            }else{
                node.textConent = string;
            }
        }else if (arguments.length === 1){
            if('innerText' in node){
               return node.innerText ;
            }else{
               return node.textConent ;
            }
        }

    },
    html(node,string){
        if(arguments.length === 2){
         node.innerHTML = string;
        }else if(arguments.length ===1){
            return node.innerHTML;
        }
  
   },

   style(node,name,value){
    if(arguments.length === 3){
        node.style[name] = value;
       }else if(arguments.length ===2){
           return node.style[name];
       }else if (name instanceof Object){
        const obj = name;
        for(let key in obj){
            node.style[key] = obj[key];
        }
       }
      
   },
   class:{
        add(node,className){
            node.classList.add(className);
        },
        remove(node,className){
            node.classList.remove(className);
        },
        has(node,className){
            return node.classList.contains(className);
        }   

    },
    on(node,event,fn){//添加监听
        node.addEventListener(event,fn);
    },
    off(node,event,fn){//移除监听
        node.removeEventListener(event,fn);
    },
    find(selector,scope){//范围查找
        return (scope||document).querySelectorAll(selector);

    },
    parent(node){
        return node.parentNode;
    },
    children(node){
        return node.children;
    },
    siblings(node){//找到node的兄弟节点
      return  Array.from(node.parentNode.children)
      .filter(n=>n!=node);
    },
    next(node){
        let x = node.nextSibing
        while(x&& x.nodeType ===3){//类型为实际文字text时找下一个节点
            x = x.nextSibing;
        }
        return x;
    },
    previous(node){
        let x = node.previousSibling
        while(x && x.nodeType === 3){
            x = x.previousSibling;
        }
        return x;
    },
    each(nodeList,fn){
        for(let i= 0; i < nodeList.length;i++){
            fn.call(null,nodeList[i]);
        }
    },
    index(node){
        const list = dom.children(node.parentNode);
        for(let i =0 ;i <list.length;i++){
            if(list[i] === node){
                return i;
            }
        }
    }

}