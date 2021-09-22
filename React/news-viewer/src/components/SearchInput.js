
import React, {useState} from 'react';
// import React, {useState, useCallback} from 'react';

const SearchInput = ({onSearch}) => {
    const [sword, setSword] = useState('');

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
    const onClick = () => {
        // alert()


        console.log(sword)
        // setSword('');
    }
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    }


    return (
        // <form onSubmit={onSubmit}>
        <div>
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
            {/*<button type="submit" onClick={onClick}>검색</button>*/}
        {/*</form>*/}
            </div>
    );
};

export default SearchInput;