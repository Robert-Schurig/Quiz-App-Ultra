export default function CreateCard({ currentPage }) {
  return (
    <h2 className={currentPage === "bookmarks" ? "" : "hidden"}>
      This Section is under construction.
    </h2>
  );
}
