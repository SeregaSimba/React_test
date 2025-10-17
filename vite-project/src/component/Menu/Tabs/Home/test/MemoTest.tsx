import { useMemo, useCallback, useState } from "react";

export function MemoApp() {
  return (
    <>
      <div>
        <CreateTudu />
      </div>
    </>
  );
}

function CreateTudu() {
  const [selected, setSelected] = useState(null);
  const [click, setClick] = useState(0);
  const [name, setName] = useState("");
  const arr = [
    "name 1",
    "name 2",
    "name 3",
    "name 4",
    "name 5",
    "name 6",
    "name 7",
    "name 8",
    "name 9",
    "name 10",
  ];

  const hendSelected = useCallback((el) => {
    setSelected(el);
    setClick((count) => count + 1);
  }, []);

  const filterInput = useMemo(() => {
    return arr.filter((el) => el.toLowerCase().includes(name.toLowerCase()));
  }, [arr, name]);

  function chengeInput(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input type="text" value={name} onChange={chengeInput} />
      <div style={{ backgroundColor: "red" }}>{click}</div>
      <div>
        {filterInput.map((el) => (
          <div
            key={el}
            onClick={() => hendSelected(el)}
            style={{
              backgroundColor: el === selected ? "yellow" : "transparent",
            }}
          >
            {el}
          </div>
        ))}
      </div>
    </>
  );
}
