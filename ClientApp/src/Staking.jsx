import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Staking.css";

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
        default: return () => 1;
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

    //Start loading items
    const loadItems = () => {
        setItems(
            {
                items: [
                { name: "BTC", locked: 25.5, flexible: 31.2, time: 6.5, total: 1234567 },
                { name: "ETH", locked: 10.2, flexible: 19.8, time: 1.2, total: 7654321 },
                { name: "BTC", locked: 18.9, flexible: 11.1, time: 3.3, total: 1112223 },
                { name: "BTC", locked: 40.0, flexible: 9.78, time: 0.3, total: 8646748 },
                { name: "ETH", locked: 12.3, flexible: 5.9, time: 7.9, total: 6588579 },
                { name: "BTC", locked: 85.6, flexible: 12.45, time: 11.9, total: 978648 }
            ],
            areset: true});
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
                <div>
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
                                <input type="text" name="searchby" />
                            </div>
                        </div>
                    </div>

                    <div className="Grid">
                        <div className="StakesContainerGrid">
                            <StakingGrid items={stakesState.items} sorting={sortBy} />
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
                                <input type="text" name="searchby" />
                            </div>
                        </div>
                    </div>

                    <div className="StakesContainerList">
                        <StakingList items={stakesState.items} sorting={sortBy} />
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
                .map((item) => {
                    return (
                        <div className="GridNode">
                            <div className="GridNodeHeader">
                                <div className="GridHeaderText">{item.name }</div>
                                <div className="GridHeaderImage"><img src="./static/images/CryptoPlaceholder.png"/></div>
                            </div>
                            <div className="GridNodeText">
                                <div>Locked APY</div>
                                <div>{item.locked }</div>
                            </div>
                            <div className="GridNodeText">
                                <div>Flexible APY</div>
                                <div>{item.flexible }</div>
                            </div>
                            <div className="GridNodeText">
                                <div>Reward payout every</div>
                                <div>{item.time }</div>
                            </div>
                            <div className="GridNodeText">
                                <div>Total staked</div>
                                <div>{item.total }</div>
                            </div>
                            <div className="GridNodeButton">
                                <button>Connect Wallet</button>
                            </div>
                        </div>
                );
            })}
            
        </>
    );
}

export function StakingList(props) {
    let id = 0;
    

    return (
        <>
            {props
                .items
                .sort(sortSelector(props.sorting))
                .map((item) => {
                return (
                    <div className="ListNode" key={++id }>
                        <div className="ImageCont1">
                            <img className="Image" alt="CryptoImage" src="./static/images/CryptoPlaceholder.png" />
                        </div>
                        <div className="MainName">
                            <div>{item.name}</div>
                        </div>
                        <div className="Text">
                            <div>Locked APY</div>
                            <div>{item.locked}%</div>
                        </div>
                        <div className="Text">
                            <div>Flexible APY</div>
                            <div>{item.flexible}%</div>
                        </div>
                        <div className="Text">
                            <div>Reward payout every</div>
                            <div>{item.time}h</div>
                        </div>
                        <div className="Text">
                            <div>Total Staked</div>
                            <div>{item.total}</div>
                        </div>
                        <div className="ImageCont2">
                            <img className="ArrowImage" alt="Arrow" src="./static/images/Arrow.png" className="Cursor" />
                        </div>
                    </div>
                );
                })}
            
        </>
    );
}