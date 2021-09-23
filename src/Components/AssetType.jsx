import { useState } from 'react';
import data from "../mock-data.json"
const AssetType = () => {
    const [assetType, setAssetType] = useState(data)
    return(
        <div>
                <p>AssetType</p>
                <select>
                {assetType.map((assetDetail)=> 
                <option value="">{assetDetail.AssetType}</option>
                )}
                </select>
                <p>SubType</p>
                <select>
                {assetType.map((assetDetail)=> 
                <option value="">{assetDetail.AssetSubType}</option>
                )}
                </select>
        </div>
    );
}
export default AssetType