import React from "react";

import PageContent from "../layout/PageContent";
import NewCollection from "../components/NewCollection";
import ClassicCollection from "../components/ClassicCollection";
import EditorsPick from "../components/EditorsPick";

export default function HomePage() {
  return (
    <div className="">
      <PageContent>
      <NewCollection></NewCollection>
      <EditorsPick></EditorsPick>
      <ClassicCollection></ClassicCollection>
      </PageContent>
    </div>
  );
}