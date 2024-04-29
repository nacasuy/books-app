import { useContext, useState } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryPortal,
  Bar,
} from "victory";

import { groupBy, prop, toPairs, clone, isEmpty, sortBy } from "ramda";

import { DashboardContext } from "../../App";

import NoData from "../../common/NoData";
import Details from "../Details";

const Authors = () => {
  const books = useContext(DashboardContext);

  //Modal with Details
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const clonedBooks = clone(books);
  const booksByAuthors = toPairs(groupBy(prop("Author"), clonedBooks));
  const finalPoint = booksByAuthors.length;

  const data = sortBy(
    prop("y"),
    booksByAuthors.map((item) => ({
      x: item[0],
      y: item[1].length,
    }))
  ).slice(finalPoint - 20, finalPoint);

  return (
    <>
      {isEmpty(data) ? (
        <NoData />
      ) : (
        <>
          <VictoryChart
            domainPadding={5}
            animate={{ duration: 2000, easing: "bounce" }}
          >
            <VictoryAxis tickFormat={() => ""} />
            <VictoryBar
              style={{
                data: {
                  fill: ({ datum }) => (datum.x === 3 ? "#000000" : "#c43a31"),
                  stroke: ({ index }) =>
                    +index % 2 === 0 ? "#000000" : "#c43a31",
                  fillOpacity: 0.7,
                  strokeWidth: 1,
                  padding: 2,
                },
              }}
              data={data}
              dataComponent={
                <Bar
                  events={{
                    onClick: handleOpen,
                  }}
                />
              }
              labels={data.map((item) => item.x)}
              labelComponent={
                <VictoryPortal>
                  <VictoryLabel angle={70} textAnchor="end" />
                </VictoryPortal>
              }
              labelPlacement="vertical"
            />
          </VictoryChart>
          {open && (
            <Details
              data={data}
              handleClose={handleClose}
              title={"Books per Author"}
            />
          )}
        </>
      )}
    </>
  );
};

export default Authors;
