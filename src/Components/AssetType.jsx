import { useState } from "react";
const AssetType = (props) => {
  const [assetTypeData, setAssetTypeData] = useState();
  const [assetSubType, setAssetSubType] = useState("");

  const onAssetTypeChangeHandler = (e) => {
    e.preventDefault();
    setAssetTypeData(e.target.value);
    props.getSelectedAssetType(e.target.value);
  };
  const selectSubTypeFilter = props.assetData.filter((subTypeFilter) => {
    if (subTypeFilter.AssetType === assetTypeData) {
      return subTypeFilter;
    }
  });

  const onSubTypeChangeHandler = (e) => {
    e.preventDefault();
    setAssetSubType(e.target.value);
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
