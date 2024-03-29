import React from "react";
import { Link } from "react-router-dom";
import { useSearchResultsStore } from "../Components/Partials/Header/Search/useSearchResultStore";
import { StyledHouseCard } from "../Styles/HouseCard.Styled";
import { Page } from "../Styles/PageTemplate/Page";
import { StyledSearchResult } from "./SearchResult.Styled";

const SearchResult = () => {
  const { searchResults } = useSearchResultsStore();
  console.log("søgeresult", searchResults);

  const formatPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    currencyDisplay: "symbol",
  });
  return (
    <Page title="Søgeresultat">
      <StyledSearchResult>
        <h2>Din søgning</h2>
        <StyledHouseCard columnWidth={400}>
          {searchResults?.length > 0 ? (
            searchResults.map((item, i) => (
              <article key={i}>
                <div className="imagewrap">
                  <Link to={`/boliger/${item.id}`}>
                    <img
                      src={item.images[0].filename.medium}
                      alt={"et billede af" + item.address}
                    />
                  </Link>
                </div>
                <h3>{item.address}</h3>
                <p className="marginBottom font">
                  {item.zipcode} {item.city}
                </p>
                <p className="marginTop font">{item.type}</p>
                <div>
                  <div>
                    <p>{item.energy_label_name}</p>
                  </div>
                  <p>
                    {item.num_rooms} værelser, {item.floor_space}m2
                  </p>
                  <p className="price">{formatPrice.format(item.price)}</p>
                </div>
              </article>
            ))
          ) : (
            <p>Din søgning gav ingen resultater</p>
          )}
        </StyledHouseCard>
      </StyledSearchResult>
    </Page>
  );
};

export default SearchResult;
