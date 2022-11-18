import React, { useState } from "react";
/*import { Link } from "react-router-dom";*/
import "./styles/Staking.css";

import { showConnectWalletDialog } from './App.jsx';
import { showMobileMenu } from './App.jsx';

//Select lambda for sorting
function sortSelector(order) {
    switch (order) {
        case "Hot":
            return (item1, item2) => {
                if (item1.total > item2.total)
                    return -1;
                else if (item1.total === item2.total)
                    return 0;
                else
                    return 1;
            };
        case "LockedAPY":
            return (item1, item2) => {
                if (item1.locked > item2.locked)
                    return -1;
                else if (item1.locked === item2.locked)
                    return 0;
                else
                    return 1;
            };
        case "FlexibleAPY":
            return (item1, item2) => {
                if (item1.flexible > item2.flexible)
                    return -1;
                else if (item1.flexible === item2.flexible)
                    return 0;
                else
                    return 1;
            };
        default: return (item1, item2) => {
            if (item1.total > item2.total)
                return -1;
            else if (item1.total === item2.total)
                return 0;
            else
                return 1;
        };
    }
}

export default function Staking() {
    //Buttons images
    const buttons = {
        gridActive: "./static/images/AlignButtons/GridActive.png",
        gridInactive: "./static/images/AlignButtons/GridInactive.png",
        listActive: "./static/images/AlignButtons/ListActive.png",
        listInactive: "./static/images/AlignButtons/ListInactive.png"
    }

    //State
    const [stakesState, setItems] = useState({ items: [], aresset: false });
    const [sortBy, setSorting] = useState("Hot");
    const [alignGrid, setAlign] = useState(false);

    //SearchBy
    const [search, setSearch] = useState("");
    const changeSearch = () => {
        setSearch(document.getElementsByName("searchby")[0].value);
    };


    //Start loading items
    const loadItems = async () => {
        setItems(
            {
                items: [
                    { name: "BTC", locked: 25.5, flexible: 31.2, time: 6.5, total: 1234567, image: "./static/images/Bitcoin.png" },
                    { name: "ETH", locked: 10.2, flexible: 19.8, time: 1.2, total: 7654321, image: "./static/images/Ethereum.svg" },
                    { name: "MATIC", locked: 18.9, flexible: 11.1, time: 3.3, total: 1112223, image: "./static/images/CryptoPlaceholder.png" },
                    { name: "MANA", locked: 40.0, flexible: 9.78, time: 0.3, total: 8646748, image: "./static/images/CryptoPlaceholder.png" },
                    { name: "AVAX", locked: 12.3, flexible: 5.9, time: 7.9, total: 6588579, image: "./static/images/CryptoPlaceholder.png" },
                    { name: "BNB", locked: 85.6, flexible: 12.45, time: 11.9, total: 978648, image: "./static/images/CryptoPlaceholder.png" }
            ],
                areset: true
            });


        //For Backend
        
        //const request = await fetch("api/stakes");
        //let items = await request.json();

        //items.forEach(item => {
        //    const data = item.image;
        //    const byteCharacters = atob(data);
        //    const byteNumbers = new Array(byteCharacters.length);
        //    for (let i = 0; i < byteCharacters.length; i++) {
        //        byteNumbers[i] = byteCharacters.charCodeAt(i);
        //    }
        //    const byteArray = new Uint8Array(byteNumbers);
        //    const blob = new Blob([byteArray], { type: "image/*" });
        //    item.image = URL.createObjectURL(blob);
        //});
        
        //setItems({ items: items, areset: true });
    };

    //Prevent from endless updating of items
    if (!stakesState.areset)
        loadItems();

    //Align change
    const ChangeAlignGrid = () => {
        if (!alignGrid)
            setAlign(true);
    };
    const ChangeAlignList = () => {
        if (alignGrid)
            setAlign(false);
    };  

    //Sorting order changed
    const selectionChanged = () => {
        setSorting(document.getElementById("sortby").value);
    };

    //Render
    if (alignGrid) {
        return (
            <>
                <div className="StakingContainer">
                    <div className="StakingBar">
                        <div className="OrderBy" >
                            <img src={buttons.listInactive} onClick={ChangeAlignList} className="Cursor" alt="-List" />
                            <img src={buttons.gridActive} onClick={ChangeAlignGrid} className="Cursor" alt="+Grid"/>
                        </div>
                        <div className="SortBy">
                            <div>
                                <div>Sort by</div>
                                <select name="sortby" id="sortby" onChange={selectionChanged}>
                                    <option value="Hot">Hot</option>
                                    <option value="LockedAPY">Locked APY</option>
                                    <option value="FlexibleAPY">Flexible APY</option>
                                </select>
                            </div>
                        </div>
                        <div className="SearchBox">
                            <div>
                                <div>Search</div>
                                <input type="text" name="searchby" onChange={changeSearch} />
                            </div>
                        </div>
                    </div>

                    <div className="Grid">
                        <div className="StakesContainerGrid">
                            <StakingGrid items={stakesState.items} sorting={sortBy} searchby={search }/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className="StakingContainer">
                    <div className="StakingBar">
                        <div className="OrderBy">
                            <img src={buttons.listActive} onClick={ChangeAlignList} className="Cursor" alt="+List" />
                            <img src={buttons.gridInactive} onClick={ChangeAlignGrid} className="Cursor" alt="-Grid" />
                        </div>
                        <div className="SortBy">
                            <div>
                                <div>Sort by</div>
                                <select name="sortby" id="sortby" onChange={selectionChanged}>
                                    <option value="Hot">Hot</option>
                                    <option value="LockedAPY">Locked APY</option>
                                    <option value="FlexibleAPY">Flexible APY</option>
                                </select>
                            </div>
                        </div>
                        <div className="SearchBox">
                            <div>
                                <div>Search</div>
                                <input type="text" name="searchby" onChange={changeSearch} />
                            </div>
                        </div>
                    </div>

                    <div className="StakesContainerList">
                        <StakingList items={stakesState.items} sorting={sortBy} searchby={search} />
                    </div>
                </div>
            </>
        );
    }
}

