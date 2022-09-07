import { useState } from "react";
import Porta from "../components/Porta";
import Presente from "../components/Presente";
import PortaModel from "../model/porta";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1));
  const [p2, setP2] = useState(new PortaModel(2));

  return (
    <div style={{display: "flex"}}>
      <Porta value={p1} onChange={setP1} />
      <Porta value={p2} onChange={setP2}/>
    </div>
  )
}
