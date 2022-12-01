import { useEffect, useState } from "react";

const TransactionComponent = (props) => {
  const [search, setSearch] = useState("");
  const [filtertrx, setFilter] = useState(props.transaction);
  const changeHandler = (e) => {
    setSearch(e.target.value);
    //console.log(search);
    filterTransaction(e.target.value);
  };
  const filterTransaction = (search) => {
    if (search === "") {
      setFilter(props.transaction);
      return;
    }
    setFilter(
      props.transaction.filter((t) =>
        t.desc.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  useEffect(() => {
    filterTransaction(search);
  }, [props.transaction]);

  console.log("aa", filtertrx);
  return (
    <>
      <input
      className="searchBox"
        type="text"
        value={search}
        onChange={changeHandler}
        placeholder="Search for..."
      />
      <section className={`${filtertrx.length > 0 ? "transaction-item" : ""} `}>
        {filtertrx.map((t) => (
          <div
            key={t.id}
            className={` ${
              t.type === "expense" ? "borderLeft" : "borderRight"
            }`}
          >
            <span> {t.desc}</span>
            <span> {t.amount}</span>
          </div>
        ))}
      </section>
    </>
  );
};

export default TransactionComponent;
