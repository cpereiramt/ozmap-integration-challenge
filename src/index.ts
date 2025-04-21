import dotenv from "dotenv";
dotenv.config();

import { IspService } from "./services/IspService";

async function main() {
  const cables = await IspService.getCables();
  console.log("Cabos:", cables);

  const boxes = await IspService.getBoxes();
  console.log("Caixas:", boxes);

  const drops = await IspService.getDropCables();
  console.log("Drops:", drops);

  const customers = await IspService.getCustomers();
  console.log("Clientes:", customers);
}

main().catch(console.error);
