import { useContext } from "react";
import { VictoryScatter, VictoryZoomContainer, VictoryChart } from "victory";

import { prop, clone, isEmpty, sortBy } from "ramda";

import { DashboardContext } from "../../App";

import NoData from "../../common/NoData";

const Reviews = () => {
  const books = useContext(DashboardContext);
  const clonedBooks = clone(books);
  const finalPoint = clonedBooks.length;
  const data = sortBy(
    prop("Reviews"),
    clonedBooks.map((item) => ({
      x: item.Reviews,
      y: item.Name,
    }))
  ).slice(finalPoint - 20, finalPoint);

  return (
    <>
      {isEmpty(data) ? (
        <NoData />
      ) : (
        <VictoryChart ç containerComponent={<VictoryZoomContainer />}>
          <VictoryScatter
            data={data}
            style={{
              data: {
                opacity: ({ datum }) => (datum.y % 5 === 0 ? 1 : 0.7),
                fill: ({ datum }) => (datum.y % 5 === 0 ? "tomato" : "black"),
              },
            }}
          />
        </VictoryChart>
      )}
    </>
  );
};

export default Reviews;
