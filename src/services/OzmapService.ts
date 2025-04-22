export class OzmapService {
  // ========================
  // CABLE
  // ========================
  
  static async deleteCable(id: string) {
    console.log(`[MOCK] Deletando cable ID: ${id}`);
    return { status: "deleted", id };
  }

  // ========================
  // BOX
  // ========================
  static async createBox(box: any) {
    console.log("[MOCK] Criando box:", box);
    return { status: "created", type: "box", data: box };
  }

  static async listBoxes() {
    console.log("[MOCK] Listando boxes");
    return [{ external_id: "box-1" }, { external_id: "box-2" }];
  }

  static async getBoxById(id: string) {
    console.log(`[MOCK] Buscando box por ID: ${id}`);
    return { external_id: id, name: "Mock Box" };
  }

  static async updateBox(id: string, box: any) {
    console.log(`[MOCK] Atualizando box ID ${id}:`, box);
    return { status: "updated", id, data: box };
  }

  static async deleteBox(id: string) {
    console.log(`[MOCK] Deletando box ID: ${id}`);
    return { status: "deleted", id };
  }

  // ========================
  // CLIENT
  // ========================
  static async createClient(client: any) {
    console.log("[MOCK] Criando client:", client);
    return { status: "created", type: "custclientomer", data: client };
  }

  static async listClients() {
    console.log("[MOCK] Listando client");
    return [{ external_id: "client-1" }, { external_id: "client-2" }];
  }

  static async getClientById(id: string) {
    console.log(`[MOCK] Buscando client por ID: ${id}`);
    return { external_id: id, name: "Mock client" };
  }

  static async updateClient(id: string, client: any) {
    console.log(`[MOCK] Atualizando client ID ${id}:`, client);
    return { status: "updated", id, data: client };
  }

  static async deleteClient(id: string) {
    console.log(`[MOCK] Deletando client ID: ${id}`);
    return { status: "deleted", id };
  }
}
