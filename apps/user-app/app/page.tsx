// import { PrismaClient } from "../../../packages/db";
import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();

export default function Page(): JSX.Element {
  return (
    <div className="container">
      <div className="card">
        <p className="text">Paytm App!!!</p>
      </div>
    </div>
  );
}
