import React from 'react' ;

const SearchBox = ({value,onChange}) => {
    return (
        <input
            type="text"
            name="query"
            placeholder="Search..."
            className="form-control m-3"
            value={value}
            onChange={e=> onChange(e.currentTarget.value)}
        />
    )
};

export default SearchBox;