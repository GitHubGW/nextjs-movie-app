import Head from "next/head";

interface PageTitle {
  title: string;
}

const PageTitle = ({ title }: PageTitle) => {
  return (
    <Head>
      <title>{title} | NextJS Movie</title>
    </Head>
  );
};

export default PageTitle;
