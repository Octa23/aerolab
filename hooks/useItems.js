import {useState, useEffect} from "react";

import {helpHttp} from "../helpers/helpHttp";
import ProductItem from "../components/ProducItem";

const url = "https://coding-challenge-api.aerolab.co/products";

const useItems = () => {
  const {get} = helpHttp();
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const handlepage = () => {
    {
      page === 1 ? setPage(2) : setPage(1);
    }
  };

  useEffect(() => {
    get(url).then((response) => {
      setItems(response);
    });
  }, []);

  const List = ({sort = null}) => {
    const sortedItems = [].concat(items);

    sortedItems.sort((item1, item2) =>
      sort === 1 && item1.cost < item2.cost
        ? -1
        : sort === 2 && item1.cost > item2.cost
        ? -1
        : null,
    );

    return (
      sortedItems &&
      sortedItems.map((item, index) =>
        index + 1 <= Totalitems / 2 && page === 1 ? (
          <ProductItem key={item._id} item={item} />
        ) : (
          page === 2 && index + 1 > Totalitems / 2 && <ProductItem key={item._id} item={item} />
        ),
      )
    );
  };
  const Totalitems = items.length;

  return {List, Totalitems, page, handlepage};
};

export default useItems;
