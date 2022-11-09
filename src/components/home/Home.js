export default function Home({ currentPage }) {
  return (
    <h2 className={currentPage === "bookmarks" ? "" : "hidden"}>
      This Section is under construction.
    </h2>
  );
}