export function StakingGrid(props) {
    let id = 0;

    return (
        <>  
            {props
                .items
                .sort(sortSelector(props.sorting))
                .filter((item) => {
                    return (props.searchby === "" ? true : item.name.startsWith(props.searchby));    
                })
                .map((item) => {
                    return (
                        <>
                        <div className="GridNode" key={++id }>
                            <div className="GridNodeHeader">
                                <div className="GridHeaderText">{item.name}</div>
                                <div className="GridHeaderImage"><img src={item.image} alt="Crypto Image" /></div>
                            </div>
                            <div className="GridNodeText">
                                <div>Locked APY</div>
                                <div>{item.locked }%</div>
                            </div>
                            <div className="GridNodeText">
                                <div>Flexible APY</div>
                                <div>{item.flexible }%</div>
                            </div>
                            <div className="GridNodeText">
                                <div>Reward payout every</div>
                                <div>{item.time }h</div>
                            </div>
                            <div className="GridNodeText">
                                <div>Total staked</div>
                                <div>{item.total }</div>
                                </div>

                                {/*EXPANDED COLLECT CONTAINER WHICH REQUIRES WALLET CONNECTION*/ }
                                {/*<div className="ExpandedCollectContainer">*/}
                                {/*    <div className="ListNodeExpandedCollectSign">{item.name} earned</div>*/}
                                {/*    <div className="ListNodeExpandedCollectSign">0.000000</div>*/}
                                {/*    <button className="ListNodeExpandedCollectButton">Collect</button>*/}
                                {/*</div>*/}

                            <div className="GridNodeButton">
                                <button onClick={showConnectWalletDialog }>Connect Wallet</button>
                            </div>
                            </div>
                            <div className="GridNodeMobile">
                                <div className="GridNodeMobileMainContainer">
                                    <div>{item.name}</div>
                                    <div className="GridNodeMobilePhotoContainer"><img src={item.image} /></div>   
                                </div>
                                <div className="GridNodeMobileSecondContainer">
                                    <div className="GridNodeMobileLeftColumn">Locked APY</div>
                                    <div className="GridNodeMobileRightColumn">{item.locked}%</div>
                                </div>
                                <div className="GridNodeMobileSecondContainer">
                                    <div className="GridNodeMobileLeftColumn">Flexible APY</div>
                                    <div className="GridNodeMobileRightColumn">{item.flexible}%</div>
                                </div>
                                <div className="GridNodeMobileSecondContainer">
                                    <div className="GridNodeMobileLeftColumn">Reward payout every</div>
                                    <div className="GridNodeMobileRightColumn">{item.time}h</div>
                                </div>
                                <div className="GridNodeMobileSecondContainer">
                                    <div className="GridNodeMobileLeftColumn">Total staked</div>
                                    <div className="GridNodeMobileRightColumn">{item.total}</div>
                                </div>

                                {/*EXPANDED COLLECT CONTAINER WHICH REQUIRES WALLET CONNECTION*/}
                                {/*<div className="ExpandedCollectContainer">*/}
                                {/*    <div className="ListNodeExpandedCollectSign">{item.name} earned</div>*/}
                                {/*    <div className="ListNodeExpandedCollectSign">0.000000</div>*/}
                                {/*    <button className="ListNodeExpandedCollectButton">Collect</button>*/}
                                {/*</div>*/}

                                <div className="GridNodeMobileButtonContainer">
                                    <button onClick={showMobileMenu}>Connect Wallet</button>
                                </div>
                            </div>
                            </>
                );
            })}
            
        </>
    );
}

