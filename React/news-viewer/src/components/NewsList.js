import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";
import SearchInput from "./SearchInput";

const NewsListBlock = styled.div`
    box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsSearch = styled.input`
  width: 300px;
  height: 40px;
`;


const NewsList = ({ category }) => {
    const [sword, setSword] = useState('');
    const [loading, response, error] = usePromise(() => {
        const sword = '';
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            // `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=81cd2900c6e74bfa9b8175e0c9e85de0`
            `https://newsapi.org/v2/top-headlines?country=kr&q=${sword}&apiKey=81cd2900c6e74bfa9b8175e0c9e85de0`
        );
    }, [ category]);


    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }

    // 아직 response 값이 설정되지 않았을 때
    if (!response) {
        return null;
    }

    // error가 발생했을 때
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    // response 값이 유효할 때
    const { articles } = response.data;





    // const onChange = useCallback( e=> {
    //     setSword(e.target.value);
    // }, [sword]);
    //
    // const onSubmit = useCallback(
    //     e => {
    //         onSearch(sword);
    //         // setSword('');
    //
    //         e.preventDefault();
    //     },
    //     [onSearch, sword],
    // )
    const onChange = e => setSword(e.target.value);
    const onClick = e => {
        // alert()


        console.log(sword)
        setSword(sword);
    }
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    }



    return (
        <NewsListBlock>
            {/*<NewsSearch  />*/}
            <input
                type="text"
                name="sword"
                placeholder="검색어를 입력하세요"
                value={sword}
                onChange={onChange}
                onKeyPress={onKeyPress}
                // ref={(ref) => {this.input=ref}}
            />
            <button onClick={onClick}>검색</button>
            {/*<SearchInput ref={(ref) => {this.searchInput=ref}} />*/}
            {/*<SearchInput />*/}
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )

}


export default NewsList;