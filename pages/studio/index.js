import React, { useEffect, useState } from "react";
import withLayout from "../../hocs/withLayout";
import {
  clientsQuery,
  makeQuery,
  opporrunitiesQuery,
  studioQuery,
} from "../../services/api";
import StudioPage from "../../components/page/StudioComponent";

export async function getStaticProps() {
  // let { studio } = await makeQuery(studioQuery);
  // let { clients } = await makeQuery(clientsQuery);
  // let { opporrunities_open } = await makeQuery(opporrunitiesQuery);

  return {
    props: {
      // studio,
      // clients,
      // opporrunities: opporrunities_open,
    },
  };
}

function Studio(props) {
  const [studio, setStudio] = useState(null);
  const [clients, setClients] = useState(null);
  const [opporrunities, setOpporrunities] = useState(null);
  console.log("out");

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchData");
      let { studio } = await makeQuery(studioQuery);
      let { clients } = await makeQuery(clientsQuery);
      let { opporrunities_open } = await makeQuery(opporrunitiesQuery);

      setStudio(studio);
      setClients(clients);
      setOpporrunities(opporrunities_open);
    };

    fetchData();
  }, []);

  if (!studio || !opporrunities || !clients) {
    return <></>;
  }

  return (
    <StudioPage
      studio={studio}
      clients={clients}
      opporrunities={opporrunities}
      {...props}
    />
  );
}

export default withLayout(Studio);
