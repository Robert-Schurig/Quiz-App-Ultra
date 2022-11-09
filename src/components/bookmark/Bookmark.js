export default function Bookmark({ currentPage }) {
  return (
    <h2 className={currentPage === "bookmark" ? "" : "hidden"}>
      This Section is under construction.
    </h2>
  );
}
