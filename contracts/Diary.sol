// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract diary {
    struct Contents {
        string text;
        uint256 dateAndtime;
    }

    Contents[] public content;
    mapping(uint256 => string) public dateTocontent;

    function writeContent(string memory _text, uint256 _dateAndtime) public {
        content.push(Contents(_text, _dateAndtime));
        dateTocontent[_dateAndtime] = _text;
    }

    // function getContent(uint256 _index)
    //     public
    //     view
    //     returns (string memory text, string memory date)
    // {
    //     Contents storage contenTs = content[_index];
    //     return (contenTs.text, contenTs.date);
    // }
}
