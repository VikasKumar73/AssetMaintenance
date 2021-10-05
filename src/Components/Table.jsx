import data from "../mock-data.json";
import React, { useState } from "react";
import "./Table.css";
import AssetType from "./AssetType";

const Table = () => {
  const [mockData, setMockData] = useState([]);
  const [assetTypeSelected, setAssetType] = useState([]);
  const [assetSubTypeSelected, setSubType] = useState([]);
  const onSelectAssetSubType = (selectedAssetSubType) => {
    setSubType(selectedAssetSubType);
  };

  const onSelectAssetType = (selectedAssetType) => {
    setAssetType(selectedAssetType);
    console.log("Vikas" + selectedAssetType);
  };

  const newSelectedAssetType = data.filter((assetType) => {
    return assetType.AssetType === assetTypeSelected;
  });

  const newSelectedSubType = newSelectedAssetType.filter((subType) => {
    return subType.AssetSubType === assetSubTypeSelected;
  });
  // const onSubmitHandler = () => {
  //   newSelectedAssetType.filter((subType) => {
  //     return subType.AssetSubType === assetSubTypeSelected;
  //   });
  // };
  // const onClickHandler = (e)=>{
  //   e.preventDefault()
  //    setMockData(e.target.value);
  // }
  return (
    <div className="table-box">
      <div className="asset_type">
        <AssetType
          assetData={data}
          getSelectedAssetType={onSelectAssetType}
          getSelectedAssetSubType={onSelectAssetSubType}
        />
      </div>
      <table>
        <tr>
          <th>AssetID</th>
          <th>AssetType</th>
          <th>AssetSubType</th>
          <th>SerialNumber</th>
          <th>CheckOutStatus</th>
          <th>AssignedDate</th>
          <th>AssignedTo</th>
          <th>AssociateNumber</th>
        </tr>
        {newSelectedSubType.map((details) => (
          <tr>
            <td>{details.AssetID}</td>
            <td>{details.AssetType}</td>
            <td>{details.AssetSubType}</td>
            <td>{details.SerialNumber}</td>
            <td>{details.CheckOutStatus}</td>
            <td>{details.AssignedDate}</td>
            <td>{details.AssignedTo}</td>
            <td>{details.AssociateNumber}</td>
          </tr>
        ))}
      </table>
      <div className="assettype-button">
        <button
          type="submit"
          // onClick = {onClickHandler}
          // value = {newSelectedSubType}
        >
          Retrieve
        </button>
      </div>
      <p>Assignment Details information</p>
      <div className="asset_info">
        <div className="asset_inputs">
          <label For="AssetID">Asset ID:</label>
          <input type="text" id="AssetID" />
          <label For="AssetStatus">Asset Status:</label>
          <input type="text" id="AssetID" />
          <label For="AssetID">Asset ID:</label>
          <input type="text" id="AssetID" />
          <label For="AssetID">Asset ID:</label>
          <input type="text" id="AssetID" />
        </div>
        <div className="assetInfoButtons">
          <button>Ok</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default Table;
