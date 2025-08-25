import { Treid } from "../../../Treid/Treid";

export const Shopping = ({ carts }) => {
  return (
    <>
      {carts.map(({ cartName, price }) => (
        <Treid price={price} cartName={cartName} />
      ))}
    </>
  );
};
