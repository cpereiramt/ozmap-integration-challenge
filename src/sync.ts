import dotenv from "dotenv";
dotenv.config();

import { IspService } from "./services/IspService";
import { TransformerService } from "./services/TransformerService";
import { OzmapService } from "./services/OzmapService";

async function sync() {
  console.log("🔄 Iniciando sincronização completa...");

  try {
    // ========================
    // CABOS
    // ========================
    const cables = await IspService.getCables();
    for (const cable of cables) {
      const transformed = TransformerService.transformCable(cable);
      const deleted = await OzmapService.deleteCable(transformed.external_id);
    }

    // ========================
    // BOXES
    // ========================
    const boxes = await IspService.getBoxes();
    for (const box of boxes) {
      const transformed = TransformerService.transformBox(box);

      const created = await OzmapService.createBox(transformed);

      const updated = await OzmapService.updateBox(transformed.external_id, {
        ...transformed,
        name: `${transformed.name} (Atualizada)`,
      });

      const data = await OzmapService.getBoxById(transformed.external_id);

      const deleted = await OzmapService.deleteBox(transformed.external_id);
    }

    // ========================
    // CLIENTES
    // ========================
    const customers = await IspService.getClients();
    for (const customer of customers) {
      const transformed = TransformerService.transformClient(customer);

      const created = await OzmapService.createClient(transformed);

      const updated = await OzmapService.updateClient(transformed.external_id, {
        ...transformed,
        name: `${transformed.name} (Atualizado)`,
      });

      const data = await OzmapService.getClientById(transformed.external_id);

      const deleted = await OzmapService.deleteClient(transformed.external_id);
    }

    console.log("✅ Sincronização concluída com sucesso!");
  } catch (err) {
    console.error("❌ Erro durante a sincronização:", err);
  }
}

sync();
