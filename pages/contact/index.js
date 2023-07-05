import React, { useEffect, useState } from "react";
import withLayout from "../../hocs/withLayout";
import { makeQuery, studioQuery } from "../../services/api";
import ContactPage from "../../components/page/ContactComponent";

export async function getStaticProps() {
  // let { studio } = await makeQuery(studioQuery);
  return {
    props: {
      // studio,
    },
  };
}

function Contact(props) {
  const [studio, setStudio] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let { studio } = await makeQuery(studioQuery);

      setStudio(studio);
    };

    fetchData();
  }, []);

  if (!studio) {
    return <></>;
  }

  return <ContactPage studio={studio} {...props} />;
}

export default withLayout(Contact, {
  smallFooter: true,
  headerBlack: true,
  layoutBlack: true,
});
