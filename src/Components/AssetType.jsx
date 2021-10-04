import { useState } from "react";
const AssetType = (props) => {
  const [assetTypeData, setAssetTypeData] = useState();
  const onAssetTypeChangeHandler = (e) => {
    e.preventDefault();
    props.getSelectedAssetType(e.target.value);
    setAssetTypeData(e.target.value);
  };
  const selectSubTypeFilter = props.assetData.filter((subTypeFilter) => {
    if (subTypeFilter.AssetType === assetTypeData) {
      return subTypeFilter;
    } else {
      return "No data";
    }
  });

  const onSubTypeChangeHandler = (e) => {
    e.preventDefault();
    props.getSelectedAssetSubType(e.target.value);
  };

  return (
    <div>
      <label For="assetTypeDropDown">AssetType:</label>
      <select id="assetTypeDropDown" onChange={onAssetTypeChangeHandler}>
        {props.assetData.map((assetDetail) => (
          <option>{assetDetail.AssetType}</option>
        ))}
      </select>
      <label For="assetSubTypeDropDown">Asset SubType:</label>
      <select id="assetSubTypeDropDown" onChange={onSubTypeChangeHandler}>
        {selectSubTypeFilter.map((assetDetail) => (
          <option>{assetDetail.AssetSubType}</option>
        ))}
      </select>
    </div>
  );
};
export default AssetType;
