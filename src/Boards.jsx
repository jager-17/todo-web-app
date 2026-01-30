import { useEffect, useState } from "react";

function Boards() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/boards")
      .then(res => res.json())
      .then(setBoards);
  }, []);

  return (
    <div>
      <h2>Boards</h2>
      {boards.map(b => (
        <div key={b._id}>{b.title}</div>
      ))}
    </div>
  );
}

export default Boards;
