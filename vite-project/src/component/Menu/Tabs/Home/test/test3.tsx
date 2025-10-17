import { useState } from "react";

function Greeting(props) {
  const { name = "Ser", age = "33" } = props;
  return (
    <>
      <div>
        Привет {name} Мне {age}{" "}
      </div>
    </>
  );
}

export function Test3() {
  return (
    <>
      <Test />
    </>
  );
}

function Test() {
  const [count, setCount] = useState(false);

  const App = () => {
    if (count === true) {
      setCount(true);
      console.log(count);
    } else {
      setCount(false);
      console.log(count);
    }
  };

  return (
    <div>
      <button onClick={App}>Привет, React! </button>
      <div>{count}</div>
      <NameForm />
      <Greeting name="Serg" age="33" />
    </div>
  );
}

function Button(props) {
  return (
    <>
      <button onClick={props.onClick}> Нажми меня</button>
    </>
  );
}

function buttonOnClick() {
  return (
    <>
      <div>кнопка нажата</div>
    </>
  );
}

function AddButtonFunction() {
  return (
    <>
      <Button onClick={buttonOnClick} />
    </>
  );
}

function NameForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");
  const arr = [];

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(`Отправлено имя: ${name}`);
    console.log(`Сколько лет ${age}`);
    arr.push([name, age]);
    event.preventDefault();
  };

  return (
    <>
      <select value={[name, age]} id="">
        <option value={name}>{[name, age]}</option>
      </select>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Возраст:
          <input type="text" value={age} onChange={handleChangeAge} />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </>
  );
}
