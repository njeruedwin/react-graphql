import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_PAGES = gql`
  query {
    User {
        name
        siteUrl
      }
  }
`;

export default function DataSection() {
  const { data, error, loading } = useQuery(GET_PAGES);

  if (error) return <div>Error Loading data ...</div>;
  if (loading) return <div> Loading ...</div>;

  return (
    <div>
      {data.User.map((resp) => {
        return (
          <div>
           <h2>Description</h2>
           <span>
            <a href={resp.siteUrl}>Acces The Site</a>
            <br />
           </span>
            <span>{resp.name}</span>
            <br/>
          </div>
        );
      })}
    </div>
  );
}
