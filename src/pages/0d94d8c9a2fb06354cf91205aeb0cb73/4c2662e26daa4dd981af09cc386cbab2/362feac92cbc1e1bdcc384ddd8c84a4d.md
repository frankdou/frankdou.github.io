---
title: useEffect
date: 2022-05-12T12:27:37.000Z
size: 6987
---
##### Why

在函数组件主体内（这里指在 React 渲染或创建数据的阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性

##### What

- 执行一段和当前执行结果无关的代码
  - 修改函数外的某个变量
  - 发起一个请求，等等
- 在全部渲染完毕后才会执行，所以不会阻塞浏览器渲染进程（浏览器重绘之后异步执行）
  - useLayoutEffect
    - 浏览器重绘之前同步执行

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

##### 使用说明

- 两个参数
  - 第一个为要执行的函数 callback
  
    - 如果返回一个回调函数，将用于清理上一次 Effect 的结果，比如在组件销毁的时候做一些清理的操作，取消订阅、停止计时器、移除事件的监听、etc
    - 这个机制几乎等价于class组件中的 componentWillUnmount

    ```jsx
    // 设置一个 size 的 state 用于保存当前窗口尺寸
    const [size, setSize] = useState({});
    useEffect(() => {
      // 窗口大小变化事件处理函数
      const handler = () => {
        setSize(getSize());
      };
      // 监听 resize 事件
      window.addEventListener('resize', handler);
      
      // 返回一个 callback 在组件销毁时调用
      return () => {
        // 移除 resize 事件
        window.removeEventListener('resize', handler);
      };
    }, []);
    ```
  
    ```jsx
    class Example extends Component {
      constructor (props) {
        super(props);
        this.state = {
          count: 0
        }
      }
      componentDidMount() {
        this.id = setInterval(() => {
          this.setState({count: this.state.count + 1})
        }, 1000);
      }
      componentWillUnmount() {
        clearInterval(this.id)
      }
      render() { 
        return <h1>{this.state.count}</h1>;
      }
    }
    // 等价于
    function Example() {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        const id = setInterval(() => {
          setCount(c => c + 1);
        }, 1000);
        return () => clearInterval(id);
      }, []);
    
      return <h1>hello world</h1>
    }
    ```
  
  - 第二个是**可选的**依赖项数组
    - 不传
      - 没有依赖项，每次 render 后都会重新执行
      
        ```jsx
        useEffect(() => {
          // 每次 render 完就执行
          console.log('rrrr');
        })
        ```
      
    - 传
      - 空数组
        - 组件首次渲染时执行，等价于 class 组件中的 componentDidMount
        
          ```jsx
          useEffect(() => {
            console.log('did mount')
          }, [])
          ```
        
      - 依赖项
        - 只有依赖项中的值发生变化的时候，才会执行
        
          ```jsx
          useEffect(
            () => {
              const subscription = props.source.subscribe();
              return () => {
                subscription.unsubscribe();
              };
            },
            [props.source],
          )
          ```


##### 汇总

- 每次 render 后执行：不提供第二个依赖项参数
  - `useEffect(() => {})`

- 仅第一次 render 后执行：提供一个空数组作为依赖项
  - `useEffect(() => {}, [])`

- 第一次以及依赖项发生变化后执行：提供依赖项数组
  - `useEffect(() => {}, [deps])`

- 组件 unmount 后执行：返回一个回调函数
  - `useEffect() => { return () => {} }, [])`

```jsx
useEffect(() => {
  // componentDidMount + componentDidUpdate
  console.log('这里基本等价于 componentDidMount + componentDidUpdate');
  return () => {
    // componentWillUnmount
    console.log('这里基本等价于 componentWillUnmount');
  }
}, [deps])
```

##### “基本等价于”

- 使用componentDidUpdate，通常需要手动判断某个状态是否发生变化，然后再执行特定的逻辑
  - Hooks接收的callback，只有在依赖项变化时才被执行
- componentWillUnmount只在组件销毁时才会执行
  - useEffect 接收的回调函数，不只是在组件销毁时执行，而是每次 Effect 重新执行之前都会执行，用于清理上一次 Effect 的执行结果



##### API调用

```jsx
function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(
    'http://localhost/api/v1/search?query=redux',
  );
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
 
      try {
        const result = await axios(url);
 
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
 
      setIsLoading(false);
    };
 
    fetchData();
  }, [url]);
 
  return (
    <Fragment>
      <form onSubmit={event => {
        doFetch();
 
        event.preventDefault();
      }}>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            setUrl(`http://localhost/api/v1/search?query=${query}`)
          }
        >
          Search
        </button>
        
        {isError && <div>Something went wrong ...</div>}

        {isLoading ? (
            <div>Loading ...</div>
          ) : (
            <ul>
              {data.hits.map(item => (
                <li key={item.objectID}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
         )}
      </form>
    </Fragment>
  )
}
```

##### 自定义hooks

```jsx
function useHackerNewsApi = () => {
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState(
    'http://localhost/api/v1/search?query=redux',
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
 
      try {
        const result = await axios(url);
 
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
 
      setIsLoading(false);
    };
 
    fetchData();
  }, [url]);
 
  const doFetch = () => {
    setUrl(`http://localhost/api/v1/search?query=${query}`);
  };
 
  return { data, isLoading, isError, doFetch };
}
```

ref: 

https://mp.weixin.qq.com/s/gMDvdTDaWyRuKlEIJWRfFw
