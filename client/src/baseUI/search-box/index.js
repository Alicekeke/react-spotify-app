import React, {useRef, useState, useEffect, useMemo} from 'react';
import { debounce } from './../../api/utils';
import { SearchBoxWrapper } from './style'
import { connect } from "react-redux";


const SearchBox = (props) => {

  const queryRef = useRef ();
  // 创建两个状态，初始化为空字符串
  const [query, setQuery] = useState ('');
  // 从父组件热门搜索中拿到的新关键词
  const { newQuery, showInput} = props;
  // 父组件针对搜索关键字发请求相关的处理
  const { handleQuery, handleShowInput } = props;
  // 根据关键字是否存在决定清空按钮的显示 / 隐藏 
  const displayStyle = query ? {display: 'block'}: {display: 'none'};


  useEffect(() => {
    let curQuery = query;
    if(newQuery !== query){
      curQuery = newQuery;
      queryRef.current.value = newQuery;
    }
    setQuery(curQuery);
    // eslint-disable-next-line
  }, [newQuery]);
 // 监听 input 框的内容
  const handleChange = (e) => {
    let val = e.currentTarget.value
    setQuery(val)
  };

  // 缓存方法
  let handleQueryDebounce = useMemo (() => {
    return debounce (handleQuery, 500);
  }, [handleQuery]);

  useEffect (() => {
    // 注意防抖
    handleQueryDebounce (query);
  }, [query]);

  const clearQuery = () => {
    // 清空框内容的逻辑
    setQuery ('');
    queryRef.current.focus ();
  }

  // 进来出现光标
  useEffect (() => {
    queryRef.current.focus ();
  }, []);

  return (
    <SearchBoxWrapper style={props.isInputSelected === true ? {display: 'flex'} : {display: 'none'}}>
      <i className="iconfont icon-back" onClick={handleShowInput}>&#xe60d;</i>
      <input ref={queryRef} className="box" placeholder='' value={query} onChange={handleChange}/>
      <i className="iconfont icon-delete" onClick={clearQuery} style={displayStyle}>&#xe501;</i>
      {/* <span className="iconfont camera">&#xe63e;</span> */}
    </SearchBoxWrapper>
  )
};

export default React.memo(SearchBox)