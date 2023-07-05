import React, { useEffect, useState } from "react";
import withLayout from "../../hocs/withLayout";
import { makeQuery, opporrunitiesQuery, studioQuery } from "../../services/api";
import CareersComponent from "../../components/page/CareersComponent";

export async function getStaticProps() {
  // let { studio } = await makeQuery(studioQuery);
  // let { opporrunities_open } = await makeQuery(opporrunitiesQuery);

  return {
    props: {
      // studio: studio,
      // opporrunities: opporrunities_open,
    },
  };
}

function Careers(props) {
  const [studio, setStudio] = useState(null);
  const [opporrunities, setOpporrunities] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let { studio } = await makeQuery(studioQuery);
      let { opporrunities_open } = await makeQuery(opporrunitiesQuery);

      setStudio(studio);
      setOpporrunities(opporrunities_open);
    };

    fetchData();
  }, []);

  if (!studio || !opporrunities) {
    return <></>;
  }

  return (
    <CareersComponent
      studio={studio}
      opporrunities={opporrunities}
      {...props}
    />
  );
}

export default withLayout(Careers);
