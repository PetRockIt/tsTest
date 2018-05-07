export enum OrderProcessing {
  Processing_PreOrder = 1,
  Processing_Fulfill = 2
}

export interface OrderItem {
  orderItemId: number;
  orderItemKey: string;
}
  
export interface Order {
  id: number; 
  key: string;
  orderDate: string;
  orderProcessing: OrderProcessing;
  orderItems: OrderItem[];
}
  
export interface SaveOrder {
  id: number; 
  orderDate: string;
  orderProcessing: OrderProcessing;
  orderItems: OrderItem[];
}
