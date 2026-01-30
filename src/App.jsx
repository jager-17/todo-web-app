import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [user, setUser] = useState(null);
  const [boards, setBoards] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [todos, setTodos] = useState([]);

  // 🔐 Auth listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) {
        fetchBoards(); // ✅ LOGIN KE BAAD BOARDS LOAD
      }
    });
    return () => unsub();
  }, []);

  // 📦 Fetch boards
  const fetchBoards = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/boards");
      const data = await res.json();
      setBoards(data);
    } catch (err) {
      console.error("Fetch boards error:", err);
    }
  };

  // 📦 Fetch todos
  const fetchTodos = async (id) => {
    const res = await fetch(`http://localhost:5001/api/todos/${id}`);
    const data = await res.json();
    setTodos(data);
  };

  // ➕ Create board
  const createBoard = async () => {
    if (!title.trim()) return alert("Board title likh");

    await fetch("http://localhost:5001/api/boards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    setTitle("");       // ✅ input clear
    fetchBoards();      // ✅ list refresh
  };

  // 🔓 Not logged in
  if (!user) {
    return (
      <>
        <Signup />
        <Login />
      </>
    );
  }

  // ✅ Logged in UI
  return (
    <div>
      <h1>Boards</h1>

      <button onClick={() => signOut(auth)}>Logout</button>

      <br /><br />

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Board title"
      />
      <button onClick={createBoard}>Create Board</button>

      <hr />

      {/* 🧱 Boards list */}
      {boards.length === 0 && <p>No boards yet</p>}

      {boards.map((b) => (
        <div
          key={b._id}
          style={{ cursor: "pointer", margin: "5px 0" }}
          onClick={() => {
            setSelectedBoard(b);
            fetchTodos(b._id);
          }}
        >
          📌 {b.title}
        </div>
      ))}

      {/* 📝 Todos */}
      {selectedBoard && (
        <>
          <h2>Todos in {selectedBoard.title}</h2>
          {todos.map((t) => (
            <div key={t._id}>• {t.title}</div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
