import { useContext } from "react";
import { VictoryPie } from "victory";

import { groupBy, prop, toPairs, clone, isEmpty } from "ramda";

import { DashboardContext } from "../../App";

import NoData from "../../common/NoData";

const Genre = () => {
  const books = useContext(DashboardContext);
  const clonedBooks = clone(books);
  const bookysByGenre = toPairs(groupBy(prop("Genre"), clonedBooks));
  const data = bookysByGenre.map((item) => ({
    x: item[0],
    y: item[1].length,
    label: item[0] + ":" + item[1].length,
  }));

  return (
    <>
      {isEmpty(data) ? (
        <NoData />
      ) : (
        <VictoryPie
          data={data}
          colorScale={["orange", "gold"]}
          labelRadius={50}
          name="GENRE"
          style={{ labels: { fontSize: 14 } }}
        />
      )}
    </>
  );
};

export default Genre;
