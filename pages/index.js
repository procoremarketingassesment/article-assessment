import { createClient } from "contentful";

const client = createClient({
  space: "78jjdvu7aqmg",
  accessToken: "pvnmtXqb1RGArl2fJnerqaNHqdN3I5FuUigUE7ULR0w",
});

async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function getStaticProps() {
  const res = await fetchEntries();

  return {
    props: {
      res,
    },
  };
}

export default function Home({ res }) {
  console.log(res);

  return <div className="container"></div>;
}
