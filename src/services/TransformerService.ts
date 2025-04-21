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

  static transformDropCable(drop: any) {
    return {
      external_id: `drop-${drop.id}`,
      name: drop.name,
      box_external_id: `box-${drop.box_id}`,
      customer_external_id: `customer-${drop.customer_id}`,
    };
  }

  static transformCustomer(customer: any) {
    return {
      external_id: `customer-${customer.id}`,
      name: customer.name,
      address: customer.address,
      box_external_id: `box-${customer.box_id}`,
      code: customer.code,
    };
  }
}
