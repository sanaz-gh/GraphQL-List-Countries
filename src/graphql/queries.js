import { gql } from "@apollo/client";

  const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      code
      name
      capital
      currency
      emoji
    languages {
      code
      name
    }
  }
  }
  `;

  const SEARCH_COUNTRY = gql`
  query SearchQuery($code: ID!) {
    country(code: $code) {
      name,
      native,
      capital,
      emoji,
      currency,
      languages  {
        code,
        name
      }
    }
  }
`;

export {SEARCH_COUNTRY, GET_COUNTRIES};