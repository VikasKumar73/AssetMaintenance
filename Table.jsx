import data from "../mock-data.json"
import React, { useState } from 'react';
import './Table.css';

const Table = () =>{
    const [assetDetails , setDetails] = useState(data);
    console.log(setDetails);
    return(
      <div className = "table-box"> 
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
               {assetDetails.map((details) => 
              <tr>
                  <td>{details.AssetID}</td>
                  <td>{details.AssetType}</td>
                  <td>{details.SerialNumber}</td>
                  <td>{details.SerialNumber}</td>
                  <td>{details.CheckOutStatus}</td>
                  <td>{details.AssignedDate}</td>
                  <td>{details.AssignedTo}</td>
                  <td>{details.AssociateNumber}</td>
              </tr>
              )}
            </table>
            </div>
    )
}
export default Table