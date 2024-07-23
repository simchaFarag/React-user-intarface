
export default function OtherData( { user }) {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "gray",
          width: "250px",
          height: "100px",
          borderRadius: "10px",
        }}
      >
        Street :{" "}
        <input
          value={user?.address?.street}
          onChange={() => console.log("onChange")}
        />{" "}
        <br />
        city :{" "}
        <input
          value={user?.address?.city}
          onChange={() => console.log("onChange")}
        />{" "}
        <br />
        zip code :{" "}
        <input
          value={user?.address?.zipcode}
          onChange={() => console.log("onChange")}
        />
      </div>
      
    </>
  );
}
