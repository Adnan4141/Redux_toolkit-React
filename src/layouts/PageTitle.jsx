import {Helmet} from "react-helmet";
import { SiAdonisjs } from "react-icons/si";


const PageTitle = ({title}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" type="<SiAdonisjs />" href="../../assets/download.jpeg" />
    </Helmet>
  );
};

export default PageTitle;

// npm i react-helmet