export function StakingList(props) {
    let id = 0;
    //Render
        return (
            <>
                {props
                    .items
                    .sort(sortSelector(props.sorting))
                    .filter((item) => {
                        return (props.searchby === "" ? true : item.name.startsWith(props.searchby));
                    })
                    .map((item) => {
                        return (
                            <>
                                <div key={id} className="ListNodeWrapper">
                                    <StakeNodeList item={item}/>
                                </div>
                            </>
                           );
                    })}
            </>
        );
    
}

export function StakeNodeList(props) {
    const [expanded, setExpanded] = useState(false);

    //Change expanded
    const changeExpanded = (event) => {
        setExpanded(!expanded);
    }

    //Render
    if (!expanded) {
        return (
            <div className="ListNode">
                <div className="ImageCont1">
                    <img className="Image" alt="CryptoImage" src={props.item.image} />
                </div>
                <div className="CryptoName">
                    <div>{props.item.name}</div>
                </div>
                <div className="Text">
                    <div>Locked APY</div>
                    <div>{props.item.locked}%</div>
                </div>
                <div className="Text">
                    <div>Flexible APY</div>
                    <div>{props.item.flexible}%</div>
                </div>
                <div className="Text">
                    <div>Reward payout every</div>
                    <div>{props.item.time}h</div>
                </div>
                <div className="Text">
                    <div>Total Staked</div>
                    <div>{props.item.total}</div>
                </div>
                <div className="ImageCont2">
                    <img className="ArrowImage Cursor" alt="Arrow" src="./static/images/Arrow.png" onClick={changeExpanded} />
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="ListNodeExpanded" key={props.item.id }>
            <div className="ListNode">
                <div className="ImageCont1">
                    <img className="Image" alt="CryptoImage" src={props.item.image} />
                </div>
                <div className="CryptoName">
                    <div>{props.item.name}</div>
                </div>
                <div className="Text">
                    <div>Locked APY</div>
                    <div>{props.item.locked}%</div>
                </div>
                <div className="Text">
                    <div>Flexible APY</div>
                    <div>{props.item.flexible}%</div>
                </div>
                <div className="Text">
                    <div>Reward payout every</div>
                    <div>{props.item.time}h</div>
                </div>
                <div className="Text">
                    <div>Total Staked</div>
                    <div>{props.item.total}</div>
                </div>
                <div className="ImageCont2">
                    <img className="ArrowImage ArrowImageFlip Cursor" alt="Arrow" src="./static/images/Arrow.png" onClick={changeExpanded} />
                </div>
                </div>

                {/*EXPANDED COLLECT CONTAINER WHICH REQUIRES WALLET CONNECTION*/}
                {/*<div className="ExpandedCollectContainer">*/}
                {/*    <div className="ListNodeExpandedCollectSign">{props.item.name} earned</div>*/}
                {/*    <div className="ListNodeExpandedCollectSign">0.000000</div>*/}
                {/*    <button className="ListNodeExpandedCollectButton">Collect</button>*/}
                {/*</div>*/}

                <div className="ListNodeButtonContainer">
                    <button onClick={showConnectWalletDialog}>Connect Wallet</button>
                </div>
            </div>
        );
    }
}