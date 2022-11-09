export default function Profile({ currentPage }) {
  return (
    <h2 className={currentPage === "profilepage" ? "" : "hidden"}>
      This Section is under construction.
    </h2>
  );
}
