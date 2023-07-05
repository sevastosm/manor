import React, { useEffect, useState } from "react";
import ProjectComponent from "../../components/page/ProjectComponent";
import { makeQuery, oneProjectQuery, studioQuery } from "../../services/api";
import withLayout from "../../hocs/withLayout";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getStaticProps() {
  // let { studio } = await makeQuery(studioQuery);
  return {
    props: {
      // studio: studio,
    },
  };
}

function ProjectIndex() {
  const [project, setProject] = useState(null);
  const [studio, setStudio] = useState(null);

  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      let { studio } = await makeQuery(studioQuery);

      setStudio(studio);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (query?.id) {
      makeQuery(oneProjectQuery({ id: query?.id })).then(({ projects }) => {
        setProject(projects);
      });
    }
  }, [query]);

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
      <ProjectComponent studio={studio} project={project} />
    </>
  );
}

export default withLayout(ProjectIndex);
