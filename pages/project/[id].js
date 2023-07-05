import React, { useEffect, useState } from "react";
import ProjectComponent from "../../components/page/ProjectComponent";
import {
  makeQuery,
  oneProjectQuery,
  studioQuery,
  projectsQuery,
} from "../../services/api";
import withLayout from "../../hocs/withLayout";
import Head from "next/head";

export async function getStaticPaths() {
  let { projects_manor } = await makeQuery(projectsQuery);

  const paths = projects_manor.map((p) => ({
    params: { id: p.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // let { projects } = await makeQuery(oneProjectQuery(params));
  // let { studio } = await makeQuery(studioQuery);
  return {
    props: {
      params: params,
      // project: projects,
      // studio: studio,
    },
  };
}

function Project({ params }) {
  const [studio, setStudio] = useState(null);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let { studio } = await makeQuery(studioQuery);
      let { projects } = await makeQuery(oneProjectQuery(params));

      setStudio(studio);
      setProject(projects);
    };

    fetchData();
  }, []);

  if (!studio || !project) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>{studio?.title_site}</title>
        <meta name="description" content={studio?.description_site} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProjectComponent project={project} />
    </>
  );
}

export default withLayout(Project);
