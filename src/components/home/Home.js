export default function Home({ currentPage }) {
  return (
    <h2 className={currentPage === "home" ? "" : "hidden"}>
      This Section is under construction.
    </h2>
  );
}
