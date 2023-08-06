import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({
  rows,
  currencyType,
  findOrder,
  setSelectedOrderDetails,
  setSelectedOrderTimeStamps,
}) => {
  const searchedData = rows.filter((row) => row["&id"].includes(findOrder));
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currencyValue}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {searchedData.length > 0
          ? searchedData.map((row, index) => (
              <ListRow
                row={row}
                key={index}
                setSelectedOrderDetails={setSelectedOrderDetails}
                setSelectedOrderTimeStamps={setSelectedOrderTimeStamps}
              >
                <ListRowCell>{row["&id"]}</ListRowCell>
                <ListRowCell>
                  {row.executionDetails.buySellIndicator}
                </ListRowCell>
                <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
                <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
                <ListRowCell>
                  {row.bestExecutionData.orderVolume[currencyValue]}
                </ListRowCell>
              </ListRow>
            ))
          : rows.map((row, index) => (
              <ListRow
                row={row}
                key={index}
                setSelectedOrderDetails={setSelectedOrderDetails}
                setSelectedOrderTimeStamps={setSelectedOrderTimeStamps}
              >
               
                <ListRowCell>{row["&id"]}</ListRowCell>
                <ListRowCell>
                  {row.executionDetails.buySellIndicator}
                </ListRowCell>
                <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
                <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
                <ListRowCell>
                  {row.bestExecutionData.orderVolume[currencyType]}
                </ListRowCell>
              </ListRow>
            ))}
      </tbody>
    </table>
  );
};

export default List;
