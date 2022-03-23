import Head from "next/head";

interface PageTitle {
  title: string;
}

const PageTitle = ({ title }: PageTitle) => {
  return (
    <Head>
      <title>{title} | Movie</title>
    </Head>
  );
};

export default PageTitle;
