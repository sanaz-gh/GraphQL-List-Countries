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

  const GET_COUNTRY = gql`
  query getCountry($code: ID!) {
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

export {GET_COUNTRY, GET_COUNTRIES};