import React from "react";

export default function Search({searchValue, setSearchValue}) {
    

    return (
        <div>
            <form>
            <input
                type="text"
                name="search"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                >
                </input>
            </form>
        </div>

    )
}