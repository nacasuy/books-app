import { useContext } from "react";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryLabel,
  VictoryAxis,
} from "victory";

import { groupBy, prop, toPairs, clone, isEmpty, sortBy } from "ramda";
import { DashboardContext } from "../../App";
import NoData from "../../common/NoData";

const Title = () => {
  const books = useContext(DashboardContext);
  const clonedBooks = clone(books);
  const booksByTitle = toPairs(groupBy(prop("Name"), clonedBooks));
  const finalPoint = booksByTitle.length;
  const data = sortBy(
    prop("y"),
    booksByTitle.map((item) => ({
      x: item[0],
      y: item[1].length,
    }))
  ).slice(finalPoint - 20, finalPoint);
  return (
    <>
      {isEmpty(data) ? (
        <NoData />
      ) : (
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryAxis label="Titles" tickFormat={() => ""} />
          <VictoryBar
            horizontal
            data={data}
            labelComponent={<VictoryLabel textAnchor="start" />}
            labels={data.map((item) => item.x)}
            labelPlacement="horizontal"
          />
        </VictoryChart>
      )}
    </>
  );
};

export default Title;
