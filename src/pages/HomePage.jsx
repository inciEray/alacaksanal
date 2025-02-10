import React from "react";

import PageContent from "../layout/PageContent";
import NewCollection from "../components/NewCollection";

export default function HomePage() {
  return (
    <div className="">
      <PageContent>
      <NewCollection></NewCollection>
      </PageContent>
    </div>
  );
}