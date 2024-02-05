import Navbar from "./Navbar";

export default function Header(props: { name: string }) {
  return (
    <>
      <p>Header {props.name}</p>
      <div>
        <Navbar {...props}>
          <p>totototqsdq qsd oo</p>
        </Navbar>
      </div>
    </>
  );
}
