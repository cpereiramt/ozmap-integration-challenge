export class TransformerService {
  static transformCable(cable: any) {
    return {
      external_id: `cable-${cable.id}`,
      name: cable.name,
      capacity: cable.capacity,
      boxes_connected: cable.boxes_connected.map((id: number) => `box-${id}`),
      path: cable.path.map((p: any) => [p.lat, p.lng]),
    };
  }

  static transformBox(box: any) {
    return {
      external_id: `box-${box.id}`,
      name: box.name,
      type: box.type,
      location: [box.lat, box.lng],
    };
  }

  static transformClient(customer: any) {
    return {
      external_id: `customer-${customer.id}`,
      name: customer.name,
      address: customer.address,
      box_external_id: `box-${customer.box_id}`,
      code: customer.code,
    };
  }
}
