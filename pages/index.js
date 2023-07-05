import React, { useEffect, useState } from "react";
import withLayout from "../hocs/withLayout";
import { makeQuery, projectsQuery, studioQuery } from "../services/api";
import OfferComponent from "../components/page/OfferComponent";
import WorksComponent from "../components/page/WorksComponent";

export async function getStaticProps() {
  // let { studio } = await makeQuery(studioQuery);
  // let { projects_manor } = await makeQuery(projectsQuery);
  return {
    props: {
      // studio: studio,
      // projects: projects_manor
      //   ? projects_manor.sort((a, b) => a.sort - b.sort)
      //   : [],
    },
  };
}

function Main() {
  const [studio, setStudio] = useState(null);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let { studio } = await makeQuery(studioQuery);
      let { projects_manor } = await makeQuery(projectsQuery);

      setStudio(studio);
      setProjects(projects_manor);
    };

    fetchData();
  }, []);

  if (!studio || !projects) {
    return <></>;
  }

  return (
    <>
      <OfferComponent studio={studio} />
      <WorksComponent studio={studio} projects={projects} />
    </>
  );
}

export default withLayout(Main);
