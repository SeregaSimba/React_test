import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
  useReducer,
} from "react";

const ThemeContext = createContext(null);
const UserContext = createContext(null);

const USER1 = "name";
const USER2 = "name1";

function reducer(state, action) {
  switch (action.type) {
    case USER1:
      return {
        user: "Ser",
        rul: "Admin",
      };
    case USER2:
      return {
        user: "Art",
        rul: "user",
      };
    default:
      return state;
  }
}

function ComponentThem({ children }) {
  const colorThems = "red";
  const [thems, setThems] = useState(colorThems);

  function newThems() {
    setThems((prov) => (prov === "red" ? "black" : "red"));
  }

  const value = useMemo(
    () => ({
      thems,
      newThems,
    }),
    [thems, newThems]
  );

  return (
    <>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  );
}

function ComponentContext({ children }) {
  const testUser = { user: "?", rul: "?" };
  const [user, dispatch] = useReducer(reducer, testUser);

  const returnUser1 = useCallback(
    () =>
      dispatch({
        type: USER1,
      }),
    []
  );

  const returnUser2 = useCallback(() => dispatch({ type: USER2 }), []);

  const value = useMemo(
    () => ({
      user,
      returnUser1,
      returnUser2,
    }),
    [user, returnUser1, returnUser2]
  );

  return (
    <>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </>
  );
}

function AppThem() {
  const { thems, newThems } = useContext(ThemeContext);
  return (
    <>
      <button
        onClick={() => {
          newThems();
        }}
      ></button>
      <div style={{ background: thems, color: "white", textAlign: "center" }}>
        theam {thems}
      </div>
    </>
  );
}

function AppUser() {
  const { user, returnUser1, returnUser2 } = useContext(UserContext);

  return (
    <>
      <div>
        User: {user.user} Rul: {user.rul}
      </div>
      <button
        onClick={() => {
          console.log(user.user);
          returnUser1();
        }}
      >
        Set User 1
      </button>
      <button
        onClick={() => {
          returnUser2();
        }}
      >
        Set User 2
      </button>
    </>
  );
}

export function ContextUI() {
  return (
    <>
      <ComponentThem>
        <ComponentContext>
          <div>
            <AppThem />
            <AppUser />
          </div>
        </ComponentContext>
      </ComponentThem>
    </>
  );
}
