export default async function Home({
  params,
}: {
  params: {
    userName: string;
  };
}) {
  return <main className="UserContainer">Hello there, {params.userName}</main>;
}
