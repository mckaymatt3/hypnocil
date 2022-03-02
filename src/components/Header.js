import React from "react"

function Header({searchText, setSearchText}) {  

    function handleSearchText (event) {
        setSearchText(event.target.value)
    }

    return(
        <header>
            <div>
                <img src="./images/hypnocil-logo.png"/>
                <h1>Clinical Trials</h1>
            </div>
            <input onChange={handleSearchText} value={searchText} id="search" type="text" placeholder="Search..."></input>
        </header>
    );
}

export default Header;